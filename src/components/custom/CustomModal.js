import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Modal from 'react-native-modal';
import normalize from '../../utils/helpers/normalize';
export default function BottomModal({
  modalVisible,
  children,
  onBackdropPress,
  height,
}) {
  return (
    <SafeAreaView>
      <Modal
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        isVisible={modalVisible}
        style={{
          width: '100%',
          alignSelf: 'center',
          margin: 0,
        }}
        avoidKeyboard={true}
        animationInTiming={800}
        animationOutTiming={1000}
        onBackButtonPress={() => onBackdropPress()}
        onBackdropPress={() => onBackdropPress()}>
        <View
          style={[
            {
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: normalize(40),
              borderTopRightRadius: normalize(40),
              position: 'absolute',
              bottom: 0,
              // height: height,
              width: '100%',
              paddingVertical: normalize(40),
              paddingHorizontal: globalConstant.globalGap,
              // paddingBottom:normalize(40)
            },
          ]}>
          {children}
        </View>
      </Modal>
    </SafeAreaView>
  );
}
