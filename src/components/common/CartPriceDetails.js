import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from '../../utils/helpers/normalize';
import { COLORS } from '../../theme/Colors';
import { Fonts } from '../../theme/Fonts';

const CartPriceDetails = ({
  totalProduct,
  totalAmount,
  discountAmount,
  shippingAmount,
  payableAmount,
}) => {
  return (
    <View style={styles.priceDetailsContainer}>
      <Text style={styles.priceDetailsLabelText}>
        Price Details ({totalProduct} Items)
      </Text>
      <View style={styles.priceDetailsDataContainer}>
        <Text style={styles.priceDetailsDataLabelText}>Total Price:</Text>
        <Text style={styles.priceDetailsDataValueText}>{totalAmount}</Text>
      </View>
      <View style={styles.priceDetailsDataContainer}>
        <Text style={styles.priceDetailsDataLabelText}>Discount:</Text>
        <Text style={styles.priceDetailsDataValueText}>-{discountAmount}</Text>
      </View>
      <View style={styles.priceDetailsDataContainer}>
        <Text style={styles.priceDetailsDataLabelText}>Shipping Cost</Text>
        <Text style={styles.priceDetailsDataValueText}>{shippingAmount}</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.priceDetailsDataContainer}>
        <Text style={styles.priceDetailsDataLabelText}>Payable Amount</Text>
        <Text style={styles.priceDetailsDataValueText}>
          {'      ' + payableAmount}
        </Text>
      </View>
    </View>
  );
};

export default CartPriceDetails;

const styles = StyleSheet.create({
  priceDetailsContainer: {
    paddingHorizontal: normalize(10),
    paddingVertical: normalize(15),
    borderRadius: normalize(10),
    marginBottom: normalize(15),
    backgroundColor: '#F8F8FE',
  },
  priceDetailsLabelText: {
    fontSize: normalize(13),
    color: COLORS.dark,
    fontFamily: Fonts.MadeTommyExtraBold,
  },
  priceDetailsDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(12),
  },
  priceDetailsDataLabelText: {
    fontFamily: Fonts.RobotoRegular,
    color: '#919191',
    fontSize: normalize(11),
  },
  priceDetailsDataValueText: {
    fontFamily: Fonts.RobotoMedium,
    color: '#060606',
    fontSize: normalize(11),
  },
  line: {
    height: 1,
    backgroundColor: '#e5e5e5',
    width: '100%',
    marginTop: normalize(12),
    marginBottom: normalize(2),
  },
});
