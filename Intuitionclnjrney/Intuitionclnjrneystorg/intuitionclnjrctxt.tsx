import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {AppState} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const INTUITIONCLN_FIRST_LAUNCH_KEY = 'intuitionClnFirstLaunchAtMs';

export const StoreContext = createContext<{
  intuitionClnBgMusic: boolean;
  setIntuitionClnBgMusic: (value: boolean) => void;
  intuitionClnVibration: boolean;
  setIntuitionClnVibration: (value: boolean) => void;
  intuitionClnSilverBtns: number;
  setIntuitionClnSilverBtns: (value: number) => void;
  intuitionClnLevelsWonTotal: number;
  setIntuitionClnLevelsWonTotal: (value: number) => void;
  intuitionClnFirstLaunchAtMs: number | null;
  intuitionClnTimeInAppSec: number;
  intuitionClnTapsTotal: number;
  setIntuitionClnTapsTotal: (value: number) => void;
}>({
  intuitionClnBgMusic: false,
  setIntuitionClnBgMusic: () => {},
  intuitionClnVibration: false,
  setIntuitionClnVibration: () => {},
  intuitionClnSilverBtns: 60,
  setIntuitionClnSilverBtns: () => {},
  intuitionClnLevelsWonTotal: 0,
  setIntuitionClnLevelsWonTotal: () => {},
  intuitionClnFirstLaunchAtMs: null,
  intuitionClnTimeInAppSec: 0,
  intuitionClnTapsTotal: 0,
  setIntuitionClnTapsTotal: () => {},
});

export const useStore = () => {
  return useContext(StoreContext);
};

export const IntuitionclneProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [intuitionClnBgMusic, setIntuitionClnBgMusic] = useState(false);

  const [intuitionClnVibration, setIntuitionClnVibration] = useState(false);

  const [intuitionClnSilverBtns, setIntuitionClnSilverBtns] = useState(60);

  const [intuitionClnLevelsWonTotal, setIntuitionClnLevelsWonTotal] =
    useState(0);
  const [intuitionClnFirstLaunchAtMs, setIntuitionClnFirstLaunchAtMs] =
    useState<number | null>(null);
  const [intuitionClnTimeInAppSec, setIntuitionClnTimeInAppSec] = useState(0);
  const [intuitionClnTapsTotal, setIntuitionClnTapsTotal] = useState(0);

  const intuitionClnTickTimer = useRef<ReturnType<typeof setInterval> | null>(
    null,
  );

  useEffect(() => {
    let cancelled = false;

    const boot = async () => {
      try {
        const stored = await AsyncStorage.getItem(
          INTUITIONCLN_FIRST_LAUNCH_KEY,
        );
        if (cancelled) {
          return;
        }
        if (stored) {
          const ms = Number(stored);
          if (!Number.isNaN(ms) && ms > 0) {
            setIntuitionClnFirstLaunchAtMs(ms);
            return;
          }
        }
        const now = Date.now();
        setIntuitionClnFirstLaunchAtMs(now);
        await AsyncStorage.setItem(INTUITIONCLN_FIRST_LAUNCH_KEY, String(now));
      } catch {
        console.log('Error booting');
      }
    };

    boot();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const start = () => {
      if (intuitionClnTickTimer.current) {
        return;
      }
      intuitionClnTickTimer.current = setInterval(() => {
        setIntuitionClnTimeInAppSec(prev => prev + 1);
      }, 1000);
    };

    const stop = () => {
      if (intuitionClnTickTimer.current) {
        clearInterval(intuitionClnTickTimer.current);
        intuitionClnTickTimer.current = null;
      }
    };

    start();
    const sub = AppState.addEventListener('change', state => {
      if (state === 'active') {
        start();
      } else {
        stop();
      }
    });

    return () => {
      stop();
      sub.remove();
    };
  }, []);

  const contextValues = {
    intuitionClnBgMusic,
    setIntuitionClnBgMusic,
    intuitionClnVibration,
    setIntuitionClnVibration,
    intuitionClnSilverBtns,
    setIntuitionClnSilverBtns,
    intuitionClnLevelsWonTotal,
    setIntuitionClnLevelsWonTotal,
    intuitionClnFirstLaunchAtMs,
    intuitionClnTimeInAppSec,
    intuitionClnTapsTotal,
    setIntuitionClnTapsTotal,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};
