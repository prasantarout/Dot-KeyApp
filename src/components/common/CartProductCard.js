import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, Fonts, Icons} from '../../themes/Themes';
import normalize from '../../utils/normalize';

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
  // count = 0,
  // setCount = () => {},
  highlightPrice = false,
  showDelete = false,
  showCounter = false,
  containerStyle = {},
}) => {
  const [count, setCount] = useState(1);
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
            {productPrice}{' '}
            {showActualPrice ? (
              <Text style={styles.productCardActualPrice}>
                {productActualPrice}
              </Text>
            ) : null}
          </Text>
        ) : null}

        {showDelete ? (
          <TouchableOpacity activeOpacity={0.5}>
            <Image source={Icons.delete} style={styles.productCardDeleteIcon} />
          </TouchableOpacity>
        ) : null}

        {showReview ? (
          <TouchableOpacity onPress={onPressReview}>
            <Text style={styles.productCardReviewText}>Review This Item</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      {showCounter ? (
        <View style={styles.counterTextContainer}>
          <TouchableOpacity
            onPress={() => {
              count > 0 ? setCount(count - 1) : null;
            }}
            style={styles.counterTouchArea}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.counterText}>{count}</Text>
          <TouchableOpacity
            onPress={() => setCount(count + 1)}
            style={styles.counterTouchArea}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
export default CartProductCard;

const styles = StyleSheet.create({
  productCardMainContainer: {
    flexDirection: 'row',
    padding: normalize(10),
    borderWidth: normalize(1),
    borderColor: '#F0F0F0',
    borderRadius: normalize(10),
    marginBottom: normalize(15),
    alignItems: 'center',
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
    marginTop: normalize(6),
  },
  productCardNameText: {
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(10),
    color: Colors.blue.dark,
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
    backgroundColor: '#F5F6F6',
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
    color: Colors.black.dark,
    fontFamily: Fonts.AssistantSemiBold,
  },
  productCardReviewText: {
    fontSize: normalize(9),
    lineHeight: normalize(14),
    color: Colors.blue.main,
    fontFamily: Fonts.MadeTommyMedium,
    textDecorationLine: 'underline',
    marginTop: normalize(6),
  },
});
