import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import style_index from '../../screens/style/style_index';
export const Footer = ({text, direction, page}) => {
  const navigation = useNavigation();
  return (
    <View style={style_index.login}>
      <Text style={style_index.textLogin}>{text}</Text>
      <TouchableOpacity onPress={() => navigation.navigate(direction)}>
        <Text style={style_index.goToSignIn}> {page} </Text>
      </TouchableOpacity>
    </View>
  );
};
