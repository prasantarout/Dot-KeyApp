import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import BottomTab from './BottomTab';
import Checkout from '../screens/checkout/Checkout';
import ProductDetails from '../screens/productDetails/ProductDetails';

const Stack = createStackNavigator();

export default function StackNav() {
  const Screens = {
    BottomTab: BottomTab,
    ProductDetails,
    Checkout,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {Object.entries({
          ...Screens,
        }).map(([name, component]) => {
          return <Stack.Screen name={name} component={component} key={name} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
