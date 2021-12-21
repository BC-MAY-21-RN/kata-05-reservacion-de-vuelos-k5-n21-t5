import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { FormInput, FormButton, CheckB, GoogleButton, InputPassword, InputEmail, Footer} from '../components/index'
import Styles from '../screens/style/common_style'

export const register = (props) => {
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

            <InputEmail />
  
            <Text style={Styles.subtitle}>Password</Text>
  
          <InputPassword />
            <Text style={Styles.paswordText}>Use 8 or more characters with a mix of letters, numbers and symbols</Text>
          </View>
          <View>
              <CheckB />
           </View>

          <FormButton
            buttonTitle="Sign Up"
            onPress={() => register(name, email, password)}
          />

            <Text style={Styles.or}>Or</Text>
          
          <GoogleButton buttonTitle={"Sign Up with Google"} />

          <Footer text={'Already have an account?'} direction={'login'} page={' Log In'} navigation={props.navigation} key={`Footer-1`}/>
          


        </View>
      </SafeAreaView>
    )
}