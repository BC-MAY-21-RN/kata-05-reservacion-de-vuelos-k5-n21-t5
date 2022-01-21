import React from 'react';
import { PassengerPicker, BookingLayout, NextButton } from '../../components/index';
import { Tittle } from '../../components/BookingTittle/Tittle';

export function Passenger(props) {
  return (
    <BookingLayout
      page="Select_date"
      showAirplane
      underline
      passengers={false}
    >
      <Tittle TittleText="How many passengers?" />

      <PassengerPicker />
      <NextButton nextPage="FinalDetails" caso="passengers" value={1} />
    </BookingLayout>
  );
}
