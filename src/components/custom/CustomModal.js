import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';
import normalize from '../../utils/helpers/normalize';
import {COLORS} from '../../theme/Colors';

export default function BottomModal({
  modalVisible,
  onBackdropPress,
  onDeleteConfirm,
  onCancel,
  isWishList
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
              width: '100%',
              paddingVertical: normalize(40),
              paddingHorizontal: 20,
            },
          ]}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this product from {isWishList ? "wishlist":"cart"}?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={onDeleteConfirm}>
              <Text style={styles.buttonText}>Yes, Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalText: {
    fontSize: normalize(16),
    textAlign: 'center',
    marginBottom: normalize(20),
    color: COLORS.textColor,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: normalize(10),
  },
  deleteButton: {
    backgroundColor:COLORS.primary,
    padding: normalize(15),
    borderRadius: normalize(50),
    width: '45%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
    padding: normalize(15),
    borderRadius: normalize(50),
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: normalize(14),
  },
});
