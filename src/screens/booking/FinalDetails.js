import React from 'react';
import { BookingLayout, NextButton } from '../../components/index';
import { Tittle } from '../../components/BookingTittle/Tittle';

export function FinalDetails(props) {
  return (
    <BookingLayout
      page="Passenger"
      showAirplane
      underline
      passengers
    >
      <Tittle TittleText="Your request was received." />
      <NextButton caso="final" value={1} />
    </BookingLayout>
  );
}
