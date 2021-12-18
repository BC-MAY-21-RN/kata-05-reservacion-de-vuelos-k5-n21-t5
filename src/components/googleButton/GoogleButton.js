import React from 'react';
import {Text, TouchableOpacity, Image, View, StyleSheet} from 'react-native';
import { GoogleStyles } from './GoogleButtonStyle';

export const GoogleButton = ({buttonTitle, ...result}) => {
  return (
    <TouchableOpacity
      style={GoogleStyles.buttonContainer}
      {...result}>

        <View style={GoogleStyles.imageContainer} >
          <Image style={GoogleStyles.imageGoogle} source={{uri: 'http://assets.stickpng.com/images/5a951939c4ffc33e8c148af2.png'}}/>
        </View>

        <View >
          <Text style={GoogleStyles.buttonText}>{buttonTitle}</Text>
        </View>

    </TouchableOpacity>
  )
}