import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import normalize from '../utils/helpers/normalize';
import {Icons} from '../theme/Icon';

import Home from '../screens/home/Home';
import Cart from '../screens/cart/Cart';
import Checkout from '../screens/checkout/Checkout';
import ProductDetails from '../screens/productDetails/ProductDetails';
import FavoriteProducts from '../screens/favorite/FavoriteProducts';
import {COLORS} from '../theme/Colors';
import { createStackNavigator } from '@react-navigation/stack';
import Payment from '../screens/payment/Payment';
const Tab = createBottomTabNavigator();


const CartStack = createStackNavigator();
const HomeStack = createStackNavigator();

const CartStackScreen = () => {
  return (
    <CartStack.Navigator>
      <CartStack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }} 
      />
      <CartStack.Screen
        name="Checkout"
        component={Checkout}
        options={{ headerShown: false }} 
      />
      <CartStack.Screen
        name="Payment"
        component={Payment}
        options={{ headerShown: false }} 
      />
    </CartStack.Navigator>
  );
};



const TabIconList = [
  {
    name: 'Home',
    component: Home,
    activeIcon: Icons.bottomtab_icon_active_home,
    inactiveIcon: Icons.bottomtab_icon_inactive_home,
  },
  {
    name: 'ProductDetails',
    component: ProductDetails,
    activeIcon: Icons.bottomtab_icon_active_orders,
    inactiveIcon: Icons.bottomtab_icon_inactive_orders,
  },
  {
    name: 'Favorite',
    component: FavoriteProducts,
    activeIcon: Icons.bottomtab_icon_active_search,
    inactiveIcon: Icons.bottomtab_icon_inactive_search,
  },
  {
    name: 'Cart',
    component: CartStackScreen,
    activeIcon: Icons.Cart,
    inactiveIcon: Icons.Cart,
  },
];

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        keyboardHidesTabBar: false,
        unmountOnBlur: true,
        showIcon: true,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: styles.tabBarstyle,
      }}>
      {TabIconList.map((item, index) => {
        return (
          <Tab.Screen
            name={item?.name}
            component={item?.component}
            options={{
              tabBarIcon: ({focused}) => getTabBarIcon(focused, item),
            }}
            key={index}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const getTabBarIcon = (focused, item) => {
  return (
    <View
      style={
        focused ? styles.iconActiveContainer : styles.iconInactiveContainer
      }>
      <Image
        style={focused ? styles?.activeIcon : styles?.inactiveIcon}
        source={focused ? item?.activeIcon : item?.inactiveIcon}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet?.create({
  tabBarstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    // padding: normalize(15),
    backgroundColor: 'white',
    height: Platform.OS === 'ios' ? normalize(70) : normalize(60),
  },
  iconInactiveContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40),
  },
  iconActiveContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ededff',
    height: normalize(40),
    width: normalize(40),
    borderRadius: normalize(40),
  },
  activeIcon: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  inactiveIcon: {
    height: normalize(20),
    width: normalize(20),
    resizeMode: 'contain',
    tintColor: COLORS.bgWhite,
  },
});

export default BottomTab;
