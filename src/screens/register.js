import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import {
  FormButton,
  CheckBox,
  LayoutRegister,
  FormInput,
} from '../components/index';
import Common_Styles from '../styles/CommonStyles';
import style_index from './style/style_index';
import CheckBoxStyle from '../components/checkBox/CheckBoxStyle';
import { Store } from '../Redux/Store';
import { setName, setEmail, setPassword } from '../Redux/Actions';
import { registerUser } from '../FireBase/registerUser';
import { onGoogleButtonPress, getCurrentUser } from '../components/googleButton/signInWithGoogle';
import { validateEmail, validatePassword } from '../helpers/emailValidate';
import { textPolicy, textSubscribe } from '../helpers/TextsRegister';

export const register = (props) => {
  const [agreecheckBox, setAgreecheckBox] = useState(false);
  const [suscribecheckBox, setSuscribecheckBox] = useState(false);
  const [name, setStateName] = useState('');
  const [email, setStateEmail] = useState('');
  const [password, setStatePassword] = useState('');
  const emailChecker = validateEmail(email);
  const passwordChecker = validatePassword(password);
  const navigation = useNavigation();
  return (
    <LayoutRegister isLoginScreen={false} navigation={props.navigation}>
      <View style={Common_Styles.container_Form}>
        <Text style={Common_Styles.subtitle}>First Name</Text>

        <FormInput
          autoCapitalize="words"
          placeholderAdj="Jonh Smith"
          onChangeText={(name) => {
            setStateName(name);
            Store.dispatch(setName(name));
          }}
        />

        <Text style={Common_Styles.subtitle}>Email</Text>
        <Text
          style={[
            Common_Styles.subtitle,
            { color: emailChecker === 'Valid Email' ? 'green' : 'red' },
          ]}
        >
          {emailChecker}
        </Text>
        <FormInput
          autoCapitalize="none"
          placeholderAdj="user@example.com"
          onChangeText={(email) => {
            setStateEmail(email);
            Store.dispatch(setEmail(email));
          }}
        />

        <Text style={Common_Styles.subtitle}>Password</Text>
        <Text
          style={[
            Common_Styles.subtitle,
            { color: passwordChecker === 'Valid password' ? 'green' : 'red' },
          ]}
        >
          {passwordChecker}
        </Text>
        <FormInput
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(password) => {
            setStatePassword(password);
            Store.dispatch(setPassword(password));
          }}
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

      <FormButton
        buttonTitle="Sign Up"
        onPress={registerUser}
        value={agreecheckBox}
      />

      <Text style={style_index.or}>Or</Text>

      <GoogleSigninButton
        onPress={() => onGoogleButtonPress().then(
          () => 
          navigation.replace('my_flights'),
          getCurrentUser()
        )}
      />
    </LayoutRegister>
  );
};
