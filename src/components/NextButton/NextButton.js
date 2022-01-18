import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Style from '../../screens/booking/BookingStyles';
import {useNavigation} from '@react-navigation/native';
import {Store} from '../../Redux/Store';
import {setOrigin, setDate, setDestiny} from '../../Redux/Actions';
import {uploadData} from '../../FireBase/uploadData';

export const NextButton = ({nextPage, value, caso}) => {
  function revisarPagina(page) {
    switch (page) {
      case 'origen':
        return Store.dispatch(setOrigin(value));
      case 'destino':
        return Store.dispatch(setDestiny(value));
      case 'fecha':
        return Store.dispatch(setDate(value));
      case 'final':
        return uploadData();
      default:
        break;
    }
  }
  const navigation = useNavigation();
  const checkTextInput = () => {
    if (!value.toString().trim()) {
      alert('Please fill all the required fields');
      return;
    }
    navigation.navigate(nextPage);
  };

  return (
    <TouchableOpacity
      style={Style.container_next}
      onPress={() => {
        checkTextInput(value), revisarPagina(caso);
      }}>
      <Text
        style={[
          Style.text_next,
          {backgroundColor: value == '' ? 'gray' : '#5c6df8'},
        ]}>
        Next
      </Text>
    </TouchableOpacity>
  );
};
