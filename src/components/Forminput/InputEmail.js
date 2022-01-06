import React from 'react';
import {FormInput} from './FormInput';
import {StylesForm} from './inputStyle';

export const InputEmail = ({email, ...rest}) => {
  return (
    <FormInput
    style={StylesForm.textInput}
      labelVal={email}
      secureTextEntry={false}
      {...rest}
      placeholderAdj={'Example@Example.com'}
      autoCapitalize={'none'}
    />
  );
};
