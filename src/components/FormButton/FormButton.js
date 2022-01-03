import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ButtonStyles} from './FormButtonStyle';

export const FormButton = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={ButtonStyles.buttonContainer} {...rest}>
      <Text style={ButtonStyles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};
