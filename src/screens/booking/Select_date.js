import React, { useState } from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import { BookingLayout, NextButton } from '../../components/index';
import { Tittle } from '../../components/BookingTittle/Tittle';

export function Select_date(props) {
  const minDate = new Date(); // Today
  const [daate, setDaate] = useState('');

  return (
    <BookingLayout page="To" showAirplane underline>
      <Tittle TittleText="Select date" />
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
