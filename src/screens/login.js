import React, {useState, useEffect}  from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import {
  InputPassword,
  FormButton,
  InputEmail,
  Footer,
} from '../components/index';
import Common_Styles from '../styles/CommonStyles';
export const login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  console.log('correo '+ email + ' contraseña '+ password)
  
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        navigation.replace('my_flights');
      }
    })

    return unsubscribe
  }, [])
        
  function loadUser ()  {
    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }

  return (
    <SafeAreaView style={Common_Styles.center_container}>
      <View style={Common_Styles.Card_Container}>
        <Text style={Common_Styles.title}>Log In</Text>

        <View style={Common_Styles.container_Form}>
          <Text style={Common_Styles.subtitle}>Email</Text>

          <InputEmail onChangeText={(email) => setEmail(email)} />

          <Text style={Common_Styles.subtitle}>Password</Text>

          <InputPassword
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        
        <FormButton
          buttonTitle="Log In"
          onPress={loadUser}
        />

        <Footer
          page={'Create here'}
          direction={'register'}
          text={"Don't have an a account?"}
        />
      </View>
    </SafeAreaView>
  );
};
