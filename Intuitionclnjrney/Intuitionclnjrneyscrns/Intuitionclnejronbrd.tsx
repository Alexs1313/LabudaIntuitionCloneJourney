import LinearGradient from 'react-native-linear-gradient';

import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';

const intuitionClnOnboard = [
  {
    id: 1,
    title: 'Trust your intuition',
    btnLabel: 'Continue',
    description:
      'Several characters will appear in front of you. Only one of them is real. Feel the difference and make the right choice.',
    image: require('../../assets/i/intuitionclwel1.png'),
  },
  {
    id: 2,
    title: 'Clones evolve',
    btnLabel: 'Next',
    description:
      'With each level, the clones become more convincing. Observe carefully and trust your feelings.',
    image: require('../../assets/i/intuitionclwel2.png'),
  },
  {
    id: 3,
    title: 'Collect intuition buttons',
    btnLabel: 'Good',
    description:
      'For correct decisions you get silver buttons. Use them to open intuitive hints.',
    image: require('../../assets/i/intuitionclwel3.png'),
  },
  {
    id: 4,
    title: 'Open new Labuda skins',
    btnLabel: 'Start',
    description:
      'Go through the categories and open new Labuda skins. Each skin is a new stage of your journey.',
    image: require('../../assets/i/intuitionclwel4.png'),
  },
];

const Intuitionclnejronbrd = () => {
  const navigation = useNavigation();
  const [intuitionClnIndex, setIntuitionClnIndex] = useState(0);

  const intuitionClnNext = () => {
    intuitionClnIndex < 3
      ? setIntuitionClnIndex(intuitionClnIndex + 1)
      : navigation.navigate('Intuitionclnejrhome' as never);
  };

  return (
    <Intuitionclnejrlayot>
      <View style={styles.intjorneycontainer}>
        <TouchableOpacity
          style={styles.intjorneyskipbutton}
          activeOpacity={0.7}>
          <Text style={styles.intjorneyskiptext}>SKIP</Text>
        </TouchableOpacity>

        <View>
          <Image
            source={intuitionClnOnboard[intuitionClnIndex].image}
            style={[
              intuitionClnIndex === 3 && {
                top: 120,
                left: -60,
                bottom: 0,
              },
              intuitionClnIndex === 1 && {
                marginTop: 80,
              },
            ]}
          />

          {intuitionClnIndex === 3 && (
            <Image
              source={require('../../assets/i/intuitionclwel5.png')}
              style={{
                position: 'absolute',
                top: 100,
                right: -70,
                bottom: 0,
              }}
            />
          )}
        </View>

        <LinearGradient
          colors={['#FFFFFF', '#082C24']}
          style={styles.intjorneygradient}>
          <LinearGradient
            colors={['#38A580', '#072922']}
            style={styles.intjorneygradientin}>
            <View
              style={{
                padding: 10,
                paddingTop: 50,
                paddingBottom: 80,
                justifyContent: 'space-between',
                flex: 1,
              }}>
              <View>
                <Text style={styles.intjorneytext}>
                  {intuitionClnOnboard[intuitionClnIndex].title}
                </Text>
                <Text style={styles.intjorneytextdesc}>
                  {intuitionClnOnboard[intuitionClnIndex].description}
                </Text>
              </View>

              <TouchableOpacity
                style={styles.intjorneybutton}
                onPress={intuitionClnNext}>
                <Text style={styles.intjorneybuttontext}>
                  {intuitionClnOnboard[intuitionClnIndex].btnLabel}
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </LinearGradient>
      </View>
    </Intuitionclnejrlayot>
  );
};

const styles = StyleSheet.create({
  intjorneycontainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  intjorneygradient: {
    width: '90%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 355,
    marginTop: 50,
  },
  intjorneygradientin: {
    padding: Platform.OS === 'ios' ? 1 : 0,
    margin: Platform.OS === 'ios' ? 0 : 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  intjorneytext: {
    fontSize: 20,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 10,
  },
  intjorneytextdesc: {
    fontSize: 16,
    fontFamily: 'Manrope-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
  intjorneybutton: {
    backgroundColor: '#FFD429',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    width: 200,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  intjorneybuttontext: {
    fontSize: 18,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
    textAlign: 'center',
  },
  intjorneyskipbutton: {
    position: 'absolute',
    top: 50,
    right: 16,
    zIndex: 1,
  },
  intjorneyskiptext: {
    fontSize: 18,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Intuitionclnejronbrd;
