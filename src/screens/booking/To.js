import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Style from './BookingStyles';
import { BookingLayout, NextButton } from '../../components/index';

export function To() {
  const [textInputFrom, setTextInputFrom] = useState('');

  return (
    <BookingLayout page="From" showAirplane underline>
      <View style={Style.to_container}>
        <Text style={Style.to}>Where will you be flying to?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={(value) => {
            setTextInputFrom(value);
          }}
        />
      </View>

      <NextButton
        value={textInputFrom}
        nextPage="Select_date"
        caso="destino"
      />
    </BookingLayout>
  );
}
