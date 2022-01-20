import React from 'react';
import { View, Text } from 'react-native';
import Style from './BookingStyles';
import { BookingLayout, NextButton } from '../../components/index';

export function FinalDetails(props) {
  return (
    <BookingLayout
      page="Passenger"
      showAirplane
      underline
      passengers
    >
      <View style={Style.from_container}>
        <Text style={Style.to}>Your request was received.</Text>
      </View>

      <NextButton caso="final" value={1} />
    </BookingLayout>
  );
}
