import React from 'react';
import Style from '../../screens/booking/BookingStyles';
import {View, Text} from 'react-native';

export const Tittle = ({TittleText}) => {
  return (
    <View style={Style.from_container}>
      <Text style={Style.to}>{TittleText}</Text>
    </View>
  );
};
