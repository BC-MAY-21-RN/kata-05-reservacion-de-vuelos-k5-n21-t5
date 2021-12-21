import React, { useState }from 'react'
import {FormInput} from './FormInput'
import Styles from '../../screens/style/common_style'

export const InputPassword = () => {
    const [password, setPassword] = useState('')
    
  return (
    <FormInput
    style={Styles.textInput}
    labelVal={password}
    secureTextEntry={true}
    onChangeText={(userpass) => setPassword(userpass)}
    autoFocus={false}
    autoCapitalize={'none'}
  />
  )
} 