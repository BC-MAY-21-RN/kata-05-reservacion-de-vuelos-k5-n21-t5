import React, {useState, useEffect} from 'react';
import {Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {FormButton, LayoutRegister, FormInput} from '../components/index';
import Common_Styles from '../styles/CommonStyles';

export const login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  console.log('correo ' + email + ' contraseña ' + password);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('my_flights');
      }
    });

    return unsubscribe;
  }, []);

  function loadUser() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Iniciaste sesión correctamente');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Email ya está en uso');
        }
        if (error.code === 'auth/invalid-email') {
          Alert.alert('Email Invalido, revisalo nuevamente');
        }
        if (error.code === 'auth/user-not-found') {
          Alert.alert('El Email que ingresaste no está registrado');
        }

        console.error(error);
      });
  }

  return (
    <LayoutRegister isLoginScreen={true} navigation={props.navigation}>
      <View style={Common_Styles.container_Form}>
        <Text style={Common_Styles.subtitle}>Email</Text>

        <FormInput
          autoCapitalize={'none'}
          placeholderAdj={'user@example.com'}
          onChangeText={email => setEmail(email)}
        />
        <Text style={Common_Styles.subtitle}>Password</Text>

        <FormInput
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <FormButton buttonTitle="Log In" onPress={loadUser} />
    </LayoutRegister>
  );
};
