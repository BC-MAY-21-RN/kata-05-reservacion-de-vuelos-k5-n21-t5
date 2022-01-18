import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Style from './BookingStyles';
import {BookingLayout, NextButton} from '../../components/index';

export const FinalDetails = props => {
  return (
    <BookingLayout
      page={'Select_date'}
      showAirplane={true}
      underline={true}
      passengers={true}>
      <View style={Style.from_container}>
        <Text style={Style.to}>Your request was received.</Text>
      </View>

      <NextButton nextPage={'my_flights'} caso={'final'} value={1} />
    </BookingLayout>
  );
};
