import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Style from '../../screens/booking/BookingStyles';
import {useNavigation} from '@react-navigation/native';

export const NextButton = ({nextPage, value}) => {
  const navigation = useNavigation();
  const checkTextInput = () => {
    if (!value.toString().trim()) {
      alert('Please fill all the required fields');
      return;
    }
    navigation.navigate(nextPage);
  };

  return (
    <TouchableOpacity
      style={Style.container_next}
      onPress={() => checkTextInput(value)}>
      <Text style={[Style.text_next, {backgroundColor: value == '' ? 'gray' : '#5c6df8' }]}>Next</Text>
    </TouchableOpacity>
  );
};
