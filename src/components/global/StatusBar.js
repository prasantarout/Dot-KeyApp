import React from 'react';
import {StatusBar} from 'react-native';

const AppStatusBar = ({background = 'dark'}) => {
  return (
    <StatusBar
      translucent
      backgroundColor={background === 'dark' ? 'transparent' : '#ffffff'}
      barStyle={background === 'dark' ? 'light-content' : 'dark-content'}
      hidden={false}
    />
  );
};

export default AppStatusBar;
