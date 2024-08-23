import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Icons} from '../../theme/Icon';
import normalize from '../../utils/helpers/normalize';
import {Fonts} from '../../theme/Fonts';
import {COLORS} from '../../theme/Colors';

const width = Dimensions.get('screen').width;

const ProductCard = ({
  product,
  containerStyle,
  index,
  isFavorite,
  onToggleFavorite,
  handleAddToCart,
  onPress
}) => {
  // console.log(product, '?????>>>product');
  return (
    <TouchableOpacity  style={[styles.productCardMainContainer]} key={index} activeOpacity={0.8} onPress={onPress}>
      <TouchableOpacity style={styles.heartIcon} onPress={onToggleFavorite}>
        <Image
          source={
            isFavorite ? Icons.heartFill : Icons.bottomtab_icon_inactive_search
          }
          style={[
            styles.heartIconImage,
            {tintColor: isFavorite ? COLORS.primary : COLORS.black},
          ]}
        />
      </TouchableOpacity>
      <View>
        <View style={styles.productCardImageContainer}>
          <Image
            source={{uri: product?.thumbnail}}
            style={styles.productCardImageStyle}
          />
        </View>
      </View>
      <Text style={styles.productCardNameText} numberOfLines={2}>
        {product?.title}
      </Text>
      <View style={styles.priceAndCartContainer}>
        <Text style={styles.productCardPriceText}>₹{product?.price}</Text>
        <TouchableOpacity style={styles.cartIcon} onPress={handleAddToCart }>
          <Image source={Icons.Cart} style={styles.cartIconImage} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCardMainContainer: {
    width: width / 2 - normalize(18), // Increase the card width
    marginRight: normalize(10),
    marginTop: normalize(10),
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    padding: normalize(15), // Increase padding
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    // elevation: 1,
  },
  productCardImageContainer: {
    borderColor: 'rgb(236,236,237)',
    borderRadius: normalize(10),
    alignItems: 'center',
    overflow: 'hidden',
  },
  productCardImageStyle: {
    height: width / 2 - normalize(45), // Adjust image size
    width: width / 2 - normalize(40),
    resizeMode: 'contain',
  },
  heartIcon: {
    position: 'absolute',
    top: normalize(10),
    left: normalize(10),
    backgroundColor: '#fff',
    padding: normalize(5),
    borderRadius: normalize(50),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 3,
    zIndex: 10,
  },
  heartIconImage: {
    width: normalize(20),
    height: normalize(20),
    tintColor: COLORS.primary,
  },
  productCardNameText: {
    marginTop: normalize(10),
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(14), // Slightly increase font size
    color: COLORS.dark,
  },
  priceAndCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalize(5),
  },
  productCardPriceText: {
    fontFamily: Fonts.RobotoBold,
    fontSize: normalize(16), // Slightly increase font size
    color: COLORS.dark,
  },
  cartIcon: {
    backgroundColor: COLORS.primary,
    padding: normalize(8), // Adjust padding to align with new design
    borderRadius: normalize(50),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 3,
  },
  cartIconImage: {
    width: normalize(20),
    height: normalize(20),
    tintColor: COLORS.secondaryLight,
  },
});

export default ProductCard;
