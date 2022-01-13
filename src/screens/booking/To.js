import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './BookingStyles';
import {useNavigation} from '@react-navigation/native';
import {BookingLayout} from '../../components/Layout/BookingLayout';
export const To = () => {
  const navigation = useNavigation();
  const [textInputFrom, setTextInputFrom] = useState('');
  let sumary = {
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
  const checkTextInput = () => {
    if (!textInputFrom.trim()) {
      alert('Please Enter a City');
      return;
    }
    navigation.navigate('Select_date', sumary);
  };
  return (
    <BookingLayout
      page={'From'}
      showOrigin={true}
      showDestiny={false}
      showDate={false}
      underline={true}>
      <View style={Style.to_container}>
        <Text style={Style.to}>Where will you be flying to?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={value => setTextInputFrom(value)}
        />
      </View>

      <TouchableOpacity style={Style.container_next} onPress={checkTextInput}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </BookingLayout>
  );
};
