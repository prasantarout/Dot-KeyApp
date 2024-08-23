import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Icons} from '../../theme/Icon';
import normalize from '../../utils/helpers/normalize';
import {useDispatch, useSelector} from 'react-redux';
import { clearCart } from '../../redux/actions/cartActions';

const Payment = ({navigation}) => {
  // const cartItems = useSelector(state => state.cartReducer.cartItems);
  const dispatch=useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(clearCart());
      navigation.navigate('Home');
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Icons.purchase} style={styles.image} />
      <Text style={styles.message}>
      Please hold on. You will be redirected to the product screen shortly.
      </Text>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width:'100%',
    height:'50%',
    marginBottom: 20,
  },
  message: {
    fontSize:normalize(16),
    textAlign: 'center',
    color: '#333',
    padding:normalize(10)
  },
});
