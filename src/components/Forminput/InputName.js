import React, {useState} from 'react';
import {View} from 'react-native';
import {FormInput} from './FormInput';
import Styles from '../../screens/style/common_style';

export const InputName = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <FormInput
        style={Styles.textInput}
        labelVal={name}
        secureTextEntry={false}
        onChangeText={username => setName(username)}
        placeholderAdj={'John Smith'}
        autoCapitalize={'words'}
      />
    </View>
  );
};
