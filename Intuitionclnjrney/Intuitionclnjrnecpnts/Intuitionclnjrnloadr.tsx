// Welcome Loader !

import WebView from 'react-native-webview';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';

import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const intuitionClnLoaderHTML = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  html, body {
    margin: 0;
    padding: 0;
    background: transparent;
    overflow: hidden;
    height: 100%;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .spinner {
    width: 70px;
    height: 70px;
    position: relative;
    transform-style: preserve-3d;
    animation: spinner 1.6s infinite ease;
  }

  .spinner div {
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid #ffffff;
    background: rgba(247,197,159,0.1);
  }

  .spinner div:nth-child(1) {
    transform: translateZ(-35px) rotateY(180deg);
  }

  .spinner div:nth-child(2) {
    transform: rotateY(-270deg) translateX(50%);
    transform-origin: top right;
  }

  .spinner div:nth-child(3) {
    transform: rotateY(270deg) translateX(-50%);
    transform-origin: center left;
  }

  .spinner div:nth-child(4) {
    transform: rotateX(90deg) translateY(-50%);
    transform-origin: top center;
  }

  .spinner div:nth-child(5) {
    transform: rotateX(-90deg) translateY(50%);
    transform-origin: bottom center;
  }

  .spinner div:nth-child(6) {
    transform: translateZ(35px);
  }

  @keyframes spinner {
    0% {
      transform: rotate(45deg) rotateX(-25deg) rotateY(25deg);
    }
    50% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(25deg);
    }
    100% {
      transform: rotate(45deg) rotateX(-385deg) rotateY(385deg);
    }
  }
</style>
</head>

<body>
  <div class="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</body>
</html>
`;

const Intuitionclnjrnloadr = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const intuitionClnTimer = setTimeout(() => {
      navigation.replace('Intuitionclnejronbrd' as never);
    }, 6000);

    return () => clearTimeout(intuitionClnTimer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/i/intuitionclnldr.png')}
      style={styles.intuitionClnImageBackground}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.intuitionClnWebviewDock}>
          <WebView
            originWhitelist={['*']}
            source={{html: intuitionClnLoaderHTML}}
            style={styles.intuitionClnWebview}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Intuitionclnjrnloadr;

const styles = StyleSheet.create({
  intuitionClnImageBackground: {
    flex: 1,
  },
  intuitionClnWebviewDock: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  intuitionClnWebview: {
    backgroundColor: 'transparent',
    width: 260,
    height: 250,
  },
});
