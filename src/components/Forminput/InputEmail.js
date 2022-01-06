import React from 'react';
import {FormInput} from './FormInput';
import {StylesForm} from './inputStyle';

export const InputEmail = ({email, ...rest}) => {
  
  return (
    <FormInput
    style={StylesForm.textInput}
      labelVal={email}
      secureTextEntry={false}
      keyboardType={'default'}
      {...rest}
      placeholderAdj={'Example@Example.com'}
      autoCapitalize={'none'}
    />
  );
};
