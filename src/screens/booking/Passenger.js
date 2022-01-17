import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Style from './BookingStyles';
import {PassengerPicker} from '../../components/index';
import {BookingLayout, NextButton} from '../../components/index';

export const Passenger = () => {
  return (
    <BookingLayout
      page={'Select_date'}
      showAirplane={true}
      underline={true}
      passengers={true}>
      <View style={Style.to_container}>
        <Text style={Style.to}>How many passengers?</Text>
      </View>

      <PassengerPicker />
      <NextButton nextPage={'FinalDetails'} caso={'none'} value={1} />
    </BookingLayout>
  );
};
