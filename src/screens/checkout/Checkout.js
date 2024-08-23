import React, {useEffect} from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  BackHandler,
  Alert,
} from 'react-native';
import normalize from '../../utils/helpers/normalize';
import {COLORS} from '../../theme/Colors';
import {Fonts} from '../../theme/Fonts';
import {Icons} from '../../theme/Icon';
import CartProductCard from '../../components/common/CartProductCard';
import CartPriceDetails from '../../components/common/CartPriceDetails';
import {CustomButtonSolid} from '../../components/custom/CustomButton';
import {useSelector} from 'react-redux';
import CustomHeader from '../../components/custom/CustomHeader';
// import AddressCard from '../../components/common/ShippingDetailsAddress';

const Checkout = ({navigation, route}) => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const {
    totalProduct,
    totalAmount,
    discountAmount,
    shippingAmount,
    payableAmount,
  } = route.params || {};

  const handleBackButtonClick = () => {
    Alert.alert(
      'Confirm Exit',
      'Are you sure you want to go back?',
      [
        {
          text: 'Cancel',
          onPress: () => null, // Do nothing
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => navigation.goBack(), // Go back if confirmed
        },
      ],
      {cancelable: true},
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  return (
    <View>
      <CustomHeader
        title="Checkout"
        onMenuPress={handleBackButtonClick}
        onProfilePress={() => console.log('Profile pressed')}
        menuIcon={Icons.GobackHeader}
        isCheckout={true}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.textOrder}>Order Summary</Text>
        <View style={{marginTop: normalize(10)}}>
          {cartItems?.length > 0 &&
            cartItems.map((item, index) => {
              return (
                <CartProductCard
                  productImage={{uri: item.thumbnail}}
                  productName={item.title}
                  productPrice={`$${item.price * item.quantity}`}
                  showProductPrice={true}
                  productActualPrice={
                    item.discountPercentage
                      ? `$${(
                          item.price *
                          (1 - item.discountPercentage / 100)
                        ).toFixed(2)}`
                      : ''
                  }
                  showActualPrice={!!item.discountPercentage}
                  productOrderId={item.sku}
                  showOrderId={true}
                  showDelete={true}
                  showCounter={true}
                  isCheckout={true}
                  // quantity={item.quantity}
                  // onDelete={() => handleDelete(item.id)}
                  // onIncrease={() => handleIncrease(item.id)}
                  // onDecrease={() => handleDecrease(item.id)}
                />
              );
            })}
        </View>
        {/* </View> */}
        <CartPriceDetails
          totalProduct={cartItems.length}
          totalAmount={`₹${totalAmount}`}
          // totalAmount={{totalAmount}}
          discountAmount={`₹${discountAmount}`}
          shippingAmount={`₹${shippingAmount}`}
          payableAmount={`₹${payableAmount}`}
        />
        <CustomButtonSolid
          label="Proceed to Payment"
          onPress={() => {
            navigation.navigate('Payment');
          }}
          containerStyle={{marginTop: normalize(0)}}
        />
      </ScrollView>
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
    color: COLORS.dark,
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
    // borderWidth: normalize(1),
    // borderColor: 'red',
    borderRadius: normalize(10),
    marginVertical: normalize(15),
  },
  productListLabel: {
    fontSize: normalize(13),
    color: COLORS.dark,
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
  scrollContainer: {
    paddingHorizontal: normalize(15),
    paddingTop: normalize(10),
    paddingBottom: normalize(100),
    flexGrow: 1,
  },
  textOrder: {
    fontSize: normalize(14),
    fontFamily: Fonts.RobotoRegular,
    color: '#505050',
  },
});
