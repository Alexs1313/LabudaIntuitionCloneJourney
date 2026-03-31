import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';
import {useStore} from '../Intuitionclnjrneystorg/intuitionclnjrctxt';

import React, {useCallback, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Modal,
  Share,
  ImageBackground,
} from 'react-native';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import LinearGradient from 'react-native-linear-gradient';
import Orientation from 'react-native-orientation-locker';

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

const intuitionClnSignals = [
  'Your first feeling is often the most honest one.',
  'If something feels off without reason, there is usually a reason.',
  'The mind notices patterns before you understand them.',
  'Calm decisions are usually the correct ones.',
  'Doubt appears when logic overrides instinct.',
  'Truth often feels simple and clear.',
  'When you hesitate too long, you move away from intuition.',
  'Your attention naturally moves toward what matters.',
  'The right choice rarely creates inner tension.',
  'Intuition speaks quietly. You have to listen.',
  'The body reacts before the mind explains.',
  'Confidence grows each time you trust yourself.',
  'The correct answer often appears instantly.',
  'Overthinking hides what you already know.',
  'Your perception sharpens with every decision.',
  'Silence helps you hear your inner signal.',
  'The more you observe, the more you understand without thinking.',
  'Intuition becomes stronger with practice.',
  'You recognize the truth faster than you realize.',
  'Trust begins when doubt fades.',
];

const INTUITIONCLN_SIGNAL_COST = 10;

const Intuitionclneexchng = () => {
  const navigation = useNavigation<any>();
  const {intuitionClnSilverBtns, setIntuitionClnSilverBtns} = useStore();

  const [intjorneyselectedsignal, setIntjorneyselectedsignal] = useState<
    string | null
  >(null);
  const [intjorneymodalopen, setIntjorneymodalopen] = useState(false);
  const [intjorneyerror, setIntjorneyerror] = useState<string | null>(null);

  const intjorneyrandomsignal = useMemo(() => {
    return intuitionClnSignals[0];
  }, []);

  const intjorneycurrentsignal =
    intjorneyselectedsignal || intjorneyrandomsignal;

  const intjorneyBuySignal = () => {
    setIntjorneyerror(null);
    if (intuitionClnSilverBtns < INTUITIONCLN_SIGNAL_COST) {
      setIntjorneyerror('Not enough buttons');
      setIntjorneymodalopen(true);
      return;
    }

    const intjorneyavailable = intuitionClnSignals.filter(
      intjorneyitem => intjorneyitem !== intjorneycurrentsignal,
    );
    const intjorneynewsignal =
      intjorneyavailable[
        Math.floor(Math.random() * intjorneyavailable.length)
      ] || intjorneycurrentsignal;

    setIntuitionClnSilverBtns(
      intuitionClnSilverBtns - INTUITIONCLN_SIGNAL_COST,
    );
    setIntjorneyselectedsignal(intjorneynewsignal);
    setIntjorneymodalopen(true);
  };

  const intjorneyShareSignal = async () => {
    try {
      await Share.share({
        message: intjorneycurrentsignal,
      });
    } catch {
      console.log('error!');
    }
  };

  useFocusEffect(
    useCallback(() => {
      if (Platform.OS === 'android' && intjorneymodalopen) {
        Orientation.lockToPortrait();
      }

      return () => Orientation.unlockAllOrientations();
    }, [intjorneymodalopen]),
  );

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
            <Text style={styles.intjorneytopbartitle}>Exchanger</Text>
            <View style={styles.intjorneytopbarspacer} />
          </View>
        </IntjorneyGradientCard>

        <IntjorneyGradientCard style={styles.intjorneybalancecard}>
          <View style={styles.intjorneybalanceinner}>
            <Text style={styles.intjorneybalancetext}>
              {intuitionClnSilverBtns}
            </Text>
            <Image source={require('../../assets/i/intuitionclhicnn.png')} />
          </View>
        </IntjorneyGradientCard>

        <View style={styles.intjorneycenterdock}>
          <ImageBackground
            source={require('../../assets/i/intuitionclframe.png')}
            style={styles.intjorneyframe}
            resizeMode="stretch">
            <Text style={styles.intjorneyframetitle}>Silent Signal</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.intjorneycostpill}
              onPress={intjorneyBuySignal}>
              <Image source={require('../../assets/i/intuitionclhicnn.png')} />
              <Text style={styles.intjorneycostpilltext}>
                {INTUITIONCLN_SIGNAL_COST} BUTTONS
              </Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>

        <Modal
          transparent
          statusBarTranslucent={Platform.OS === 'android'}
          visible={intjorneymodalopen}
          animationType="fade"
          onRequestClose={() => setIntjorneymodalopen(false)}>
          <View style={styles.intjorneymodalbg}>
            <IntjorneyGradientCard style={styles.intjorneymodalcard}>
              <View style={styles.intjorneymodalinner}>
                <Text style={styles.intjorneymodaltitle}>Silent Signal</Text>
                <Text style={styles.intjorneymodaltext}>
                  {intjorneyerror || intjorneycurrentsignal}
                </Text>
              </View>
            </IntjorneyGradientCard>

            {!intjorneyerror && (
              <>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.intjorneymodalbutton}
                  onPress={() => {
                    setIntjorneymodalopen(false);
                    intjorneyBuySignal();
                  }}>
                  <Text style={styles.intjorneymodalbuttontext}>
                    NEW SIGNAL
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.intjorneymodalbutton}
                  onPress={intjorneyShareSignal}>
                  <Text style={styles.intjorneymodalbuttontext}>SHARE</Text>
                </TouchableOpacity>
              </>
            )}

            <View
              style={{flex: 1, justifyContent: 'flex-end', paddingBottom: 50}}>
              <TouchableOpacity
                activeOpacity={0.85}
                style={[styles.intjorneymodalhomebutton]}
                onPress={() => {
                  setIntjorneymodalopen(false);
                  navigation.navigate('Intuitionclnejrhome' as never);
                }}>
                <IntjorneyGradientCard
                  style={styles.intjorneymodalhomebutton}
                  innerStyle={styles.intjorneymodalhomebutton}>
                  <Image
                    source={require('../../assets/i/intuitionclhhome.png')}
                  />
                </IntjorneyGradientCard>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  intjorneybalancecard: {
    width: 160,
    height: 74,
    borderRadius: 18,
    alignSelf: 'flex-start',
  },
  intjorneybalanceinner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    height: 74,
  },
  intjorneybalancetext: {
    fontSize: 28,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
  },
  intjorneycenterdock: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 24,
  },
  intjorneyframe: {
    width: 377,
    height: 270,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 6,
    bottom: 60,
    marginTop: 10,
  },
  intjorneyframetitle: {
    fontSize: 24,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 18,
  },
  intjorneycostpill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 75,
    width: 195,
  },
  intjorneycostpilltext: {
    fontSize: 17,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
  },
  intjorneymodalbg: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.59)',
    paddingHorizontal: 18,
    paddingTop: 80,
  },
  intjorneymodalcard: {
    borderRadius: 18,
    marginBottom: 30,
  },
  intjorneymodalinner: {
    padding: 22,
    alignItems: 'center',
    gap: 14,
  },
  intjorneymodaltitle: {
    fontSize: 24,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  intjorneymodaltext: {
    fontSize: 16,
    fontFamily: 'Manrope-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 6,
  },
  intjorneymodalbutton: {
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 68,
    width: 242,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  intjorneymodalbuttontext: {
    fontSize: 18,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
  },
  intjorneymodalhomebutton: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    alignSelf: 'center',
  },
});

export default Intuitionclneexchng;
