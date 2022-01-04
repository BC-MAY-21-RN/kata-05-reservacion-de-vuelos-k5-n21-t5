import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBoxStyle from './CheckBoxStyle';
import {Check_Box} from '../index';

export const CheckB = () => {
  const [agreecheckBox, setAgreecheckBox] = useState(false);
  const [suscribecheckBox, setSuscribecheckBox] = useState(false);

  return (
    <View>
      <View style={CheckBoxStyle.checkContainer}>
        <Check_Box
          value={agreecheckBox}
          onValueChange={state => {
            setAgreecheckBox(state);
          }}
        />

        <Text style={CheckBoxStyle.text}>
          I agree to the <Text style={CheckBoxStyle.textUnderLine}> Terms</Text>{' '}
          and<Text style={CheckBoxStyle.textUnderLine}> Privacy Policy.</Text> *
        </Text>
      </View>

      <View style={CheckBoxStyle.checkContainer}>
        <Check_Box
          value={suscribecheckBox}
          onValueChange={newValue => {
            setSuscribecheckBox(newValue);
          }}
        />

        <Text style={CheckBoxStyle.text}>
          Suscribe for select products update
        </Text>
      </View>
    </View>
  );
};
