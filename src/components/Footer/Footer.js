import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Styles from '../../screens/style/common_style';
import {useNavigation} from '@react-navigation/native';

export const Footer = ({text, direction, page}) => {
  const navigation = useNavigation();
  return (
    <View style={Styles.login}>
      <Text style={Styles.textLogin}>{text}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(direction)}>
        <Text style={Styles.goToSignIn}> {page} </Text>
      </TouchableOpacity>
    </View>
  );
};
