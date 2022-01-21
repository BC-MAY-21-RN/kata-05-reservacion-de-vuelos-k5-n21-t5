import React from 'react';
import { View, Text } from 'react-native';
import Style from '../../screens/booking/BookingStyles';

export function Tittle({ TittleText }) {
  return (
    <View style={Style.from_container}>
      <Text style={Style.to}>{TittleText}</Text>
    </View>
  );
}
