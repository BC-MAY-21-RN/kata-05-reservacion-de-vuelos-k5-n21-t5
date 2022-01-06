import React, {useState} from 'react';
import {View} from 'react-native';
import {FormInput} from './FormInput';
import {StylesForm} from './inputStyle';

export const InputPassword = ({password, value, iconName,...rest}) => {
  return (
    <View style={StylesForm.passInput}>
      <FormInput
        style={StylesForm.textInput}
        labelVal={password}
        {...rest}
        secureTextEntry={true}
        autoFocus={false}
        autoCapitalize={'none'}
        iconName={iconName}
      />
    </View>
  );
};
