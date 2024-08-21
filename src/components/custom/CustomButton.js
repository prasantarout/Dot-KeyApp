import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../../themes/Themes';
import normalize from '../../utils/normalize';

export const CustomButtonSolid = ({
  label = '',
  onPress = () => {},
  containerStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.solidButtonContainer, containerStyle]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={[styles.solidButtonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

export const CustomButtonOutline = ({
  label = '',
  onPress = () => {},
  containerStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.outlineButtonContainer, containerStyle]}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={[styles.outlineButtonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  solidButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue.main,
    height: normalize(50),
    borderRadius: normalize(10),
    borderWidth: 2,
    borderColor: Colors.blue.main,
    width: '100%',
    marginTop: normalize(15),
  },
  solidButtonText: {
    fontFamily: Fonts.MadeTommyBold,
    color: Colors.white.main,
    fontSize: normalize(13),
  },
  outlineButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white.main,
    height: normalize(50),
    borderRadius: normalize(10),
    borderWidth: 2,
    borderColor: Colors.blue.main,
    width: '100%',
    marginTop: normalize(15),
  },
  outlineButtonText: {
    fontFamily: Fonts.MadeTommyBold,
    color: Colors.blue.main,
    fontSize: normalize(13),
  },
});
