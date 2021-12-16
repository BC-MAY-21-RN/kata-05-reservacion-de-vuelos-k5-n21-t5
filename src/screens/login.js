import React , { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Styles from '../screens/style/common_style'

export const login = (props) => {

    return (

    <View style={Styles.container}>
      
      <Text style={Styles.title}>Log In</Text>
      
      <Text>Email</Text>
      <TextInput ></TextInput>
      
      <Text>Password</Text>
      <TextInput></TextInput>
      <Text>Use 8 or mor characters with a mix of of letters,numbers ans symbols.</Text> 

      
        
      <Button title="Sing Up"/>

    </View> 
  )
}