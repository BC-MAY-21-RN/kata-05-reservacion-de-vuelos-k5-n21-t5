import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {StylesForm} from './inputStyle';

export const FormInput = ({
  labelVal,
  placeholderAdj,
  secureTextEntry,
  autoFocus,
  onChangeText,
  autoCapitalize,
  iconName,
  ...rest
}) => {
  return (
    <View style={StylesForm.Container}>
      <View style={StylesForm.inputContainer}>
        <TextInput //mail
          style={StylesForm.textInput}
          {...rest}
          value={labelVal}
          placeholder={placeholderAdj}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholderTextColor="black"
          autoCapitalize={autoCapitalize}
        />
        <TouchableOpacity>
          <IonIcon style={StylesForm.iconInput} name={iconName} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
