import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonStyles} from './FormButtonStyle';

export const FormButton = ({
  buttonTitle,
  value,
  name,
  email,
  password,
  ...rest
}) => {
  const validacion =
    (name,
    email,
    password != '' &&
      value == true &&
      email.includes('@gmail.com', '@hotmail.com', '@outlook.com') &&
      password.length >= 8);

  function checkFields() {
    if (validacion) {
      return false;
    } else {
      return true;
    }
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
      {...rest}>
      <Text style={ButtonStyles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
