import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Style from './BookingStyles';
import {PassengerPicker} from '../../components/index';
import {BookingLayout} from '../../components/Layout/BookingLayout';

export const Passenger = () => {
  const navigation = useNavigation();
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
      <TouchableOpacity
        style={Style.container_next}
        onPress={() => {
          navigation.navigate('my_flights');
        }}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </BookingLayout>
  );
};
