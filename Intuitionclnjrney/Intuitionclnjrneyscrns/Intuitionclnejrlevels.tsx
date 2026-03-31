// levels

import LinearGradient from 'react-native-linear-gradient';

import Intuitionclnejrlayot from '../Intuitionclnjrnecpnts/Intuitionclnejrlayot';
import React, {useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ScrollView,
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

const intuitionClnLocations = [1, 2, 3, 4, 5];

const Intuitionclnejrlevels = () => {
  const navigation = useNavigation<any>();
  const [intjorneylocation, setIntjorneylocation] = useState(1);

  const intjorneylevels = useMemo(() => {
    return Array.from({length: 10}, (_, intjorneyindex) => intjorneyindex + 1);
  }, []);

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
            <Text style={styles.intjorneytopbartitle}>Levels</Text>
            <View style={styles.intjorneytopbarspacer} />
          </View>
        </IntjorneyGradientCard>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.intjorneylocationsrow}>
          {intuitionClnLocations.map(intjorneyitem => (
            <TouchableOpacity
              key={intjorneyitem}
              activeOpacity={0.85}
              style={[
                styles.intjorneylocationbutton,
                intjorneylocation === intjorneyitem &&
                  styles.intjorneylocationbuttonactive,
              ]}
              onPress={() => setIntjorneylocation(intjorneyitem)}>
              <Text style={styles.intjorneylocationbuttontext}>
                {intjorneyitem} Location
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.intjorneylevelsgrid}>
          {intjorneylevels.map(intjorneyitem => (
            <TouchableOpacity
              key={`${intjorneylocation}-${intjorneyitem}`}
              activeOpacity={0.85}
              style={styles.intjorneylevelbutton}
              onPress={() =>
                navigation.navigate(
                  'Intuitionclnejrgam' as never,
                  {
                    intuitionClnLocation: intjorneylocation,
                    intuitionClnLevel: intjorneyitem,
                  } as never,
                )
              }>
              <Text style={styles.intjorneylevelbuttontext}>
                {intjorneyitem} LEVEL
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Intuitionclnejrlayot>
  );
};

const styles = StyleSheet.create({
  intjorneycontainer: {
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
    marginBottom: 22,
    width: '94%',
    alignSelf: 'center',
  },
  intjorneytopbarinner: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 20,
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
  intjorneylocationsrow: {
    gap: 16,
    paddingBottom: 20,
    paddingLeft: 16,
  },
  intjorneylocationbutton: {
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 68,
    minWidth: 138,
    paddingHorizontal: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneylocationbuttonactive: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  intjorneylocationbuttontext: {
    fontSize: 16,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
  },
  intjorneylevelsgrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
    columnGap: 12,
    paddingHorizontal: 16,
    marginTop: 40,
  },
  intjorneylevelbutton: {
    width: '47%',
    backgroundColor: '#FFD429',
    borderRadius: 20,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  intjorneylevelbuttontext: {
    fontSize: 18,
    fontFamily: 'Manrope-ExtraBold',
    color: '#000000',
  },
});

export default Intuitionclnejrlevels;
