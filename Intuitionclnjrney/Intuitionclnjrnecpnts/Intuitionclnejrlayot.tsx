import React from 'react';
import {ImageBackground, ScrollView, StyleSheet} from 'react-native';

const Intuitionclnejrlayot = ({children}: {children: React.ReactNode}) => {
  return (
    <ImageBackground
      source={require('../../assets/i/intuitionclnldr.png')}
      style={styles.container}
      resizeMode="cover">
      <ScrollView
        bounces={false}
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    </ImageBackground>
  );
};

export default Intuitionclnejrlayot;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
