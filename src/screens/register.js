import React, {useState, useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {
  FormButton,
  CheckB,
  InputPassword,
  InputEmail,
  Footer,
  InputName,
} from '../components/index';
import Common_Styles from '../styles/CommonStyles';
import style_index from './style/style_index';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '343591224161-hgjsesh1nlnb105dtqju613v97agm2id.apps.googleusercontent.com',
});

export const register = (props) => {
  console.log(props)

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    async function onGoogleButtonPress() {
      // Get the users ID token
      const { idToken } = await GoogleSignin.signIn();
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    }

  function registerUser ()  {
    auth()
  .createUserWithEmailAndPassword(email, password)
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
        <Text style={Common_Styles.title}>Sign Up</Text>

        <View style={Common_Styles.container_Form}>
          <Text style={Common_Styles.subtitle}>First Name</Text>

          <InputName onChangeText={(name) => setName(name)}/>

          <Text style={Common_Styles.subtitle}>Email</Text>

          <InputEmail onChangeText={(email) => setEmail(email)}/>

          <Text style={Common_Styles.subtitle}>Password</Text>

          <InputPassword onChangeText={(password) => setPassword(password)} iconName={'eye-outline'}/>

          <Text style={Common_Styles.paswordText}>
            Use 8 or more characters with a mix of letters, numbers and symbols
          </Text>
        </View>

        <View>
          <CheckB />
        </View>

        <FormButton
          buttonTitle="Sign Up"
          onPress={registerUser}
        />

        <Text style={style_index.or}>Or</Text>
        
        <GoogleSigninButton onPress={() => onGoogleButtonPress().then(() => navigation.replace('my_flights'))}/>
        {/* <FormButton
          buttonTitle="Sign out"
          onPress={signOut}
        /> */}
        <Footer
          name={'LogIn'}
          text={'Already have an account?'}
          direction={'login'}
          page={' Log In'}
          navigation={props.navigation}
          key={'Footer-1'}
        />
      </View>
    </SafeAreaView>
  );
}

