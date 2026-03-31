import LinearGradient from 'react-native-linear-gradient';
import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  Share,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

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

const Intuitionclnejrabout = () => {
  const navigation = useNavigation();

  const intjorneyShareApp = async () => {
    try {
      await Share.share({
        message: 'Labuda Intuition Clone Journey',
      });
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
            <Text style={styles.intjorneytopbartitle}>About the app</Text>
            <View style={styles.intjorneytopbarspacer} />
          </View>
        </IntjorneyGradientCard>

        <IntjorneyGradientCard style={styles.intjorneycontentcard}>
          <View style={styles.intjorneycontentinner}>
            <View style={styles.intjorneycontentheader}>
              <Image source={require('../../assets/i/intuitionclhic.png')} />

              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.intjorneysharebutton}
                onPress={intjorneyShareApp}>
                <Text style={styles.intjorneysharebuttontext}>SHARE APP</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.intjorneycontenttext}>
              Labuda Intuition Clone Journey is an interactive experience
              designed to develop attention, perception, and intuitive thinking.
            </Text>
            <Text style={styles.intjorneycontenttext}>
              Each level challenges your ability to recognize subtle differences
              and trust your inner sense. With each correct choice, your focus
              becomes sharper and your reactions more confident.
            </Text>
            <Text style={styles.intjorneycontenttext}>
              The app helps improve observation skills, concentration, and
              decision-making speed in a calm and engaging environment.
            </Text>
            <Text style={styles.intjorneycontenttext}>
              All progress is stored locally on your device. No personal data is
              collected or shared.
            </Text>
            <Text style={styles.intjorneycontenttextlast}>
              Trust your intuition. Improve your perception. Continue forward.
            </Text>
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
    paddingTop: 75,
    paddingBottom: 24,
    gap: 16,
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
  intjorneycontentcard: {
    borderRadius: 18,
  },
  intjorneycontentinner: {
    padding: 18,
    paddingTop: 20,
    gap: 14,
  },
  intjorneycontentheader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
    marginBottom: 4,
  },
  intjorneyappiconwrap: {
    width: 92,
    height: 92,
    borderRadius: 18,
    backgroundColor: '#0F6B52',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 16,
    shadowOffset: {width: 0, height: 10},
    elevation: 6,
  },
  intjorneyappicon: {
    width: 78,
    height: 78,
    resizeMode: 'contain',
  },
  intjorneysharebutton: {
    flex: 1,
    maxWidth: 180,
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneysharebuttontext: {
    fontSize: 16,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
    textAlign: 'center',
  },
  intjorneycontenttext: {
    fontSize: 16,
    fontFamily: 'Manrope-Regular',
    color: '#FFFFFF',
    lineHeight: 22,
  },
  intjorneycontenttextlast: {
    fontSize: 15,
    fontFamily: 'Manrope-Medium',
    color: '#FFFFFF',
    lineHeight: 22,
    marginTop: 6,
  },
});

export default Intuitionclnejrabout;
