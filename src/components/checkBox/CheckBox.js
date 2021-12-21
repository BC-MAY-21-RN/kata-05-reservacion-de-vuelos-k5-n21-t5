import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {View, Text} from 'react-native';
import CheckBoxStyle from './CheckBoxStyle';

export const CheckB = () => {
  const [agreecheckBox, setAgreecheckBox] = useState(true);
  const [suscribecheckBox, setSuscribecheckBox] = useState(true);
  return (
    <View>
      <View style={CheckBoxStyle.checkContainer}>
        <CheckBox
          value={agreecheckBox}
          tintColors={{true: '#5B5CDD', false: 'gray'}}
          onValueChange={checkBox => setAgreecheckBox(checkBox)}
        />

        <Text style={CheckBoxStyle.text}>
          I agree to the <Text style={CheckBoxStyle.textUnderLine}> Terms</Text>{' '}
          and<Text style={CheckBoxStyle.textUnderLine}> Privacy Policy.</Text> *
        </Text>
      </View>

      <View style={CheckBoxStyle.checkContainer}>
        <CheckBox
          value={suscribecheckBox}
          tintColors={{true: '#5B5CDD', false: 'gray'}}
          onValueChange={checkBox => setSuscribecheckBox(checkBox)}
        />

        <Text style={CheckBoxStyle.text}>
          Suscribe for select products update
        </Text>
      </View>
    </View>
  );
};
