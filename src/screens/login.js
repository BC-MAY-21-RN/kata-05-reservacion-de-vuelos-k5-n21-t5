import React, {useState} from "react";
import { Text, View, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {FormInput} from '../components/index'
import Styles from '../screens/style/common_style'

export const login = (props) => {
  console.log(props)
  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')

console.log(props)
    return (

    <SafeAreaView style={Styles.container}>
      <View style={Styles.containerForm}>
        <Text style={Styles.title}>Log In</Text>
        

      
        <Text style={Styles.subtitle}>Email</Text>
        <FormInput 
          
          labelVal={email}
          secureTextEntry={false}
          onChangeText={(useremail) => setEmail(useremail)}
          placeholderAdj={'Example@Example.com'}
          autoFocus={true}
          autoCapitalize={'none'}
        />
      
        <Text style={Styles.subtitle}>Password</Text>
        <FormInput 
          style={Styles.textInput}
          labelVal={password}
          secureTextEntry={true}
          onChangeText={(userpass) => setPassword(userpass)}
          autoFocus={false}
          autoCapitalize={'none'}
        />
      
      </View>
      <Text>Use 8 or mor characters with a mix of of letters,numbers ans symbols.</Text> 
        
      <Button title="Sing Up"/>
      

    </SafeAreaView> 
  )
}