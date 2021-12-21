import React, {useState} from 'react';
import {View} from 'react-native';
import {FormInput} from './FormInput';
import Styles from '../../screens/style/common_style';
import {StylesForm} from './inputStyle';

export const InputPassword = () => {
  const [password, setPassword] = useState('');

  return (
    <View style={StylesForm.passInput}>
      <FormInput
        style={Styles.textInput}
        labelVal={password}
        onChangeText={userpass => setPassword(userpass)}
        autoFocus={false}
        autoCapitalize={'none'}
        iconName={'eye-outline'}
      />
    </View>
  );
};
