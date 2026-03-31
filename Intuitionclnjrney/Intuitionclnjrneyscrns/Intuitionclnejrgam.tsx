import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';
import {useStore} from '../Intuitionclnjrneystorg/intuitionclnjrctxt';

import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
  Share,
  ImageBackground,
  Modal,
  useWindowDimensions,
  Vibration,
} from 'react-native';
import {
  useFocusEffect,
  useIsFocused,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
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

const Intuitionclnejrgam = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const intjorneyisfocused = useIsFocused();
  const {
    intuitionClnSilverBtns,
    setIntuitionClnSilverBtns,
    intuitionClnLevelsWonTotal,
    setIntuitionClnLevelsWonTotal,
    intuitionClnVibration,
  } = useStore();
  const {width: intjorneyScreenWidth} = useWindowDimensions();

  const intuitionClnInitialLocation =
    (route.params as {intuitionClnLocation?: number})?.intuitionClnLocation ||
    1;
  const intuitionClnInitialLevel =
    (route.params as {intuitionClnLevel?: number})?.intuitionClnLevel || 1;

  const [intjorneylocation] = useState(intuitionClnInitialLocation);
  const [intjorneylevel, setIntjorneylevel] = useState(
    intuitionClnInitialLevel,
  );
  const [intjorneyroundseed, setIntjorneyroundseed] = useState(1);
  const [intjorneytimeleft, setIntjorneytimeleft] = useState(() =>
    Math.max(10, 55 - intuitionClnInitialLevel * 5),
  );
  const [intjorneystatus, setIntjorneystatus] = useState<
    'play' | 'win' | 'lose' | 'timeout'
  >('play');
  const [intjorneyrewarded, setIntjorneyrewarded] = useState(false);

  const intjorneycardscount = Math.max(2, intjorneylevel + 1);
  const intjorneyinitialtime = Math.max(10, 55 - intjorneylevel * 5);

  useFocusEffect(
    useCallback(() => {
      if (
        Platform.OS === 'android' &&
        (intjorneyisfail || intjorneyresultopen)
      ) {
        Orientation.lockToPortrait();
      }

      return () => Orientation.unlockAllOrientations();
    }, [intjorneyisfail, intjorneyresultopen]),
  );

  useEffect(() => {
    setIntjorneytimeleft(intjorneyinitialtime);
    setIntjorneystatus('play');
    setIntjorneyrewarded(false);
  }, [intjorneyinitialtime, intjorneyroundseed]);

  const intjorneycards = useMemo(() => {
    const intjorneyrealindex =
      (Math.floor(Math.random() * intjorneycardscount) + intjorneyroundseed) %
      intjorneycardscount;
    return Array.from({length: intjorneycardscount}, (_, intjorneyindex) => ({
      intjorneyid: intjorneyindex + 1,
      intjorneyisreal: intjorneyindex === intjorneyrealindex,
    }));
  }, [intjorneycardscount, intjorneyroundseed]);

  useEffect(() => {
    if (!intjorneyisfocused || intjorneystatus !== 'play') {
      return;
    }
    if (intjorneytimeleft <= 0) {
      setIntjorneystatus('timeout');
      return;
    }

    const intjorneytimer = setTimeout(() => {
      setIntjorneytimeleft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(intjorneytimer);
  }, [intjorneytimeleft, intjorneystatus, intjorneyisfocused]);

  useEffect(() => {
    if (intjorneystatus === 'win' && !intjorneyrewarded) {
      setIntuitionClnSilverBtns(intuitionClnSilverBtns + 10);
      setIntuitionClnLevelsWonTotal(intuitionClnLevelsWonTotal + 1);
      setIntjorneyrewarded(true);
    }
  }, [
    intjorneystatus,
    intjorneyrewarded,
    intuitionClnSilverBtns,
    setIntuitionClnSilverBtns,
    intuitionClnLevelsWonTotal,
    setIntuitionClnLevelsWonTotal,
  ]);

  const intjorneySkinByLocation = {
    1: require('../../assets/i/intuitionclhlab1.png'),
    2: require('../../assets/i/intuitionclhlab2.png'),
    3: require('../../assets/i/intuitionclhlab3.png'),
    4: require('../../assets/i/intuitionclhlab4.png'),
    5: require('../../assets/i/intuitionclhlab5.png'),
  } as Record<number, number>;

  const intjorneySelectedSkin =
    intjorneySkinByLocation[intjorneylocation] ||
    require('../../assets/i/intuitionclhomlog.png');

  const intjorneyoncardpress = (intjorneyisreal: boolean) => {
    if (intjorneystatus !== 'play') {
      return;
    }
    if (intjorneyisreal) {
      setTimeout(() => {
        setIntjorneystatus('win');
      }, 220);
      return;
    }
    if (intuitionClnVibration) {
      Vibration.vibrate(150);
    }
    setIntjorneystatus('lose');
  };

  const intjorneyretry = () => {
    setIntjorneystatus('play');
    setIntjorneyroundseed(prev => prev + 1);
  };

  const intjorneynextlevel = () => {
    setIntjorneystatus('play');
    if (intjorneylevel >= 10) {
      navigation.navigate('Intuitionclnejrlevels' as never);
      return;
    }
    setIntjorneylevel(prev => prev + 1);
    setIntjorneyroundseed(prev => prev + 1);
  };

  const intjorneyshare = async () => {
    setIntjorneystatus('play');
    try {
      await Share.share({
        message: `I passed level ${intjorneylevel} in location ${intjorneylocation}!`,
      });
    } catch {
      console.log('Error sharing');
    }
  };

  const intjorneyresultopen = intjorneyisfocused && intjorneystatus !== 'play';
  const intjorneyisfail =
    intjorneystatus === 'lose' || intjorneystatus === 'timeout';
  const intjorneycolumns =
    intjorneycardscount <= 4 ? 2 : intjorneycardscount <= 9 ? 3 : 4;
  const intjorneygridhorizontalpadding = 4;
  const intjorneygridgap = 10;
  const intjorneycardwidth =
    (intjorneyScreenWidth -
      32 -
      intjorneygridhorizontalpadding * 2 -
      intjorneygridgap * (intjorneycolumns - 1)) /
    intjorneycolumns;
  const intjorneycardheight = intjorneycardwidth * 1.34;
  const intjorneyskinsize = intjorneycardwidth * 0.8;

  const intjorneyplaybody = (
    <View style={styles.intjorneycontainer}>
      <View style={styles.intjorneytoprow}>
        <TouchableOpacity
          style={styles.intjorneyhomebutton}
          activeOpacity={0.85}
          onPress={() => navigation.replace('Intuitionclnejrhome' as never)}>
          <IntjorneyGradientCard
            style={styles.intjorneyhomebutton}
            innerStyle={styles.intjorneyhomebutton}>
            <Image source={require('../../assets/i/intuitionclhhome.png')} />
          </IntjorneyGradientCard>
        </TouchableOpacity>

        <View style={styles.intjorneyyellowcard}>
          <Text style={styles.intjorneyyellowcardtext}>
            {intjorneylevel} LEVEL
          </Text>
        </View>
        <View style={styles.intjorneyyellowcard}>
          <Text style={styles.intjorneyyellowcardtext}>
            0:{String(intjorneytimeleft).padStart(2, '0')}
          </Text>
        </View>
      </View>

      <View style={styles.intjorneycardswrap}>
        {intjorneycards.map(intjorneyitem => (
          <TouchableOpacity
            key={intjorneyitem.intjorneyid}
            activeOpacity={0.9}
            style={[
              styles.intjorneycard,
              {width: intjorneycardwidth, height: intjorneycardheight},
            ]}
            onPress={() => intjorneyoncardpress(intjorneyitem.intjorneyisreal)}>
            <ImageBackground
              source={require('../../assets/i/intuitionclhfram.png')}
              style={[
                styles.intjorneycard,
                {width: intjorneycardwidth, height: intjorneycardheight},
              ]}
              resizeMode="stretch">
              <Image
                source={intjorneySelectedSkin}
                style={[
                  styles.intjorneycardskin,
                  {width: intjorneyskinsize, height: intjorneyskinsize},
                ]}
              />
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  const intjorneyresultbody = (
    <View style={styles.intjorneyresultcontainer}>
      <Text style={styles.intjorneyresulttitle}>
        {intjorneystatus === 'timeout'
          ? 'Time is over!'
          : intjorneystatus === 'win'
          ? 'You found the real Labuda'
          : 'Not right!'}
      </Text>

      <Text style={styles.intjorneyresulttext}>
        {intjorneystatus === 'timeout'
          ? 'The real Labuda was hiding among the clones. Trust your intuition and try again.'
          : intjorneystatus === 'win'
          ? 'Your intuition guided you to the truth. The path continues.'
          : "Unfortunately, your intuition didn't help this time, try again!"}
      </Text>

      <View style={styles.intjorneyresultmiddle}>
        {intjorneystatus === 'win' ? (
          <ImageBackground
            source={require('../../assets/i/intuitionclhfram.png')}
            style={{width: 160, height: 220, justifyContent: 'center'}}
            resizeMode="stretch">
            <Image
              source={intjorneySelectedSkin}
              style={[
                styles.intjorneyresultskin,
                {width: 146, height: 140, top: 10},
              ]}
            />
          </ImageBackground>
        ) : (
          <Image
            source={intjorneySelectedSkin}
            style={styles.intjorneyresultskin}
          />
        )}
        {intjorneystatus === 'win' && (
          <IntjorneyGradientCard
            style={styles.intjorneyrewardcard}
            innerStyle={styles.intjorneyrewardcard}>
            <View style={styles.intjorneyrewardrow}>
              <Image source={require('../../assets/i/intuitionclhicnn.png')} />
              <Text style={styles.intjorneyrewardtext}>+10</Text>
            </View>
          </IntjorneyGradientCard>
        )}
      </View>

      {intjorneystatus === 'win' ? (
        <>
          <TouchableOpacity
            style={styles.intjorneyactionbutton}
            activeOpacity={0.85}
            onPress={intjorneynextlevel}>
            <Text style={styles.intjorneyactionbuttontext}>NEXT LEVEL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.intjorneyactionbutton}
            activeOpacity={0.85}
            onPress={intjorneyshare}>
            <Text style={styles.intjorneyactionbuttontext}>SHARE</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={styles.intjorneyactionbutton}
          activeOpacity={0.85}
          onPress={intjorneyretry}>
          <Text style={styles.intjorneyactionbuttontext}>RETRY</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={styles.intjorneyresulthomebutton}
        activeOpacity={0.85}
        onPress={() => {
          setIntjorneystatus('play');
          navigation.replace('Intuitionclnejrhome' as never);
        }}>
        <IntjorneyGradientCard
          style={styles.intjorneyresulthomebutton}
          innerStyle={styles.intjorneyresulthomebutton}>
          <Image source={require('../../assets/i/intuitionclhhome.png')} />
        </IntjorneyGradientCard>
      </TouchableOpacity>
    </View>
  );

  return (
    <Intuitionclnejrlayot>
      {intjorneyplaybody}
      <Modal
        statusBarTranslucent={Platform.OS === 'android'}
        transparent
        animationType="fade"
        visible={intjorneyresultopen}
        onRequestClose={intjorneyretry}>
        {intjorneyisfail ? (
          <View
            style={[styles.intjorneymodalbg, {backgroundColor: '#840002CC'}]}>
            {intjorneyresultbody}
          </View>
        ) : (
          <View
            style={[styles.intjorneymodalbg, {backgroundColor: '#004D2FCC'}]}>
            {intjorneyresultbody}
          </View>
        )}
      </Modal>
    </Intuitionclnejrlayot>
  );
};

const styles = StyleSheet.create({
  intjorneycontainer: {
    flex: 1,
    paddingTop: 75,
    paddingHorizontal: 16,
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
  intjorneyhomebutton: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneyyellowcard: {
    width: '31.5%',
    height: 68,
    backgroundColor: '#FFD429',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneyyellowcardtext: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Manrope-ExtraBold',
  },
  intjorneycardswrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    columnGap: 10,
    rowGap: 10,
    marginTop: 34,
    paddingHorizontal: 4,
  },
  intjorneycard: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneycardskin: {
    width: 112,
    height: 112,
    resizeMode: 'contain',
  },
  intjorneyredscreen: {
    flex: 1,
    justifyContent: 'center',
  },
  intjorneyresultcontainer: {
    flex: 1,
    paddingHorizontal: 26,
    paddingTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
  intjorneyresulttitle: {
    fontSize: 32,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 14,
  },
  intjorneyresulttext: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'Manrope-SemiBold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 5,
    maxWidth: 340,
  },
  intjorneyresultmiddle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
    gap: 16,
    marginTop: 12,
  },
  intjorneyresultskin: {
    width: 180,
    height: 220,
    resizeMode: 'contain',
    marginBottom: 20,
    alignSelf: 'center',
  },
  intjorneyrewardcard: {
    width: 150,
    height: 80,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneyrewardrow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  intjorneyrewardtext: {
    fontSize: 36,
    color: '#FFF',
    fontFamily: 'Manrope-ExtraBold',
  },
  intjorneyactionbutton: {
    width: '75%',
    height: 68,
    borderRadius: 20,
    backgroundColor: '#FFD429',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  intjorneyactionbuttontext: {
    fontSize: 18,
    color: '#000000',
    fontFamily: 'Manrope-ExtraBold',
  },
  intjorneyresulthomebutton: {
    width: 80,
    height: 80,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneymodalbg: {
    flex: 1,
  },
});

export default Intuitionclnejrgam;
