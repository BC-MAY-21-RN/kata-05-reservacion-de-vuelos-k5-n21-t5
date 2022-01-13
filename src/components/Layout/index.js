import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Footer,
} from '../index';
import Common_Styles from '../../styles/CommonStyles';

const loginObject = {
  name: 'Register',
  text: 'Dont have an account?',
  direction: 'register',
  page: ' Create Here',
  key: 'Footer-2',
};
const singUpObject = {
  name: 'LogIn',
  text: 'Already have an account?',
  direction: 'login',
  page: ' Log In',
  key: 'Footer-1',
};
export const LayoutRegister = ({isLoginScreen, navigation, children}) => (
  <SafeAreaView style={Common_Styles.center_container}>
    <View style={Common_Styles.Card_Container}>
      <Text style={Common_Styles.title}>
        {isLoginScreen ? 'Login' : 'Sign Up'}
      </Text>
      {children}
      <Footer
        {...(isLoginScreen ? loginObject : singUpObject)}
        navigation={navigation}
      />
    </View>
  </SafeAreaView>
);
