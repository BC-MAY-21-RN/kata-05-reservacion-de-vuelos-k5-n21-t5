import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { FormButton, LayoutRegister, FormInput } from '../components/index';
import Common_Styles from '../styles/CommonStyles';
import { Store } from '../Redux/Store';
import { setEmail, setPassword } from '../Redux/Actions';
import { loadUser } from '../FireBase/loadUser';

export const login = (props) => {
  const [email, setStateEmail] = useState('');
  const [password, setStatePassword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('my_flights');
      }
    });

    return unsubscribe;
  }, []);

  return (
    <LayoutRegister isLoginScreen navigation={props.navigation}>
      <View style={Common_Styles.container_Form}>
        <Text style={Common_Styles.subtitle}>Email</Text>

        <FormInput
          autoCapitalize="none"
          placeholderAdj="user@example.com"
          onChangeText={(email) => {
            setStateEmail(email), Store.dispatch(setEmail(email));
          }}
        />
        <Text style={Common_Styles.subtitle}>Password</Text>

        <FormInput
          secureTextEntry
          onChangeText={(password) => {
            setStatePassword(password), Store.dispatch(setPassword(password))
          }}
        />
      </View>

      <FormButton
        buttonTitle="Log In"
        onPress={loadUser}
        name="name"
        value
      />
    </LayoutRegister>
  );
};
