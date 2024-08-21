import {Keyboard, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import normalize from '../../utils/normalize';
import {Colors, Fonts} from '../../themes/Themes';
import {CustomButtonSolid} from '../custom/CustomButton';
import TextInputBoxMultiline from '../custom/TextInputBoxMultiline';
import CartProductCard from './CartProductCard';
import {DummyData_Cart_ProductList} from '../../dummyData';

const ReviewModal = ({
  label,
  subLabel,
  visible,
  setVisible = () => {},
  onBackdropPress = () => {},
  textInputValue,
  setTextInputValue = () => {},
  textInputLabel,
  textInputPlaceHolder,
  blueButtonText,
  blueButtonAction = () => {},
}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      style={styles.modalStyle}>
      <View
        style={styles.visibleArea}
        onStartShouldSetResponder={() => {
          Keyboard.dismiss();
          return;
        }}>
        {label ? <Text style={styles.modalLabel}>{label}</Text> : null}
        {subLabel ? <Text style={styles.modalSubLabel}>{subLabel}</Text> : null}
        <CartProductCard
          {...DummyData_Cart_ProductList[0]}
          showOrderId
          productImageSize={65}
          containerStyle={{marginTop: normalize(30)}}
        />
        <TextInputBoxMultiline
          value={textInputValue}
          setValue={setTextInputValue}
          label={textInputLabel}
          placeholder={textInputPlaceHolder}
        />
        {blueButtonText ? (
          <CustomButtonSolid
            label={blueButtonText}
            onPress={() => {
              blueButtonAction();
              setVisible(false);
            }}
            containerStyle={styles.buttonContainerStyle}
          />
        ) : null}
      </View>
    </ReactNativeModal>
  );
};

export default ReviewModal;

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
  },
  visibleArea: {
    width: '100%',
    paddingHorizontal: normalize(20),
    paddingTop: normalize(20),
    paddingBottom: normalize(30),
    borderTopRightRadius: normalize(40),
    borderTopLeftRadius: normalize(40),
    backgroundColor: Colors.white.main,
  },
  modalLabel: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: Colors.blue.dark,
    fontSize: normalize(16),
    fontFamily: Fonts.MadeTommy,
  },
  modalSubLabel: {
    alignSelf: 'center',
    color: Colors.grey.main,
    fontSize: normalize(11),
    fontFamily: Fonts.RobotoRegular,
    marginTop: normalize(4),
  },
  buttonContainerStyle: {
    marginTop: normalize(20),
    width: '90%',
    alignSelf: 'center',
  },
});
