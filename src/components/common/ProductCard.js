import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
import {Icons} from '../../theme/Icon';
import normalize from '../../utils/helpers/normalize';
import { Fonts } from '../../theme/Fonts';
import { COLORS } from '../../theme/Colors';
const width = Dimensions.get('screen').width;
const ProductCard = ({product, containerStyle,index}) => {
  console.log(product,">>>>><<<<")
  return (
    // <View style={styles.card}>
    //   <View style={styles.imageContainer}>
    //     <Image
    //       source={{uri: product.item?.thumbnail}}
    //       style={styles.productImage}
    //     />
    //   </View>
    //   <TouchableOpacity style={styles.heartIcon}>
    //     <Image
    //       source={Icons.bottomtab_icon_active_search}
    //       style={styles.headIconImage}
    //     />
    //   </TouchableOpacity>
    //   <Text style={styles.productTitle}>{product.item?.title}</Text>
    //   <Text style={styles.productPrice}>${product.item?.price}</Text>
    //   <TouchableOpacity style={styles.cartIcon}>
    //     <Image source={Icons.shopping_cart} style={{height: 10, width: 10}} />
    //   </TouchableOpacity>
    // </View>
    <View style={[styles.productCardMainContainer, ]} key={index}>
         <TouchableOpacity style={styles.heartIcon}>
        <Image
          source={Icons.bottomtab_icon_active_search}
          style={styles.headIconImage}
        />
      </TouchableOpacity>
    <TouchableOpacity
      // onPress={() =>
      //   navigation?.push('ProductDetails', {id: item?.productId})
      // }
      
      >
      <View style={styles.productCardImageContainer}>
        <Image
          source={{uri:product?.image}}
          style={styles.productCardImageStyle}
        />
      </View>
    </TouchableOpacity>
    <Text style={styles.productCardNameText} numberOfLines={2}>
      {product?.title}
    </Text>
    {/* <Text style={styles.productCardPriceText}>
      Price: {item?.productPrice}{' '}
      {showActualPrice ? (
        <Text style={styles.productCardActualPrice}>
          {item?.productActualPrice}
        </Text>
      ) : null}
    </Text> */}
  </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: normalize(10),
    margin: normalize(5),
    position: 'relative',
    elevation: 3,
  },
  imageContainer: {
    height: '70%', 
    overflow: 'hidden',
    borderRadius: 10, 
   
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  heartIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: normalize(5),
    backgroundColor: '#000',
    borderRadius: 50,
  },
  cartIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#000',
    borderRadius: 50,
    padding: 5,
  },
  headIconImage: {
    height: normalize(20),
    width: normalize(20),
  },
  productCardMainContainer: {
    width: width / 2 - normalize(20),
    marginRight: normalize(10),
    marginTop: normalize(10),
  },
  productCardImageContainer: {
    borderWidth: normalize(1),
    borderColor: 'rgb(236,236,237)',
    borderRadius: normalize(6),
    alignItems: 'center',
    overflow: 'hidden',
  },
  productCardImageStyle: {
    height: width / 2 - normalize(4),
    width: width / 2 - normalize(24),
    resizeMode: 'contain',
  },
  productCardNameText: {
    marginTop: normalize(10),
    fontFamily: Fonts.RobotoRegular,
    fontSize: normalize(10),
    color: COLORS.dark,
    marginLeft: normalize(10),
  },
  productCardPriceText: {
    fontFamily: Fonts.RobotoRegular,
    color: '#212121',
    fontSize: normalize(9),
    marginTop: normalize(10),
    marginLeft: normalize(10),
  },
  productCardActualPrice: {
    color: '#B4B4B4',
    textDecorationLine: 'line-through',
  },
});

export default ProductCard;
