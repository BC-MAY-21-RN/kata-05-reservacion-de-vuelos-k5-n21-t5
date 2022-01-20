import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ButtonStyles } from './FormButtonStyle';
import { Store } from '../../Redux/Store';

export function FormButton({ buttonTitle, value, ...rest }) {
  const validacion = (Store.getState().userData.name,
  Store.getState().userData.email,
  Store.getState().userData.password != ''
      && value == true
      && Store.getState().userData.email.includes('@')
      && Store.getState().userData.email.includes('.com')
      && Store.getState().userData.password.length >= 8);

  function checkFields() {
    if (validacion) {
      return false;
    }
    return true;
  }
  return (
    <TouchableOpacity
      disabled={checkFields()}
      style={[
        ButtonStyles.buttonContainer,
        {
          backgroundColor: validacion ? '#5c6df8' : 'gray',
        },
      ]}
      {...rest}
    >
      <Text style={ButtonStyles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}
