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
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import CheckBoxStyle from '../components/checkBox/CheckBoxStyle';
import {Store} from '../Redux/Store';
import {setName, setEmail, setPassword} from '../Redux/Actions';
import {registerUser} from '../FireBase/registerUser';
import {onGoogleButtonPress} from '../components/googleButton/signInWithGoogle';

export const register = props => {
  const navigation = useNavigation();
  const [agreecheckBox, setAgreecheckBox] = useState(false);
  const [suscribecheckBox, setSuscribecheckBox] = useState(false);
  const [name, setStateName] = useState('');
  const [email, setStateEmail] = useState('');
  const [password, setStatePassword] = useState('');

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
          onChangeText={name => {
            setStateName(name);
            Store.dispatch(setName(name));
          }}
        />

        <Text style={Common_Styles.subtitle}>Email</Text>

        <FormInput
          autoCapitalize={'none'}
          placeholderAdj={'user@example.com'}
          onChangeText={email => {
            setStateEmail(email);
            Store.dispatch(setEmail(email));
          }}
        />

        <Text style={Common_Styles.subtitle}>Password</Text>

        <FormInput
          autoCapitalize={'none'}
          secureTextEntry={true}
          onChangeText={password => {
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
        onPress={() =>
          onGoogleButtonPress().then(
            () => Alert.alert('Inicio con google correctamente'),
            navigation.replace('my_flights'),
          )
        }
      />
    </LayoutRegister>
  );
};
