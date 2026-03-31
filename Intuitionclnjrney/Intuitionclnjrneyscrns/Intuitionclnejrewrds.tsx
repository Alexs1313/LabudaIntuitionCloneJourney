import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';

import {useStore} from '../Intuitionclnjrneystorg/intuitionclnjrctxt';

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageSourcePropType,
  Share,
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

const intuitionClnRewardUnlockWins = [1, 5, 12, 25, 50];

const intuitionClnRewardsData = [
  {
    id: 1,
    title: 'First shelter',
    description:
      'You made your first accurate choices and felt the difference between the truth and the copy. Intuition began to form.',
  },
  {
    id: 2,
    title: 'A sharp signal',
    description:
      'Your mind develops to notice unknown differences faster. Decisions come more confidently and accurately.',
  },
  {
    id: 3,
    title: 'Inner balance',
    description:
      'You remain calm even when time is running out and clones remain convincing.',
  },
  {
    id: 4,
    title: 'True Perception',
    description:
      'You try to trust your own intuition without doubt. The true Laby can no longer hide.',
  },
  {
    id: 5,
    title: 'Laby Master',
    description:
      'Your intuition has reached the highest level. You see the truth instantly.',
  },
];

const intuitionClnRewardImages: Record<number, ImageSourcePropType> = {
  // Swap to your 5 reward assets in assets/i/ when ready (e.g. intuitionclhrew1.png …).
  1: require('../../assets/i/intuitionclhfrew1.png'),
  2: require('../../assets/i/intuitionclhfrew2.png'),
  3: require('../../assets/i/intuitionclhfrew3.png'),
  4: require('../../assets/i/intuitionclhfrew4.png'),
  5: require('../../assets/i/intuitionclhfrew5.png'),
};

const Intuitionclnejrewrds = () => {
  const navigation = useNavigation<any>();
  const {intuitionClnLevelsWonTotal} = useStore();

  const intjorneyShareReward = async (
    intjorneytitle: string,
    intjorneydesc: string,
  ) => {
    try {
      await Share.share({
        message: `${intjorneytitle}\n\n${intjorneydesc}`,
      });
    } catch {
      // ignore
    }
  };

  const intjorneyunlockedcount = intuitionClnRewardUnlockWins.filter(
    intjorneythreshold => intuitionClnLevelsWonTotal >= intjorneythreshold,
  ).length;

  const intjorneyshownointro = intjorneyunlockedcount > 0;

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
            <Text style={styles.intjorneytopbartitle}>Rewards</Text>
            <View style={styles.intjorneytopbarspacer} />
          </View>
        </IntjorneyGradientCard>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.intjorneyscrollcontent}>
          {!intjorneyshownointro && (
            <Text style={styles.intjorneyintrotext}>
              Your journey has just begun.{'\n'}
              Complete levels to unlock your first symbol of intuition.
            </Text>
          )}

          {intuitionClnRewardsData.map((intjorneyitem, intjorneyindex) => {
            const intjorneyunlocked =
              intuitionClnLevelsWonTotal >=
              intuitionClnRewardUnlockWins[intjorneyindex];

            return (
              <IntjorneyGradientCard
                key={intjorneyitem.id}
                style={styles.intjorneyrewardcard}>
                <TouchableOpacity
                  activeOpacity={0.85}
                  disabled={!intjorneyunlocked}
                  onPress={() =>
                    intjorneyShareReward(
                      intjorneyitem.title,
                      intjorneyitem.description,
                    )
                  }>
                  <View
                    style={[
                      styles.intjorneyrewardinner,
                      !intjorneyunlocked && styles.intjorneyrewardlocked,
                    ]}>
                    <Image
                      source={intuitionClnRewardImages[intjorneyitem.id]}
                      style={styles.intjorneyrewardimage}
                    />
                    <View style={{width: '65%'}}>
                      <Text style={styles.intjorneyrewardtitle}>
                        {intjorneyitem.title}
                      </Text>
                      <Text style={styles.intjorneyrewarddesc}>
                        {intjorneyitem.description}
                      </Text>
                      {intjorneyunlocked && (
                        <TouchableOpacity
                          activeOpacity={0.85}
                          style={styles.intjorneyrewardsharepill}
                          onPress={() =>
                            intjorneyShareReward(
                              intjorneyitem.title,
                              intjorneyitem.description,
                            )
                          }>
                          <Text style={styles.intjorneyrewardsharepilltext}>
                            SHARE
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </IntjorneyGradientCard>
            );
          })}
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
    paddingBottom: 32,
    gap: 16,
  },
  intjorneyintrotext: {
    fontSize: 16,
    fontFamily: 'Manrope-Medium',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  intjorneyrewardcard: {
    borderRadius: 18,
  },
  intjorneyrewardinner: {
    padding: 18,
    borderRadius: 17,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  intjorneyrewardlocked: {
    opacity: 0.38,
  },
  intjorneyrewardimage: {
    width: 108,
    height: 112,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 12,
  },
  intjorneyrewardtitle: {
    fontSize: 18,
    fontFamily: 'Manrope-ExtraBold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  intjorneyrewardlabel: {
    fontSize: 15,
    fontFamily: 'Manrope-SemiBold',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  intjorneyrewarddesc: {
    fontSize: 12,
    fontFamily: 'Manrope-Regular',
    color: '#FFFFFF',
    marginBottom: 10,
  },

  intjorneyrewardfooterspacer: {
    flex: 1,
  },
  intjorneyrewardsharepill: {
    backgroundColor: '#FFD429',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 47,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneyrewardsharepilltext: {
    fontSize: 14,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
  },
});

export default Intuitionclnejrewrds;
