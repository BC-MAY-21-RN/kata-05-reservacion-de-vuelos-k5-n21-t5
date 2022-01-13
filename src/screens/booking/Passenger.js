import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Style from './BookingStyles';
import {PassengerPicker} from '../../components/index';
import {BookingLayout, NextButton} from '../../components/index';

export const Passenger = () => {
  return (
    <BookingLayout
      page={'Select_date'}
      showDate={true}
      showDestiny={true}
      showOrigin={true}
      underline={true}>
      <View style={Style.to_container}>
        <Text style={Style.to}>How many passengers?</Text>
      </View>

      <PassengerPicker />
      <NextButton nextPage={'my_flights'} value={'1'}/>
    </BookingLayout>
  );
};
