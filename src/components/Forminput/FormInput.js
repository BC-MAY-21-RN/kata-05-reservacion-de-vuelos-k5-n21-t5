import React from 'react'
import { TextInput, View } from 'react-native'
/* import Icon from 'react-native-vector-icons'
 */
import { StylesForm } from './inputStyle'

export const FormInput = ({
  labelVal,
  placeholderAdj,
  secureTextEntry,
  autoFocus,
  onChangeText,
  autoCapitalize,
  ...result
}) => {
  return (
    <View style={StylesForm.Container}>
      <View style={StylesForm.inputContainer}>
        <TextInput //mail 
          style={StylesForm.textInput}
          {...result}
          value={labelVal}
          placeholder={placeholderAdj}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          placeholderTextColor='black'
          autoCapitalize={autoCapitalize}
        />
      </View>
    </View>
  )
}



