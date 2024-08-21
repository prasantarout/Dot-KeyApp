import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput as Input,
  Text,
  TouchableOpacity,
  Image,
  useColorScheme,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';
import {Fonts, Icons} from '../themes/Themes';
import normalize from '../utils/normalize';

export default function TextInput(props) {
  const [passwrdVisible, setpasswrdVisible] = useState(true);
  const [blureffect, setBlureffect] = useState(false);
  const theme = useColorScheme();
  const isDarkTheme = theme === 'dark';
  function onChangeText(text) {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  }

  return (
    <View
      style={[
        {
          flexDirection: props.flexDirection,
          width: props.width,
          height: props?.ViewHeight,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          borderRadius: props.ViewborderRadius,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          backgroundColor: props.backgroundColor,
          alignSelf: props.alignSelf,
          marginHorizontal: props.marginHorizontal,
          // borderRadius: normalize(5),
          paddingVertical: props.paddingViewVertical,
          marginLeft: props.marginLeft,
          alignItems: props.ViewalignItems,
          justifyContent: props.ViewajustifyContent,
          paddingHorizontal: props.paddingHorizontal,
        },
      ]}>
      {props.Heading ? (
        <Text
          style={{
            color: '#9595B0',
            fontFamily: Fonts.RobotoLight,
            marginLeft: normalize(10),
            marginTop: normalize(10),
            fontSize: normalize(10),
          }}>
          {props.HeadingText}
        </Text>
      ) : null}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: props.Textmargintop,
        }}>
        {props?.search ? (
          <Image
            source={Icons.search}
            style={{
              height: normalize(13),
              width: normalize(13),
              marginTop: normalize(5),
            }}
          />
        ) : null}

        <Input
          numberOfLines={props.numberOfLines}
          style={{
            flex: 1,
            paddingTop: props.paddingTop,
            paddingLeft: props.paddingLeft,
            textAlign: props.textAlign,
            color: 'black',
            fontSize: props.fontSize,
            fontFamily: props.fontFamily,
            paddingRight: normalize(15),
            marginTop: Platform?.OS === 'ios' ? normalize(5) : 0,
            height: props.TextInputHeight,
          }}
          multiline={props.multiline}
          editable={props.editable}
          secureTextEntry={passwrdVisible ? !props.isVisible : props.isVisible}
          keyboardType={props.keyboardType}
          placeholder={props.placeholder}
          value={props.value}
          maxLength={props.maxLength}
          textAlignVertical={props.textAlignVertical}
          onChangeText={text => onChangeText(text)}
          onBlur={() => {
            setBlureffect(false);
          }}
          onFocus={() => setBlureffect(true)}
          placeholderTextColor={props.placeholderTextColor}
        />
        {props.eyeoffvisible && (
          <TouchableOpacity
            onPress={() => setpasswrdVisible(!passwrdVisible)}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="contain"
              source={
                passwrdVisible ? Icons.PasswordHide : Icons.PasswordUnhide
              }
              style={[
                {
                  height: normalize(15),
                  width: normalize(15),
                  margin: normalize(12),
                  tintColor: props.visibleTint,
                },
              ]}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
TextInput.propTypes = {
  secureTextEntry: PropTypes.bool,
  eyeonvisible: PropTypes.bool,
  eyeoffvisible: PropTypes.bool,
  isVisible: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.number,
  borderWidth: PropTypes.number,
  marginBottom: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
  marginTop: PropTypes.number,
  backgroundColor: PropTypes.string,
  paddingLeft: PropTypes.number,
  textAlign: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  fontFamily: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  keyboardType: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  alignSelf: PropTypes.string,
  show: PropTypes.bool,
  maxLength: PropTypes.string,
  isLeftIconVisible: PropTypes.bool,
  leftimage: PropTypes.string,
  leftimageheight: PropTypes.number,
  leftimagewidth: PropTypes.number,
  tintColor: PropTypes.string,
  multiline: PropTypes.bool,
  paddingTop: PropTypes.number,
  marginRightofIcon: PropTypes.number,
  marginHorizontal: PropTypes.marginHorizontal,
  rightimage: PropTypes.bool,
  RightIconVisible: PropTypes.bool,
};

TextInput.defaultProps = {
  height: normalize(50),
  ViewHeight: normalize(50),
  width: '92%',
  // borderRadius: normalize(10),
  marginTop: normalize(0),
  alignSelf: 'center',
  placeholderTextColor: '#4F4F4F',
  paddingRight: normalize(15),
  paddingLeft: normalize(10),
  onChangeText: null,
  onPress: null,
  color: 'black',
  secureTextEntry: false,
  enablesReturnKeyAutomatically: true,
  eyeoffvisible: false,
  isVisible: false,
  isModalShow: false,
  isCountryShow: false,
  isDatePickerShow: false,
  ViewborderRadius: normalize(5),
  show: false,
  isLeftIconVisible: false,
  marginRightofIcon: normalize(5),
  // tintColor: 'orange',
  // borderWidth:normalize(1),
  borderColor: '#AFAFAF',
  //fontFamily: Fonts.RobotoRegular,
};
