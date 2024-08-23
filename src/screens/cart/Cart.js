import React, {useState} from 'react';
import {StyleSheet, View, FlatList, Text, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CartProductCard from '../../components/common/CartProductCard';
import CustomHeader from '../../components/custom/CustomHeader';
import {Icons} from '../../theme/Icon';
import {
  removeFromCart,
  updateCartQuantity,
} from '../../redux/actions/cartActions';
import CartPriceDetails from '../../components/common/CartPriceDetails';
import BottomModal from '../../components/custom/CustomModal';
import {CustomButtonSolid} from '../../components/custom/CustomButton';

const Cart = () => {
  const cartItems = useSelector(state => state.cartReducer.cartItems);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleDelete = productId => {
    setSelectedProductId(productId);
    setModalVisible(true);
  };

  const confirmDelete = () => {
    if (selectedProductId) {
      dispatch(removeFromCart(selectedProductId));
      setModalVisible(false);
      setSelectedProductId(null);
    }
  };

  const cancelDelete = () => {
    setModalVisible(false);
    setSelectedProductId(null);
  };

  const handleIncrease = productId => {
    const item = cartItems.find(product => product.id === productId);
    if (item) {
      dispatch(updateCartQuantity(productId, item.quantity + 1));
    }
  };

  const handleDecrease = productId => {
    const item = cartItems.find(product => product.id === productId);
    if (item && item.quantity > 1) {
      dispatch(updateCartQuantity(productId, item.quantity - 1));
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const discountAmount = cartItems.reduce(
    (total, item) =>
      item.discountPercentage
        ? total + item.price * item.quantity * (item.discountPercentage / 100)
        : total,
    0,
  );
  const shippingAmount = 5;
  const payableAmount = totalAmount - discountAmount + shippingAmount;
  const totalProduct = cartItems.length;

  const renderItem = ({item}) => {
    return (
      <CartProductCard
        productImage={{uri: item.thumbnail}}
        productName={item.title}
        productPrice={`$${item.price * item.quantity}`}
        showProductPrice={true}
        productActualPrice={
          item.discountPercentage
            ? `$${(item.price * (1 - item.discountPercentage / 100)).toFixed(
                2,
              )}`
            : ''
        }
        showActualPrice={!!item.discountPercentage}
        productOrderId={item.sku}
        showOrderId={true}
        showDelete={true}
        showCounter={true}
        quantity={item.quantity}
        onDelete={() => handleDelete(item.id)}
        onIncrease={() => handleIncrease(item.id)}
        onDecrease={() => handleDecrease(item.id)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        title="Cart"
        onMenuPress={() => console.log('Menu pressed')}
        onProfilePress={() => console.log('Profile pressed')}
        menuIcon={Icons.GobackHeader}
      />
      {cartItems.length > 0 ? (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
          <CartPriceDetails
            totalProduct={totalProduct}
            totalAmount={`₹${totalAmount.toFixed(2)}`}
            discountAmount={`₹${discountAmount.toFixed(2)}`}
            shippingAmount={`₹${shippingAmount.toFixed(2)}`}
            payableAmount={`₹${payableAmount.toFixed(2)}`}
          />
        </ScrollView>
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>Your cart is empty.</Text>
        </View>
      )}
      <CustomButtonSolid
        label="Proceed to Checkout"
        onPress={() => {
          navigation.navigate('Checkout');
        }}
        containerStyle={{marginTop: normalize(0)}}
      />

      {/* Confirmation Modal */}
      <BottomModal
        modalVisible={modalVisible}
        onBackdropPress={cancelDelete}
        onDeleteConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f1f1f1',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  },
});

export default Cart;
