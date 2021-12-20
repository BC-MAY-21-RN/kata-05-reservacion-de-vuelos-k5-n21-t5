import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { FormInput, FormButton, CheckB, GoogleButton, FormPassword, FormEmail} from '../components/index'
import Styles from '../screens/style/common_style'

export const register = (props) => {
    const {navigation} = props
    const [name, setName] = useState('')
    
    
    return (

        <SafeAreaView style={Styles.container}>
        <View style={Styles.Card_Container}>
          <Text style={Styles.title}>Sign Up</Text>
  
          <View style={Styles.containerForm}>
            <Text style={Styles.subtitle}>First Name</Text>
            <FormInput
              style={Styles.textInput}
              labelVal={name}
              secureTextEntry={false} 
              onChangeText={(username) => setName(username)}
              placeholderAdj={'John Smith'}
              autoCapitalize={'words'}
            />
            <Text style={Styles.subtitle}>Email</Text>

            <FormEmail />
  
            <Text style={Styles.subtitle}>Password</Text>
  
          <FormPassword />
            <Text style={Styles.paswordText}>Use 8 or more characters with a mix of letters,numbers and symbols</Text>
          </View>
          <View>
              <CheckB />
           </View>

          <FormButton
            buttonTitle="Sign Up"
            onPress={() => register(name, email, password)}
          />

            <Text style={Styles.or}>Or</Text>
          
          <GoogleButton 
            buttonTitle={"Sign Up with Google"}
            />
          

          <View style={Styles.login}>
          <Text style={Styles.textLogin}>Already have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={Styles.goToSignIn}> Log In </Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    )
}