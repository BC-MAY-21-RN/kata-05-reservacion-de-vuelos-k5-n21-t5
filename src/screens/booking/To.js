import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import Style from './BookingStyles';
import {BookingLayout, NextButton} from '../../components/index';
import {useSelector, useDispatch} from 'react-redux';
import {setDestiny, setOrigin} from '../../Redux/Actions';

export const To = props => {
  const dispatch = useDispatch();
  const {origin} = useSelector(state => state.userReducer);
  const [textInputFrom, setTextInputFrom] = useState('');

  return (
    <BookingLayout page={'From'} showAirplane={true} underline={true}>
      <View style={Style.to_container}>
        <Text style={Style.to}>Where will you be flying to?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={value => {
            dispatch(setDestiny(value)), setTextInputFrom(value);
          }}
        />
      </View>

      <NextButton
        value={textInputFrom}
        nextPage={'Select_date'}
        caso={'destino'}
      />
    </BookingLayout>
  );
};
