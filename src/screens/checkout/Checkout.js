import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import normalize from '../../utils/helpers/normalize';
import { COLORS } from '../../theme/Colors';
import { Fonts } from '../../theme/Fonts';
import { Icons } from '../../theme/Icon';
import CartProductCard from '../../components/common/CartProductCard';
import CartPriceDetails from '../../components/common/CartPriceDetails';
import {DummyData_Cart_ProductList} from '../../dummyData';
import {CustomButtonSolid} from '../../components/custom/CustomButton';
import AddressCard from '../../components/common/ShippingDetailsAddress';


const Checkout = ({navigation}) => {
  return (
    <View>
      {/* <AddressCard
        name={'John doe'}
        address={'207/105 B.T.Road Los Angeles, California, USA'}
        pinCode={'7003665'}
        number={'+91 888 555 4545'}
      /> */}
      <View style={styles.productListContainer}>
        <Text style={styles.productListLabel}>Items</Text>
        {DummyData_Cart_ProductList.map((product, index) => {
          return (
            <CartProductCard
              {...product}
              key={index}
              showProductPrice
              showCounter
              showDelete
            />
          );
        })}
      </View>
      <CartPriceDetails
        totalProduct={DummyData_Cart_ProductList.length}
        totalAmount={'$77.66'}
        discountAmount={'$12.66'}
        shippingAmount={'$8.66'}
        payableAmount={'$73.66'}
      />
      <CustomButtonSolid
        label="Proceed to Payment"
        onPress={() => {
          navigation.navigate('CartPayment');
        }}
        containerStyle={{marginTop: normalize(0)}}
      />
    </View>
  );
};

export default Checkout;

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
