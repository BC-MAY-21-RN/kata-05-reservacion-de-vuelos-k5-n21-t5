import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Style from '../../screens/booking/BookingStyles';
import {useNavigation} from '@react-navigation/native';

export const NextButton = ({nextPage, value}) => {
  const navigation = useNavigation();

  const checkTextInput = () => {
    if (!value.trim()) {
      alert('Please Enter a City');
      return;
    }
    navigation.navigate(nextPage);
  };

  return (
    <TouchableOpacity
      style={Style.container_next}
      onPress={() => checkTextInput(value)}>
      <Text style={Style.text_next}>Next</Text>
    </TouchableOpacity>
  );
};
