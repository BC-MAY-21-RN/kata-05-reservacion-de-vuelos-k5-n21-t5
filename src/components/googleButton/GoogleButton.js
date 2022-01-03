import React from 'react';
import {Text, TouchableOpacity, Image, View} from 'react-native';
import {GoogleStyles} from './GoogleButtonStyle';

export const GoogleButton = ({buttonTitle, ...result}) => {
  return (
    <TouchableOpacity style={GoogleStyles.buttonContainer} {...result}>
      <View style={GoogleStyles.imageContainer}>
        <Image
          style={GoogleStyles.imageGoogle}
          source={{
            uri: 'https://e7.pngegg.com/pngimages/337/722/png-clipart-google-search-google-account-google-s-google-play-google-company-text.png',
          }}
        />
      </View>

      <View>
        <Text style={GoogleStyles.buttonText}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
