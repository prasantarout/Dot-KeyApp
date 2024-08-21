import React from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import normalize from '../../utils/normalize';
import {Colors, Fonts, Icons} from '../../themes/Themes';

const AddressCard = ({name, address, pinCode, number}) => {
  return (
    <View style={styles.shippingContainer}>
      <Text style={styles.shippingPersonNameText}>{name}</Text>
      <Text style={styles.shippingPersonAddressText}>{address}</Text>
      <Text style={styles.shippingPersonAddressText}>{pinCode}</Text>
      <Text style={styles.shippingPersonNumberText}>{number}</Text>
      <View style={styles.actionMainContainer}>
        <View
          style={[styles.actionIconTextContainer, {marginRight: normalize(4)}]}>
          <Image
            source={Icons.editBold}
            style={[styles.actionIcon, {marginRight: normalize(4)}]}
          />
          <Text style={styles.actionText}>Edit</Text>
        </View>
        <View style={styles.actionIconContainer}>
          <Image source={Icons.deleteBold} style={styles.actionIcon} />
        </View>
      </View>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#e5e5e5',
    width: '100%',
    marginTop: normalize(12),
    marginBottom: normalize(2),
  },
  keyboardAwareScrollViewContainer: {
    flex: 1,
  },
  keyboardAwareScrollViewContentContainer: {
    paddingHorizontal: normalize(15),
    paddingTop: normalize(15),
    paddingBottom: normalize(30),
  },
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
  subView: {
    backgroundColor: 'white',
    marginTop: Platform.OS === 'android' ? normalize(50) : normalize(200),
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  shippingContainer: {
    padding: normalize(10),
    borderWidth: normalize(1),
    borderColor: '#F0F0F0',
    borderRadius: normalize(10),
  },
  shippingPersonNameText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(12),
    color: Colors.blue.dark,
  },
  shippingPersonAddressText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(11),
    color: '#505050',
    marginTop: normalize(6),
  },
  shippingPersonNumberText: {
    fontFamily: Fonts.RobotoMedium,
    fontSize: normalize(11),
    color: '#505050',
    marginTop: normalize(6),
  },
  productListContainer: {
    padding: normalize(10),
    borderWidth: normalize(1),
    borderColor: '#F0F0F0',
    borderRadius: normalize(10),
    marginVertical: normalize(15),
  },
  productListLabel: {
    fontSize: normalize(13),
    color: Colors.black.dark,
    fontFamily: Fonts.MadeTommyExtraBold,
    marginBottom: normalize(10),
  },
  actionMainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: normalize(10),
    bottom: normalize(10),
  },
  actionIconTextContainer: {
    paddingVertical: normalize(4),
    paddingHorizontal: normalize(10),
    borderWidth: 1,
    borderRadius: normalize(20),
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: '#F1F1F1',
    flexDirection: 'row',
    marginRight: normalize(4),
  },
  actionIcon: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
  },
  actionText: {
    fontSize: normalize(11),
    fontFamily: Fonts.RobotoRegular,
    color: '#505050',
    lineHeight: normalize(12),
  },
  actionIconContainer: {
    padding: normalize(4),
    borderWidth: 1,
    borderRadius: normalize(20),
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F1F1F1',
    flexDirection: 'row',
  },
});
