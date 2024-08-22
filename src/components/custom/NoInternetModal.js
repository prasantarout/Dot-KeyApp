import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fonts} from '../../theme/Fonts';
import {COLORS} from '../../theme/Colors';
import normalize from '../../utils/helpers/normalize';

export default function NoInternetModal({netInfo}) {
  return (
    <Modal
      visible={netInfo.isConnected == null ? false : !netInfo.isConnected}
      // visible={true}
      transparent>
      <View style={style.mainView}>
        <View style={style.contentView}>
          <Text style={style.boldText}>Connection Error</Text>
          <Text style={style.thinText}>
            Oops! Looks like your devices is not connected to the internet.
          </Text>
          <TouchableOpacity style={style.button}>
            <Text style={style.buttonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const style = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  contentView: {
    height: normalize(180),
    width: '100%',
    backgroundColor: COLORS.white,
  },
  boldText: {
    fontSize: normalize(17),
    color: COLORS.black,
    fontFamily: Fonts.AssistantSemiBold,
    textAlign: 'center',
    marginVertical: normalize(10),
  },
  thinText: {
    fontSize: normalize(15),
    color: COLORS.secondaryText,
    fontFamily: Fonts.AssistantMedium,
    marginTop: normalize(10),
    marginBottom: normalize(20),
    textAlign: 'center',
    paddingHorizontal: normalize(10),
  },
  button: {
    height: normalize(38),
    width: '85%',
    backgroundColor: COLORS.lightPrimary,
    alignSelf: 'center',
    borderRadius: normalize(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: normalize(15),
    color: COLORS.white,
    fontFamily: Fonts.MadeTommyBold,
  },
});
