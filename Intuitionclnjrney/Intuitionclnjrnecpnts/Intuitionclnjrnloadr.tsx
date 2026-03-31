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
  body {
    margin: 0;
    padding: 0;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    overflow: hidden;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    position: relative;
    width: 200px;
    height: 200px;
    perspective: 800px;
  }

  .crystal {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    opacity: 0;
    transform-origin: bottom center;
    transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
    animation: spin 4s linear infinite,
               emerge 2s ease-in-out infinite alternate,
               fadeIn 0.3s ease-out forwards;
    border-radius: 10px;
    visibility: hidden;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotateX(45deg) rotateZ(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotateX(45deg) rotateZ(360deg);
    }
  }

  @keyframes emerge {
    0%, 100% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0;
    }
    50% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    to {
      visibility: visible;
      opacity: 0.8;
    }
  }

  .crystal:nth-child(1) {
    background: linear-gradient(45deg, #003366, #336699);
    animation-delay: 0s;
  }

  .crystal:nth-child(2) {
    background: linear-gradient(45deg, #003399, #3366cc);
    animation-delay: 0.3s;
  }

  .crystal:nth-child(3) {
    background: linear-gradient(45deg, #0066cc, #3399ff);
    animation-delay: 0.6s;
  }

  .crystal:nth-child(4) {
    background: linear-gradient(45deg, #0099ff, #66ccff);
    animation-delay: 0.9s;
  }

  .crystal:nth-child(5) {
    background: linear-gradient(45deg, #33ccff, #99ccff);
    animation-delay: 1.2s;
  }

  .crystal:nth-child(6) {
    background: linear-gradient(45deg, #66ffff, #ccffff);
    animation-delay: 1.5s;
  }
</style>
</head>

<body>
  <div class="container">
    <div class="loader">
      <div class="crystal"></div>
      <div class="crystal"></div>
      <div class="crystal"></div>
      <div class="crystal"></div>
      <div class="crystal"></div>
      <div class="crystal"></div>
    </div>
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
