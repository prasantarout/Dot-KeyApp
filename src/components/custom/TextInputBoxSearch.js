import React from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {COLORS} from '../../theme/Colors';
import {Fonts} from '../../theme/Fonts';
import {Icons} from '../../theme/Icon';
import normalize from '../../utils/helpers/normalize';

const TextInputBoxSearch = ({
  containerStyle = {},
  textInputStyle = {},
  placeholderTextColor = '#A5A5A5', //#CECEDB //'#4F4F4F'
  placeholder = 'Enter the value . . .',
  value = '',
  setValue = () => {},
  textType = 'text',
}) => {
  const styles = customStyles({textType: textType});

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.iconContainer}>
        <Image source={Icons.search_textbox_icon} style={styles.searchIcon} />
      </View>
      <TextInput
        value={value}
        onChangeText={text => {
          setValue(text);
        }}
        placeholder={placeholder}
        style={[styles.textInput, textInputStyle]}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

export default TextInputBoxSearch;

const customStyles = ({textType}) =>
  StyleSheet.create({
    container: {
      height: normalize(48),

      flex: 1,
      // marginRight: normalize(10),
      alignItems: 'center',
      paddingHorizontal: normalize(6),
      flexDirection: 'row',
      borderWidth: 1,
      borderRadius: normalize(10),
      borderColor: '#EFEFEF',
      backgroundColor: '#fff',
    },
    textInput: {
      flex: 1,
      paddingVertical: 0,
      paddingLeft: 0,
      paddingRight: textType === 'text' ? normalize(0) : normalize(20),
      height: normalize(22),
      fontFamily: Fonts.RobotoRegular,
      fontSize: normalize(11),
      color: COLORS.dark,
      marginLeft: normalize(4),
    },
    iconContainer: {
      height: normalize(20),
      width: normalize(20),
      overflow: 'hidden',
    },
    searchIcon: {
      height: normalize(20),
      width: normalize(20),
      resizeMode: 'contain',
    },
  });
