import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Style from '../../screens/booking/BookingStyles';
import { Store } from '../../Redux/Store';
import {
  setOrigin,
  setDate,
  setDestiny,
  setPassenger,
} from '../../Redux/Actions';
import { uploadData } from '../../FireBase/uploadData';

export function NextButton({ nextPage, value, caso }) {
  function revisarPagina(page) {
    switch (page) {
      case 'origen':
        navigation.navigate(nextPage);
        return Store.dispatch(setOrigin(value));
      case 'destino':
        navigation.navigate(nextPage);
        return Store.dispatch(setDestiny(value));
      case 'fecha':
        navigation.navigate(nextPage);
        return Store.dispatch(setDate(value));
      case 'passengers':
        navigation.navigate(nextPage);
        if (Store.getState().userReducer.passengers == 0) {
          Store.dispatch(setPassenger(1));
        }
        break;
      case 'final':
        alert(
          'Confirm detail',
          'Are you ready to fly?',
          {
            textCancel: 'Cancel',
            textConfirm: 'Confirm',
            onConfirm: () => confirmClick(),
            onCancel: () => cancelClick(),
          },
        );

        confirmClick = () => {
          uploadData();
          navigation.navigate('my_flights');
        };
        cancelClick = () => {
          console.log('No pressed');
        };
        break;
      default:
        break;
    }
  }
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={Style.container_next}
      onPress={() => {
        revisarPagina(caso);
      }}
      disabled={!!(value == '' || value < 0)}
    >
      <Text
        style={[
          Style.text_next,
          { backgroundColor: value == '' || value < 0 ? 'gray' : '#5c6df8' },
        ]}
      >
        Next
      </Text>
    </TouchableOpacity>
  );
}
