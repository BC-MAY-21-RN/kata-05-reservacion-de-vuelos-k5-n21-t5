import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './BookingStyles';
import {BookingLayout, NextButton} from '../../components/index';
export const To = (props) => {
  const {
    route: {params: sumary},
  } = props;

  const [textInputFrom, setTextInputFrom] = useState('');

  
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

      <NextButton value={textInputFrom} nextPage={'Select_date'}/>    
      </BookingLayout>
  );
};
