import React, {useEffect, useMemo, useRef} from 'react';
import {Animated, Easing, Pressable, StyleSheet, View} from 'react-native';

type IntuitionclnSwitchProps = {
  value: boolean;
  onChange: (next: boolean) => void;
  disabled?: boolean;
};

const Intuitionclnswtch = ({
  value,
  onChange,
  disabled,
}: IntuitionclnSwitchProps) => {
  const intjorneyanim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(intjorneyanim, {
      toValue: value ? 1 : 0,
      duration: 500,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();
  }, [value, intjorneyanim]);

  const intjorneybg = intjorneyanim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#c22', '#2c2'],
  });

  const intjorneyknobShadow = useMemo(() => {
    return value ? styles.intjorneyknobshadowoff : styles.intjorneyknobshadowon;
  }, [value]);

  const intjorneytranslatex = intjorneyanim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 28],
  });

  return (
    <Pressable
      disabled={disabled}
      onPress={() => onChange(!value)}
      style={({pressed}) => [
        styles.intjorneypressable,
        disabled && styles.intjorneydisabled,
        pressed && !disabled && styles.intjorneypressed,
      ]}>
      <Animated.View
        style={[styles.intjorneyswitch, {backgroundColor: intjorneybg}]}>
        <View style={styles.intjorneyinsetshadow} />
        <Animated.View
          style={[
            styles.intjorneyknob,
            intjorneyknobShadow,
            {transform: [{translateX: intjorneytranslatex}]},
          ]}
        />
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  intjorneypressable: {
    borderRadius: 50,
  },
  intjorneypressed: {
    opacity: 0.92,
  },
  intjorneydisabled: {
    opacity: 0.5,
  },
  intjorneyswitch: {
    width: 60,
    height: 30,
    borderRadius: 50,
    overflow: 'hidden',
  },
  intjorneyinsetshadow: {
    ...StyleSheet.absoluteFillObject,
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 6},
  },
  intjorneyknob: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 15,
    left: 5,
    top: 5,
    backgroundColor: 'rgba(255,255,255,0.22)',
  },
  intjorneyknobshadowon: {
    shadowColor: '#050',
    shadowOpacity: 0.55,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 8},
  },
  intjorneyknobshadowoff: {
    shadowColor: '#500',
    shadowOpacity: 0.55,
    shadowRadius: 12,
    shadowOffset: {width: 0, height: 8},
  },
});

export default Intuitionclnswtch;
