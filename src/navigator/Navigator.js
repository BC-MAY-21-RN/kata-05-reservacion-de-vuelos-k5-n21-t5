import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  login,
  register,
  my_flights,
  To,
  From,
  Select_date,
  Passenger,
} from '../screens/index.js';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="my_flights"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="my_flights" component={my_flights} />
      <Stack.Screen name="To" component={To} />
      <Stack.Screen name="From" component={From} />
      <Stack.Screen name="Select_date" component={Select_date} />
      <Stack.Screen name="Passenger" component={Passenger} />
    </Stack.Navigator>
  );
};

export default Navigator;
