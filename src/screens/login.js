import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { FormPassword, FormButton, FormEmail } from '../components/index'
import Styles from '../screens/style/common_style'



export const login = (props) => {
  const {navigation} = props
  return (


    <SafeAreaView style={Styles.container}>
      <View style={Styles.Card_Container}>
        <Text style={Styles.title}>Log In</Text>

        <View style={Styles.containerForm}>
          <Text style={Styles.subtitle}>Email</Text>

          <FormEmail />

          <Text style={Styles.subtitle}>Password</Text>

          <FormPassword  />
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