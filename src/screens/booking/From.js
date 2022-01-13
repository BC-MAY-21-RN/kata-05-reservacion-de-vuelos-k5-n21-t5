import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import Style from './BookingStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {BookingLayout} from '../../components/Layout/BookingLayout';

export const From = props => {
  const navigation = useNavigation();
  const [textInputFrom, setTextInputFrom] = useState('');

  const {
    route: {params: sumary},
  } = props;
  const checkTextInput = () => {
    if (!textInputFrom.trim()) {
      alert('Please Enter a City');
      return;
    }
    navigation.navigate('To');
  };
  return (
    <BookingLayout
      page={'my_flights'}
      showOrigin={false}
      showDestiny={false}
      showDate={false}
      underline={false}>
      <View style={Style.from_container}>
        <Text style={Style.to}>Where are you now?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={value => setTextInputFrom(value)}
        />
      </View>

      <TouchableOpacity style={Style.container_next} onPress={checkTextInput}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </BookingLayout>
  );
};
