import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from '../../utils/helpers/normalize';
import {COLORS} from '../../theme/Colors';
import {Icons} from '../../theme/Icon';
import {Fonts} from '../../theme/Fonts';

const CartProductCard = ({
  productImageSize = 80,
  productImage = '',
  productName = '',
  productPrice = '',
  showProductPrice = false,
  productActualPrice = '',
  showActualPrice = false,
  productOrderId = '',
  showOrderId = false,
  onPressReview = () => {},
  showReview = false,
  highlightPrice = false,
  showDelete = false,
  showCounter = false,
  containerStyle = {},
  onDelete = () => {},
  onIncrease,
  onDecrease,
  quantity,
  isCheckout,
}) => {
  const [count, setCount] = useState(1);
  const price = parseFloat(productPrice.replace('$', ''));
  const totalPrice = (count * price).toFixed(2);

  return (
    <View style={[styles.productCardMainContainer, containerStyle]}>
      <View
        style={[
          styles.productCardImageContainer,
          {
            height: normalize(productImageSize),
            width: normalize(productImageSize),
          },
        ]}>
        <Image
          source={productImage}
          style={[
            styles.productCardImage,
            {
              height: normalize(productImageSize),
              width: normalize(productImageSize),
            },
          ]}
        />
      </View>
      <View style={styles.productCardDataContainer}>
        <Text style={styles.productCardNameText} numberOfLines={2}>
          {productName}
        </Text>

        {showOrderId ? (
          <Text style={styles.productCardOrderIdText}>
            Order ID: {productOrderId}
          </Text>
        ) : null}

        {showProductPrice ? (
          <Text
            style={
              highlightPrice
                ? styles.productCardPriceTextHighlight
                : styles.productCardPriceText
            }>
            ₹{totalPrice}
          </Text>
        ) : null}

        {!isCheckout && showDelete ? (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={onDelete}
            style={styles.deleteIcon}>
            <Image source={Icons.delete} style={styles.productCardDeleteIcon} />
          </TouchableOpacity>
        ) : null}
      </View>
      {!isCheckout && showCounter ? (
        <View style={styles.counterTextContainer}>
          <TouchableOpacity
            onPress={onDecrease}
            style={styles.counterTouchArea}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{quantity}</Text>
          <TouchableOpacity
            onPress={onIncrease}
            style={styles.counterTouchArea}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  productCardMainContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    borderWidth: normalize(1),
    borderColor: '#F0F0F0',
    borderRadius: normalize(10),
    marginBottom: normalize(15),
    alignItems: 'center',
    backgroundColor: '#f8f9f7',
  },
  productCardImageContainer: {
    height: normalize(80),
    width: normalize(80),
    borderRadius: normalize(10),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#F8F8FE',
  },
  productCardImage: {
    height: normalize(80),
    width: normalize(80),
    resizeMode: 'contain',
  },
  productCardDataContainer: {flex: 1, marginLeft: normalize(10)},
  productCardDeleteIcon: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    tintColor: COLORS.white,
    // marginTop: normalize(6),
  },
  productCardNameText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(12),
    color: COLORS.dark,
  },
  productCardPriceText: {
    fontFamily: Fonts.RobotoRegular,
    color: '#212121',
    fontSize: normalize(10),
    marginTop: normalize(6),
  },
  productCardPriceTextHighlight: {
    fontFamily: Fonts.RobotoBold,
    color: '#212121',
    fontSize: normalize(10),
    marginTop: normalize(6),
  },
  productCardOrderIdText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(10),
    color: '#919191',
    marginTop: normalize(6),
  },
  productCardActualPrice: {
    color: '#B4B4B4',
    textDecorationLine: 'line-through',
  },
  counterTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: normalize(80),
    backgroundColor: COLORS.primary,
    height: normalize(28),
    borderRadius: normalize(50),
    position: 'absolute',
    right: normalize(10),
    bottom: normalize(10),
  },
  counterTouchArea: {
    height: normalize(20),
    width: normalize(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalize(20),
  },
  counterText: {
    fontSize: normalize(12),
    lineHeight: normalize(14),
    color: COLORS.white,
    fontFamily: Fonts.AssistantSemiBold,
  },
  productCardReviewText: {
    fontSize: normalize(9),
    lineHeight: normalize(14),
    color: COLORS.primary,
    fontFamily: Fonts.MadeTommyMedium,
    textDecorationLine: 'underline',
    marginTop: normalize(6),
  },
  deleteIcon: {
    height: normalize(30),
    width: normalize(30),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(50),
    marginTop: normalize(5),
  },
});

export default CartProductCard;
