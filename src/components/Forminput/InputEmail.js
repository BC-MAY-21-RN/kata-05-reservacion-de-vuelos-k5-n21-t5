import React, {useState} from 'react';
import {FormInput} from './FormInput';
import Styles from '../../screens/style/common_style';

export const InputEmail = () => {
  const [email, setEmail] = useState('');
  return (
    <FormInput
      style={Styles.textInput}
      labelVal={email}
      secureTextEntry={false}
      onChangeText={useremail => setEmail(useremail)}
      placeholderAdj={'Example@Example.com'}
      autoCapitalize={'none'}
    />
  );
};
