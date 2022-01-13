import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import Style from './BookingStyles';
import {BookingLayout} from '../../components/Layout/BookingLayout';

export const Select_date = () => {
  const navigation = useNavigation();

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
      <CalendarPicker />

      <TouchableOpacity
        style={Style.container_next}
        onPress={() => {
          navigation.navigate('Passenger');
        }}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </BookingLayout>
  );
};
