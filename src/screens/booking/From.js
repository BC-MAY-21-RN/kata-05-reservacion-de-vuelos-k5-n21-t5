import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Style from './BookingStyles';
import { BookingLayout, NextButton } from '../../components/index';

export function From(props) {
  const [textInputFrom, setTextInputFrom] = useState('');

  return (
    <BookingLayout page="my_flights" showAirplane={false} underline={false}>
      <View style={Style.from_container}>
        <Text style={Style.to}>Where are you now?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={(value) => setTextInputFrom(value)}
        />
      </View>

      <NextButton value={textInputFrom} nextPage="To" caso="origen" />
    </BookingLayout>
  );
}
