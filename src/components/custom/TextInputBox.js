import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';

const TextInputBox = ({
  containerStyle = {},
  labelStyle = {},
  textInputStyle = {},
  placeholderTextColor = '#4F4F4F', //#CECEDB
  placeholder = 'Enter the value . . .',
  keyboardType = 'default',
  maxLength,
  label = '',
  value = '',
  setValue = () => {},
  textType = 'text',
}) => {
  const styles = customStyles({textType: textType});
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          value={value}
          onChangeText={text => {
            setValue(text);
          }}
          placeholder={placeholder}
          style={[styles.textInput, textInputStyle]}
          secureTextEntry={textType === 'password' ? passwordVisible : false}
          placeholderTextColor={placeholderTextColor}
          keyboardType={keyboardType}
          maxLength={maxLength}
        />
        {textType === 'password' ? (
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={styles.rightIconContainer}>
            <Image
              resizeMode="contain"
              source={
                passwordVisible
                  ? Icons.passwordVisible
                  : Icons.passwordInvisible
              }
              style={styles.rightIcon}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default TextInputBox;

const customStyles = ({textType}) =>
  StyleSheet.create({
    container: {
      height: normalize(50),
      backgroundColor: '#F8F8FE',
      width: '100%',
      justifyContent: 'center',
      paddingHorizontal: normalize(10),
      borderRadius: normalize(6),
      marginBottom: normalize(10),
    },
    label: {
      color: '#9595B0',
      fontSize: normalize(10),
      fontFamily: Fonts.RobotoLight,
    },
    textInput: {
      width: '100%',
      paddingVertical: 0,
      paddingLeft: 0,
      paddingRight: textType === 'text' ? normalize(0) : normalize(20),
      height: normalize(22),
      fontFamily: Fonts.RobotoRegular,
      fontSize: normalize(11),
      color: Colors.black.dark,
    },
    textInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
    },
    rightIconContainer: {position: 'absolute', right: normalize(0)},
    rightIcon: {
      height: normalize(15),
      width: normalize(15),
      resizeMode: 'contain',
    },
  });
