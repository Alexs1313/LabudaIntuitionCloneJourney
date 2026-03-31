import {useStore} from '../Intuitionclnjrneystorg/intuitionclnjrctxt';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Intuitionclnswtch from '../Intuitionclnjrnecpnts/Intuitionclnswtch';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';

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

const Intuitionclnsettngs = () => {
  const navigation = useNavigation<any>();
  const {
    intuitionClnBgMusic,
    setIntuitionClnBgMusic,
    intuitionClnVibration,
    setIntuitionClnVibration,
  } = useStore();

  const toggleBackgroundMusic = async (selectedValue: boolean) => {
    try {
      await AsyncStorage.setItem(
        'intuitionClnBgMusic',
        JSON.stringify(selectedValue),
      );
      setIntuitionClnBgMusic(selectedValue);
    } catch (error) {
      console.log('Error background music', error);
    }
  };

  const toggleVibration = async (selectedValue: boolean) => {
    try {
      await AsyncStorage.setItem(
        'intuitionClnVibration',
        JSON.stringify(selectedValue),
      );
      setIntuitionClnVibration(selectedValue);
    } catch (error) {
      console.log('Error vibration', error);
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
            <Text style={styles.intjorneytopbartitle}>Settings</Text>
            <View style={styles.intjorneytopbarspacer} />
          </View>
        </IntjorneyGradientCard>

        {Platform.OS === 'ios' && (
          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => toggleBackgroundMusic(!intuitionClnBgMusic)}>
            <IntjorneyGradientCard style={styles.intjorneyitemcard}>
              <View style={styles.intjorneyiteminner}>
                <Text style={styles.intjorneyitemtext}>Music</Text>
                <Intuitionclnswtch
                  value={intuitionClnBgMusic}
                  onChange={toggleBackgroundMusic}
                />
              </View>
            </IntjorneyGradientCard>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => toggleVibration(!intuitionClnVibration)}>
          <IntjorneyGradientCard style={styles.intjorneyitemcard}>
            <View style={styles.intjorneyiteminner}>
              <Text style={styles.intjorneyitemtext}>Vibration</Text>
              <Intuitionclnswtch
                value={intuitionClnVibration}
                onChange={toggleVibration}
              />
            </View>
          </IntjorneyGradientCard>
        </TouchableOpacity>
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
    gap: 14,
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
  intjorneyitemcard: {
    borderRadius: 18,
  },
  intjorneyiteminner: {
    paddingHorizontal: 18,
    height: 74,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  intjorneyitemtext: {
    fontSize: 22,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
  },
  intjorneystatlinkcard: {
    borderRadius: 18,
  },
  intjorneystatlinktext: {
    fontSize: 24,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
  },
});

export default Intuitionclnsettngs;
