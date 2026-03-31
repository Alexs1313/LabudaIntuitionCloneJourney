import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';
import {useStore} from '../Intuitionclnjrneystorg/intuitionclnjrctxt';

import React, {useMemo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Share,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type IntjorneyGradientCardProps = {
  children: React.ReactNode;
  style?: object;
  innerStyle?: object;
};

const IntjorneyGradientCard = ({
  children,
  style,
  innerStyle,
}: IntjorneyGradientCardProps) => {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#082C24']}
      style={[styles.intjorneygradient, style]}>
      <LinearGradient
        colors={['#38A580', '#072922']}
        style={[styles.intjorneygradientin, innerStyle]}>
        {children}
      </LinearGradient>
    </LinearGradient>
  );
};

const Intuitionclneestts = () => {
  const navigation = useNavigation<any>();
  const {
    intuitionClnLevelsWonTotal,
    intuitionClnSilverBtns,
    intuitionClnFirstLaunchAtMs,
    intuitionClnTimeInAppSec,
    intuitionClnTapsTotal,
  } = useStore();

  const intjorneyhasstats =
    intuitionClnLevelsWonTotal > 0 || intuitionClnSilverBtns !== 60;

  const intjorneydemo = useMemo(() => {
    return {
      intjorneyfirstlaunch: '12.03.2025',
      intjorneytimeinapp: '43 s',
      intjorneytaps: '44',
      intjorneylevels: '0/50',
      intjorneycorrect: '0',
    };
  }, []);

  const intjorneyfirstlaunchtext = useMemo(() => {
    if (!intuitionClnFirstLaunchAtMs) {
      return intjorneydemo.intjorneyfirstlaunch;
    }
    const d = new Date(intuitionClnFirstLaunchAtMs);
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = String(d.getFullYear());
    return `${dd}.${mm}.${yyyy}`;
  }, [intuitionClnFirstLaunchAtMs, intjorneydemo.intjorneyfirstlaunch]);

  const intjorneytimeinapptext = useMemo(() => {
    if (!intjorneyhasstats && intuitionClnTimeInAppSec === 0) {
      return intjorneydemo.intjorneytimeinapp;
    }
    const total = intuitionClnTimeInAppSec;
    if (total < 60) {
      return `${total} s`;
    }
    if (total < 3600) {
      const m = Math.floor(total / 60);
      const s = total % 60;
      return `${m} m ${s} s`;
    }
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const s = total % 60;
    return `${h} h ${m} m ${s} s`;
  }, [
    intjorneyhasstats,
    intuitionClnTimeInAppSec,
    intjorneydemo.intjorneytimeinapp,
  ]);

  const intjorneystats = useMemo(() => {
    if (!intjorneyhasstats) {
      return {
        ...intjorneydemo,
        intjorneyfirstlaunch: intjorneyfirstlaunchtext,
        intjorneytimeinapp: intjorneytimeinapptext,
      };
    }
    return {
      intjorneyfirstlaunch: intjorneyfirstlaunchtext,
      intjorneytimeinapp: intjorneytimeinapptext,
      intjorneytaps: `${intuitionClnTapsTotal}`,
      intjorneylevels: `${Math.min(intuitionClnLevelsWonTotal, 50)}/50`,
      intjorneycorrect: `${intuitionClnLevelsWonTotal}`,
    };
  }, [
    intjorneyhasstats,
    intjorneydemo,
    intuitionClnLevelsWonTotal,
    intjorneyfirstlaunchtext,
    intjorneytimeinapptext,
    intuitionClnTapsTotal,
  ]);

  const intjorneyShareStats = async () => {
    const intjorneymessage =
      'Statistics\n\n' +
      `First launch app: ${intjorneystats.intjorneyfirstlaunch}\n` +
      `Time in the application: ${intjorneystats.intjorneytimeinapp}\n` +
      `Number of taps: ${intjorneystats.intjorneytaps}\n` +
      `Correct choices: ${intjorneystats.intjorneycorrect}\n` +
      `Levels completed: ${intjorneystats.intjorneylevels}\n` +
      '';
    try {
      await Share.share({message: intjorneymessage});
    } catch {
      // ignore
    }
  };

  return (
    <Intuitionclnejrlayot>
      <View style={styles.intjorneycontainer}>
        <IntjorneyGradientCard style={styles.intjorneytopbar}>
          <View style={styles.intjorneytopbarinner}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.intjorneybackbutton}
              onPress={() => navigation.goBack()}>
              <Image source={require('../../assets/i/intuitionclhbac.png')} />
            </TouchableOpacity>
            <Text style={styles.intjorneytopbartitle}>Statistics</Text>
            <View style={styles.intjorneytopbarspacer} />
          </View>
        </IntjorneyGradientCard>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.intjorneyscrollcontent}>
          <IntjorneyGradientCard style={styles.intjorneystatcard}>
            <View style={styles.intjorneystatinner}>
              <Text style={styles.intjorneystatlabel}>First launch app</Text>
              <Text style={styles.intjorneystatvalue}>
                {intjorneystats.intjorneyfirstlaunch}
              </Text>
            </View>
          </IntjorneyGradientCard>

          <IntjorneyGradientCard style={styles.intjorneystatcard}>
            <View style={styles.intjorneystatinner}>
              <Text style={styles.intjorneystatlabel}>
                Time in the application:
              </Text>
              <Text style={styles.intjorneystatvalue}>
                {intjorneystats.intjorneytimeinapp}
              </Text>
            </View>
          </IntjorneyGradientCard>

          <IntjorneyGradientCard style={styles.intjorneystatcard}>
            <View style={styles.intjorneystatinner}>
              <Text style={styles.intjorneystatlabel}>Correct choices</Text>
              <Text style={styles.intjorneystatvalue}>
                {intjorneystats.intjorneycorrect}
              </Text>
            </View>
          </IntjorneyGradientCard>

          <IntjorneyGradientCard style={styles.intjorneystatcard}>
            <View style={styles.intjorneystatinner}>
              <Text style={styles.intjorneystatlabel}>Levels completed</Text>
              <Text style={styles.intjorneystatvalue}>
                {intjorneystats.intjorneylevels}
              </Text>
            </View>
          </IntjorneyGradientCard>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.intjorneysharebutton}
            onPress={intjorneyShareStats}>
            <Text style={styles.intjorneysharebuttontext}>SHARE</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Intuitionclnejrlayot>
  );
};

const styles = StyleSheet.create({
  intjorneycontainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 75,
    paddingBottom: 24,
  },
  intjorneygradient: {
    borderRadius: 18,
  },
  intjorneygradientin: {
    padding: Platform.OS === 'ios' ? 1 : 0,
    margin: Platform.OS === 'ios' ? 0 : 1,
    borderRadius: 18,
  },
  intjorneytopbar: {
    borderRadius: 18,
    marginBottom: 16,
  },
  intjorneytopbarinner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 16,
    justifyContent: 'space-between',
  },
  intjorneybackbutton: {
    width: 38,
    height: 38,
    borderRadius: 5,
    backgroundColor: '#FFD429',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneytopbartitle: {
    fontSize: 20,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  intjorneytopbarspacer: {
    width: 44,
    height: 44,
  },
  intjorneyscrollcontent: {
    paddingBottom: 26,
    gap: 18,
  },
  intjorneystatcard: {
    borderRadius: 18,
  },
  intjorneystatinner: {
    padding: 18,
    gap: 10,
  },
  intjorneystatlabel: {
    fontSize: 22,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
  },
  intjorneystatvalue: {
    fontSize: 32,
    fontFamily: 'Manrope-Medium',
    color: '#FFFFFF',
  },
  intjorneysharebutton: {
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 68,
    width: '72%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
  },
  intjorneysharebuttontext: {
    fontSize: 18,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
  },
});

export default Intuitionclneestts;
