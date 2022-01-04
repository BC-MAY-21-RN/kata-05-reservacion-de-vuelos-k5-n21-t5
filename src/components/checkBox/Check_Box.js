import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View} from 'react-native';

export const Check_Box = props => {
  const {value, onValueChange} = props;
  return (
    <View>
      <CheckBox
        value={value}
        tintColors={{true: '#5B5CDD', false: 'gray'}}
        onValueChange={onValueChange}
      />
    </View>
  );
};
