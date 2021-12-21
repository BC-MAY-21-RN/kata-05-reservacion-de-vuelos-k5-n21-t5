import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  InputPassword,
  FormButton,
  InputEmail,
  Footer,
} from '../components/index';
import Styles from '../screens/style/common_style';

export const login = props => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.Card_Container}>
        <Text style={Styles.title}>Log In</Text>

        <View style={Styles.containerForm}>
          <Text style={Styles.subtitle}>Email</Text>

          <InputEmail />

          <Text style={Styles.subtitle}>Password</Text>

          <InputPassword />
        </View>

        <FormButton
          buttonTitle="Log In"
          onPress={() => login(email, password)}
        />

        <Footer
          page={'Create here'}
          direction={'register'}
          text={"Don't have ana account?"}
        />
      </View>
    </SafeAreaView>
  );
};
