import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {login, register, my_flights, To} from '../screens/index.js';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="register"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="my_flights" component={my_flights} />
      <Stack.Screen name="To" component={To} />
    </Stack.Navigator>
  );
};

export default Navigator;
