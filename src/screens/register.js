import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  FormButton,
  CheckBox,
  LayoutRegister,
  FormInput,
} from '../components/index';
import Common_Styles from '../styles/CommonStyles';
import style_index from './style/style_index';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import CheckBoxStyle from '../components/checkBox/CheckBoxStyle';

GoogleSignin.configure({
  webClientId:
    '343591224161-hgjsesh1nlnb105dtqju613v97agm2id.apps.googleusercontent.com',
});

export const register = props => {
  console.log(props);

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreecheckBox, setAgreecheckBox] = useState(false);
  const [suscribecheckBox, setSuscribecheckBox] = useState(false);

  async function onGoogleButtonPress() {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  }

  function registerUser() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Email ya esta en uso');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('El email ya esta en uso');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('El email es invalido');
        }

        console.error(error);
      });
  }

  const textPolicy = (
    <Text style={CheckBoxStyle.text}>
      * I agree to the <Text style={CheckBoxStyle.textUnderLine}> Terms</Text>{' '}
      and
      <Text style={CheckBoxStyle.textUnderLine}> Privacy Policy.</Text>
    </Text>
  );
  const textSubscribe = (
    <Text style={CheckBoxStyle.text}>Suscribe for select products update</Text>
  );

  return (
    <LayoutRegister isLoginScreen={false} navigation={props.navigation}>
      <View style={Common_Styles.container_Form}>
        <Text style={Common_Styles.subtitle}>First Name</Text>

        <FormInput
          autoCapitalize={'words'}
          placeholderAdj={'Jonh Smith'}
          onChangeText={name => setName(name)}
        />

        <Text style={Common_Styles.subtitle}>Email</Text>

        <FormInput
          autoCapitalize={'none'}
          placeholderAdj={'user@example.com'}
          onChangeText={email => setEmail(email)}
        />

        <Text style={Common_Styles.subtitle}>Password</Text>

        <FormInput
          autoCapitalize={'none'}
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />

        <Text style={Common_Styles.passwordText}>
          Use 8 or more characters with a mix of letters, numbers and symbols
        </Text>
      </View>

      <View style={CheckBoxStyle.checkContainer}>
        <CheckBox
          value={agreecheckBox}
          setState={setAgreecheckBox}
          textComponent={textPolicy}
        />
      </View>
      <View style={CheckBoxStyle.checkContainer}>
        <CheckBox
          value={suscribecheckBox}
          setState={setSuscribecheckBox}
          textComponent={textSubscribe}
        />
      </View>

      <FormButton buttonTitle="Sign Up" onPress={registerUser} />

      <Text style={style_index.or}>Or</Text>

      <GoogleSigninButton
        onPress={() =>
          onGoogleButtonPress().then(() => navigation.replace('my_flights'))
        }
      />
    </LayoutRegister>
  );
};
