import React from 'react';

class Validate {
  ValidateInputField(textInput) {
    if (!textInput.trim()) {
      alert('Please Enter a City');
      return;
    }
    navigation.navigate('To');
  }
}
