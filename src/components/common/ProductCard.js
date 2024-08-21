// src/components/ProductCard.js

import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icons} from '../../theme/Icon';
import normalize from '../../utils/helpers/normalize';

const ProductCard = ({product}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: product.thumbnail}} style={styles.productImage} />
      <TouchableOpacity style={styles.heartIcon}>
        <Image
          source={Icons.bottomtab_icon_active_search}
          style={styles.headIconImage}
        />
      </TouchableOpacity>
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
      <TouchableOpacity style={styles.cartIcon}>
        <Image source={Icons.shopping_cart} style={{height: 10, width: 10}} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: normalize(46),
    margin: normalize(5),
    position: 'relative',
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
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
  headIconImage: {height: normalize(20), width: normalize(20)},
});
