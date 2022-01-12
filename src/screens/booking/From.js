import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './BookingStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

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
    <SafeAreaView style={Style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('my_flights');
        }}>
        <View style={Style.back}>
          <IonIcon name="chevron-back" size={38} color={'#5c6df8'} />
        </View>
      </TouchableOpacity>

      <View style={Style.from_container}>
        <Text style={Style.to}>Where are you now?</Text>
        <TextInput
          style={Style.textInput_to}
          placeholder="Select location"
          placeholderTextColor="black"
          onChangeText={(value) => setTextInputFrom(value)}
        />
      </View>

      <TouchableOpacity
        style={Style.container_next}
        onPress={checkTextInput}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
