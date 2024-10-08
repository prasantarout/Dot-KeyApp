// src/components/CustomHeader.js

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Icons} from '../../theme/Icon';
import normalize from '../../utils/helpers/normalize';
import {COLORS} from '../../theme/Colors';

const CustomHeader = ({
  title,
  onMenuPress,
  onProfilePress,
  menuIcon,
  icons,
  backgroundColor,
  isCheckout,
  isMenu,
  isLogo,
  logo,
}) => {
  return (
    <View style={[styles.header]}>
      <TouchableOpacity onPress={onMenuPress}>
        {isCheckout && (
          <TouchableOpacity onPress={onMenuPress}>
            <Image source={menuIcon} style={styles.icon} />
          </TouchableOpacity>
        )}

        {/* Show menu icon only on Home screen */}
        {isMenu && !isCheckout && (
          <TouchableOpacity onPress={onMenuPress}>
            <Image source={menuIcon} style={styles.icon} />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
      {isLogo ? (
        <Image source={{uri:logo}} style={styles.logo_img} />
      ) : (
        <Text style={styles.logo}>{title}</Text>
      )}

      <TouchableOpacity onPress={onProfilePress}>
        <Image source={icons} style={styles.icons} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalize(10),
    // backgroundColor: '#fff',
    paddingHorizontal: normalize(10),
  },
  logo: {
    fontSize: 24,
    fontWeight: '500',
    color: COLORS.textColor,
  },
  icon: {
    width: normalize(25),
    height: normalize(25),
    resizeMode: 'contain',
    tintColor: COLORS.bgWhite,
  },
  icons: {
    width: normalize(30),
    height: normalize(30),
    resizeMode: 'contain',
  },
  logo_img:{
    width: normalize(100),
    height: normalize(40),
    resizeMode:'contain'
    
  }
});
