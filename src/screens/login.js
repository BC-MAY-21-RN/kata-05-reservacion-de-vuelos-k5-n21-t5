import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { FormInput, FormButton } from '../components/index'
import Styles from '../screens/style/common_style'



export const login = (props) => {
  const {navigation} = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (


    <SafeAreaView style={Styles.container}>
      <View style={Styles.Card_Container}>
        <Text style={Styles.title}>Log In</Text>

        <View style={Styles.containerForm}>
          <Text style={Styles.subtitle}>Email</Text>

          <FormInput
            style={Styles.textInput}
            labelVal={email}
            secureTextEntry={false}
            onChangeText={(useremail) => setEmail(useremail)}
            placeholderAdj={'Example@Example.com'}
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

        <FormButton
          buttonTitle="Log In"
          onPress={() => login(email, password)}
        />

       

        <View style={Styles.login}>
          <Text style={Styles.textLogin}>Don't have an account? </Text>

          <TouchableOpacity onPress={() => navigation.navigate('register')}>
            <Text style={Styles.goToSignIn}> Create here </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

  )
}