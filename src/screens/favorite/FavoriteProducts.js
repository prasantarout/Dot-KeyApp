import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {COLORS} from '../../theme/Colors';
import {
  toggleFavorite,
  updateQuantity,
} from '../../redux/actions/favoriteActions';
import CustomHeader from '../../components/custom/CustomHeader';
import {Icons} from '../../theme/Icon';
import AppStatusBar from '../../components/global/StatusBar';

const FavoriteProducts = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteReducer.favorites);

  const handleRemoveFavorite = product => {
    dispatch(toggleFavorite(product));
  };

  const handleIncreaseQuantity = product => {
    const newQuantity = (product.quantity || 1) + 1;
    dispatch(updateQuantity(product.id, newQuantity));
  };

  const handleDecreaseQuantity = product => {
    if ((product.quantity || 1) > 1) {
      const newQuantity = (product.quantity || 1) - 1;
      dispatch(updateQuantity(product.id, newQuantity));
    }
  };
  const renderWishlistItem = ({item: product}) => {
    // console.log(product, 'wishListds');
    return (
      <View style={styles.wishlistItem}>
        <Image source={{uri: product.thumbnail}} style={styles.productImage} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>
            ${(product.price * (product.quantity || 1)).toFixed(2)}
          </Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleDecreaseQuantity(product)}>
              <Text style={styles.quantityText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{product.quantity || 1}</Text>
            <TouchableOpacity
              style={styles.quantityButton}
              onPress={() => handleIncreaseQuantity(product)}>
              <Text style={styles.quantityText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => handleRemoveFavorite(product)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <AppStatusBar />
      <CustomHeader
        title="Wishlist"
        onMenuPress={() => console.log('Menu pressed')}
        onProfilePress={() => console.log('Profile pressed')}
        menuIcon={Icons.GobackHeader}
        // backgroundColor={'red'}
        // icons={Icons.userProfile}
      />
      {/* <View
        style={{
          borderBottomColor: COLORS.bgWhite,
          borderBottomWidth: 0.8,
          marginTop: 2,
        }}
      /> */}
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={renderWishlistItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={styles.emptyText}>
            Not yet products added to wishlist yet.
          </Text>
        </View>
      )}
    </View>
  );
};

export default FavoriteProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  wishlistItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.textColor,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.dark,
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  quantityButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  quantityText: {
    color: '#fff',
    fontSize: 16,
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'red',
  },
  deleteButton: {
    marginLeft: 'auto',
    backgroundColor: COLORS.textColor,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  deleteText: {
    color: '#fff',
    fontSize: 14,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#888',
    marginTop: 50,
  },
});
