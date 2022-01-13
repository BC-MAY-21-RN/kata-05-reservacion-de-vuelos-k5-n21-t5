import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBoxStyle from './CheckBoxStyle';
import CheckBoxComponent from '@react-native-community/checkbox';

export const CheckBox = ({value, setState, textComponent}) => {
  return (
    <>
      <CheckBoxComponent
        value={value}
        tintColors={{true: '#5B5CDD', false: 'gray'}}
        onValueChange={setState}
      />
      {textComponent}
    </>
  );
};
