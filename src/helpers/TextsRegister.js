import React from 'react';
import { Text } from 'react-native';
import CheckBoxStyle from '../components/checkBox/CheckBoxStyle';

export const textPolicy = (
  <Text style={CheckBoxStyle.text}>
    * I agree to the
    {' '}
    <Text style={CheckBoxStyle.textUnderLine}> Terms</Text>
    {' '}
    and
    <Text style={CheckBoxStyle.textUnderLine}> Privacy Policy.</Text>
  </Text>
);
export const textSubscribe = (
  <Text style={CheckBoxStyle.text}>Suscribe for select products update</Text>
);
