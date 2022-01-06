import React, {useState} from 'react';
import {View} from 'react-native';
import {FormInput} from './FormInput';
import {StylesForm} from './inputStyle';

export const InputName = (name, ...rest) => {

  return (
    <View>
      <FormInput
        style={StylesForm.textInput}
        labelVal={name}
        {...rest}        
        secureTextEntry={false}
        placeholderAdj={'John Smith'}
        autoCapitalize={'words'}
      />
    </View>
  );
};
