import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import Style from './BookingStyles';
import {BookingLayout, NextButton} from '../../components/index';

export const Select_date = () => {
  const [date, setDate] = useState('');

  return (
    <BookingLayout
      page={'To'}
      showOrigin={true}
      showDestiny={true}
      showDate={false}
      underline={true}>
      <View style={Style.to_container}>
        <Text style={Style.to}>Select Date</Text>
      </View>
      <CalendarPicker onDateChange={(value) => setDate (value)}/>
      
      <NextButton nextPage={'Passenger'} value={date} />
    </BookingLayout>
  );
};
