import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './BookingStyles';
import {BookingLayout, NextButton} from '../../components/index';

export const From = props => {
  const [textInputFrom, setTextInputFrom] = useState('');
  var sumary = {
    capitalOrigin: '',
    countryOrigin: '',
    capitalDestiny: '',
    countryDestiny: '',
    date: {
      day: 0,
      month: 0,
      year: 0,
    },
    passengers: 0,
  };

  return (
    <BookingLayout
      page={'my_flights'}
      showOrigin={false}
      showDestiny={false}
      showDate={false}
      underline={false}>
      <View style={Style.from_container}>
        <Text style={Style.to}>Where are you now?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={value => setTextInputFrom(value)}
        />
      </View>

      <NextButton value={textInputFrom} nextPage={'To'} />
    </BookingLayout>
  );
};
