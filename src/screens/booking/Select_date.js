import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Style from './BookingStyles';
import { BookingLayout, NextButton } from '../../components/index';

export function Select_date(props) {
  const minDate = new Date(); // Today
  const [daate, setDaate] = useState('');

  return (
    <BookingLayout page="To" showAirplane underline>
      <View style={Style.to_container}>
        <Text style={Style.to}>Select Date</Text>
      </View>
      <CalendarPicker
        onDateChange={(value) => setDaate(value)}
        minDate={minDate}
      />

      <NextButton
        nextPage="Passenger"
        value={daate.toString().slice(0, 15)}
        caso="fecha"
      />
    </BookingLayout>
  );
}
