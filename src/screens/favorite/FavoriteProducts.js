import React, {useState} from 'react';
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
import normalize from '../../utils/helpers/normalize';
import BottomModal from '../../components/custom/CustomModal';
import {addToCart} from '../../redux/actions/cartActions';
import showErrorAlert from '../../utils/helpers/Toast';

const FavoriteProducts = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favoriteReducer.favorites);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRemoveFavorite = productId => {
    setSelectedProductId(productId);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedProductId) {
      dispatch(toggleFavorite(selectedProductId));
      setModalVisible(false);
      setSelectedProductId(null);
    }
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setSelectedProductId(null);
  };

  const handleAddToCart = product => {
    dispatch(addToCart(product));
    dispatch(toggleFavorite(product));
    showErrorAlert(`${product.title} has been added to your cart.`);
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
    return (
      <View style={styles.wishlistItem}>
        <Image
          source={
            product.thumbnail !== null &&
            product.thumbnail !== undefined &&
            product.thumbnail !== ''
              ? {uri: product.thumbnail}
              : ''
          }
          style={styles.productImage}
        />
        <View style={styles.productDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.productTitle}>{product.title}</Text>
            <TouchableOpacity
              style={styles.deleteIcon}
              onPress={() => handleRemoveFavorite(product)}>
              <Image
                source={Icons.delete}
                style={styles.productCardDeleteIcon}
              />
            </TouchableOpacity>
          </View>
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
              onPress={() => handleAddToCart(product)}>
              <Text style={styles.deleteText}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <AppStatusBar /> */}
      <CustomHeader
        title="Wishlist"
        onMenuPress={() => console.log('Menu pressed')}
        onProfilePress={() => console.log('Profile pressed')}
        menuIcon={Icons.GobackHeader}
      />

      {favorites.length === 0 ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text style={styles.emptyText}>
            Not yet products added to wishlist yet.
          </Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          renderItem={renderWishlistItem}
          keyExtractor={item => (item?.id ? item.id.toString() : 'default-key')}
        />
      )}
      <BottomModal
        modalVisible={modalVisible}
        onBackdropPress={cancelDelete}
        onDeleteConfirm={confirmDelete}
        onCancel={cancelDelete}
        isWishList={true}
      />
    </View>
  );
};

export default FavoriteProducts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  wishlistItem: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginBottom: 10,
    padding: normalize(10),
    elevation: 1,
  },
  productImage: {
    width: normalize(60),
    height: normalize(80),
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
    marginTop: normalize(6),
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
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingVertical: normalize(5),
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
  productCardDeleteIcon: {
    height: normalize(12),
    width: normalize(12),
    resizeMode: 'contain',
    tintColor: COLORS.white,
    // marginTop: normalize(6),
  },
  deleteIcon: {
    height: normalize(30),
    width: normalize(30),
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(50),
    // marginTop:normalize(5)
  },
});
