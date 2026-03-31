import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';
import LinearGradient from 'react-native-linear-gradient';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useStore} from '../Intuitionclnjrneystorg/intuitionclnjrctxt';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Sound from 'react-native-sound';

type GreenCardProps = {
  children: React.ReactNode;
  style?: object;
  innerStyle?: object;
};

const IntjorneyGradientCard = ({
  children,
  style,
  innerStyle,
}: GreenCardProps) => {
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

const Intuitionclnejrhome = () => {
  const navigation = useNavigation();
  const {intuitionClnSilverBtns} = useStore();
  const [intuitionClnBgMusicIdx, setIntuitionClnBgMusicIdx] = useState(0);

  const [sound, setSound] = useState<Sound | null>(null);
  const intuitionClnBgMusicTracksCycle = [
    'aliciaramos-atmospheric-serenity-293366.mp3',
    'aliciaramos-atmospheric-serenity-293366.mp3',
  ];
  const {
    intuitionClnBgMusic,
    setIntuitionClnBgMusic,
    intuitionClnVibration,
    setIntuitionClnVibration,
  } = useStore();

  useFocusEffect(
    useCallback(() => {
      loadIntuitionClnBgMusic();
      loadIntuitionClnVibration();
    }, []),
  );

  useEffect(() => {
    playIntuitionClnBgMusic(intuitionClnBgMusicIdx);

    return () => {
      if (sound) {
        sound.stop(() => {
          sound.release();
        });
      }
    };
  }, [intuitionClnBgMusicIdx]);

  const playIntuitionClnBgMusic = index => {
    if (sound) {
      sound.stop(() => {
        sound.release();
      });
    }

    const intuitionClnBgMusicTrackPath = intuitionClnBgMusicTracksCycle[index];

    const newIntuitionClnBgMusicSound = new Sound(
      intuitionClnBgMusicTrackPath,

      Sound.MAIN_BUNDLE,

      error => {
        if (error) {
          console.log('Error =>', error);
          return;
        }

        newIntuitionClnBgMusicSound.play(success => {
          if (success) {
            setIntuitionClnBgMusicIdx(
              prevIndex =>
                (prevIndex + 1) % intuitionClnBgMusicTracksCycle.length,
            );
          } else {
            console.log('Error =>');
          }
        });
        setSound(newIntuitionClnBgMusicSound);
      },
    );
  };

  useEffect(() => {
    const setVolumeIntuitionClnBgMusic = async () => {
      try {
        const intuitionClnBgMusicValue = await AsyncStorage.getItem(
          'intuitionClnBgMusic',
        );

        const isIntuitionClnBgMusicOn = intuitionClnBgMusicValue
          ? JSON.parse(intuitionClnBgMusicValue)
          : false;
        setIntuitionClnBgMusic(isIntuitionClnBgMusicOn);
        if (sound) {
          sound.setVolume(isIntuitionClnBgMusicOn ? 1 : 0);
        }
      } catch (error) {
        console.error('Error =>', error);
      }
    };

    setVolumeIntuitionClnBgMusic();
  }, [sound]);

  useEffect(() => {
    if (sound) {
      sound.setVolume(intuitionClnBgMusic ? 1 : 0);
    }
  }, [intuitionClnBgMusic]);

  const loadIntuitionClnVibration = async () => {
    try {
      const intuitionClnVibrationValue = await AsyncStorage.getItem(
        'intuitionClnVibration',
      );
      if (intuitionClnVibrationValue !== null) {
        const isIntuitionClnVibrationOn = JSON.parse(
          intuitionClnVibrationValue,
        );
        setIntuitionClnVibration(isIntuitionClnVibrationOn);
      }
    } catch (error) {
      console.error('Error!', error);
    }
  };

  const loadIntuitionClnBgMusic = async () => {
    try {
      const intuitionClnBgMusicValue = await AsyncStorage.getItem(
        'intuitionClnBgMusic',
      );
      if (intuitionClnBgMusicValue !== null) {
        const isIntuitionClnBgMusicOn = intuitionClnBgMusicValue
          ? JSON.parse(intuitionClnBgMusicValue)
          : false;
        setIntuitionClnBgMusic(isIntuitionClnBgMusicOn);
      }
    } catch (error) {
      console.error('Error loading settings =>', error);
    }
  };

  return (
    <Intuitionclnejrlayot>
      <View style={styles.intjorneycontainer}>
        <View style={styles.intjorneytoprow}>
          <Image source={require('../../assets/i/intuitionclhic.png')} />

          <IntjorneyGradientCard
            style={styles.intjorneytopcountercard}
            innerStyle={styles.intjorneytopcountercard}>
            <View style={styles.intjorneycounterrow}>
              <Image source={require('../../assets/i/intuitionclhicnn.png')} />
              <Text style={styles.intjorneycountertext}>
                {intuitionClnSilverBtns}
              </Text>
            </View>
          </IntjorneyGradientCard>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Intuitionclnsettngs' as never)}>
            <IntjorneyGradientCard
              style={styles.intjorneytopiconcard}
              innerStyle={styles.intjorneytopiconcard}>
              <Image source={require('../../assets/i/intuitionclhsett.png')} />
            </IntjorneyGradientCard>
          </TouchableOpacity>
        </View>

        <View style={styles.intjorneytoprightstack}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Intuitionclneestts' as never)}>
            <IntjorneyGradientCard
              style={styles.intjorneytopiconcard}
              innerStyle={styles.intjorneytopiconcard}>
              <Image source={require('../../assets/i/intuitionclhsetp.png')} />
            </IntjorneyGradientCard>
          </TouchableOpacity>
        </View>

        <View style={styles.intjorneycharacterdock}>
          <Image
            source={require('../../assets/i/intuitionclhomlog.png')}
            style={styles.intjorneycharacterimage}
          />
        </View>

        <IntjorneyGradientCard
          style={styles.intjorneymenucard}
          innerStyle={styles.intjorneymenucard}>
          <View style={styles.intjorneymenuinner}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.intjorneymenubutton}
              onPress={() =>
                navigation.navigate('Intuitionclnejrlevels' as never)
              }>
              <Text style={styles.intjorneymenubuttontext}>START</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.intjorneymenubutton}
              onPress={() =>
                navigation.navigate('Intuitionclnejrewrds' as never)
              }>
              <Text style={styles.intjorneymenubuttontext}>REWARDS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.intjorneymenubutton}
              onPress={() =>
                navigation.navigate('Intuitionclneexchng' as never)
              }>
              <Text style={styles.intjorneymenubuttontext}>EXCHANGER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.intjorneymenubutton}
              onPress={() =>
                navigation.navigate('Intuitionclnejrabout' as never)
              }>
              <Text style={styles.intjorneymenubuttontext}>ABOUT THE APP</Text>
            </TouchableOpacity>
          </View>
        </IntjorneyGradientCard>
      </View>
    </Intuitionclnejrlayot>
  );
};

const styles = StyleSheet.create({
  intjorneycontainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 60,
    justifyContent: 'flex-end',
  },
  intjorneygradient: {
    borderRadius: 18,
  },
  intjorneygradientin: {
    padding: Platform.OS === 'ios' ? 1 : 0,
    margin: Platform.OS === 'ios' ? 0 : 1,
    borderRadius: 18,
  },
  intjorneytoprow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  intjorneytoprightstack: {
    position: 'absolute',
    top: 176,
    right: 16,
  },
  intjorneytopiconcard: {
    width: 80,
    height: 80,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneytopicontext: {
    fontSize: 22,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFD429',
    textAlign: 'center',
  },
  intjorneytopcountercard: {
    height: 80,
    minWidth: 120,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneycounterrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  intjorneycounterdot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D0D7D9',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  intjorneycountertext: {
    fontSize: 22,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
  },
  intjorneycharacterdock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 10,
  },
  intjorneycharacterimage: {
    top: 50,
    zIndex: 10,
  },
  intjorneymenucard: {
    borderRadius: 22,
    minHeight: 440,
  },
  intjorneymenuinner: {
    padding: 18,
    paddingTop: 46,
    gap: 16,
  },
  intjorneymenubutton: {
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 68,
    width: '65%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  intjorneymenubuttontext: {
    fontSize: 17,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
    textAlign: 'center',
  },
});

export default Intuitionclnejrhome;
