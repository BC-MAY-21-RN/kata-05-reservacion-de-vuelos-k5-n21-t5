import React from 'react';
import { View, Text } from 'react-native';
import Style from './BookingStyles';
import { PassengerPicker, BookingLayout, NextButton } from '../../components/index';

export function Passenger(props) {
  return (
    <BookingLayout
      page="Select_date"
      showAirplane
      underline
      passengers={false}
    >
      <View style={Style.to_container}>
        <Text style={Style.to}>How many passengers?</Text>
      </View>

      <PassengerPicker />
      <NextButton nextPage="FinalDetails" caso="passengers" value={1} />
    </BookingLayout>
  );
}
