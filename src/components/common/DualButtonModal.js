import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import normalize from '../../utils/helpers/normalize';
import { COLORS } from '../../theme/Colors';
import { Fonts } from '../../theme/Fonts';
import {CustomButtonOutline, CustomButtonSolid} from '../custom/CustomButton';

const DualButtonModal = ({
  label,
  subLabel,
  visible,
  setVisible = () => {},
  onBackdropPress = () => {},
  blueButtonText,
  blueButtonAction = () => {},
  whiteButtonText,
  whiteButtonAction = () => {},
}) => {
  return (
    <ReactNativeModal
      isVisible={visible}
      onBackdropPress={onBackdropPress}
      style={styles.modalStyle}>
      <View style={styles.visibleArea}>
        {label ? <Text style={styles.modalLabel}>{label}</Text> : null}
        {subLabel ? <Text style={styles.modalSubLabel}>{subLabel}</Text> : null}
        {blueButtonText ? (
          <CustomButtonSolid
            label={blueButtonText}
            onPress={() => {
              blueButtonAction();
              setVisible(false);
            }}
            containerStyle={{marginTop: normalize(20)}}
          />
        ) : null}
        {whiteButtonText ? (
          <CustomButtonOutline
            label={whiteButtonText}
            onPress={() => {
              whiteButtonAction();
              setVisible(false);
            }}
            containerStyle={{marginTop: normalize(10)}}
          />
        ) : null}
      </View>
    </ReactNativeModal>
  );
};

export default DualButtonModal;

const styles = StyleSheet.create({
  modalStyle: {
    padding: 0,
    margin: 0,
    justifyContent: 'flex-end',
  },
  // modalMainContainer: {
  //   height: height,
  //   width: width,
  //   justifyContent: 'flex-end',
  // },
  visibleArea: {
    width: '100%',
    paddingHorizontal: normalize(20),
    paddingTop: normalize(20),
    paddingBottom: normalize(30),
    borderTopRightRadius: normalize(40),
    borderTopLeftRadius: normalize(40),
    backgroundColor: COLORS.main,
  },
  modalLabel: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    color: COLORS.dark,
    fontSize: normalize(16),
    fontFamily: Fonts.MadeTommy,
  },
  modalSubLabel: {
    alignSelf: 'center',
    color: COLORS.main,
    fontSize: normalize(11),
    fontFamily: Fonts.RobotoRegular,
    marginTop: normalize(4),
  },
});
