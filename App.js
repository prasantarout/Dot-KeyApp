import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import StackNav from './src/navigation/StackNav';
import SplashScreen from 'react-native-splash-screen';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import NoInternetModal from './src/components/custom/NoInternetModal';
import { useNetInfo } from '@react-native-community/netinfo';

const App = () => {
  const netInfo = useNetInfo();
  useEffect(() => {
    SplashScreen.hide();
    if (Text.defaultProps) {
      Text.defaultProps.allowFontScaling = false;
    } else {
      Text.defaultProps = {};
      Text.defaultProps.allowFontScaling = false;
    }

    // Override Text scaling in input fields
    if (TextInput.defaultProps) {
      TextInput.defaultProps.allowFontScaling = false;
    } else {
      TextInput.defaultProps = {};
      TextInput.defaultProps.allowFontScaling = false;
    }
  }, []);

  // console.log('netInfo', netInfo);

  return (
    <>
    {/* <Text>hello</Text> */}
      <StackNav />
      {/* <NoInternetModal netInfo={netInfo} /> */}
    </>
  );
};

export default App;
