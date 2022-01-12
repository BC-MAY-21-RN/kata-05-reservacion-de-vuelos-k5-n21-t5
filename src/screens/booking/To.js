import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './BookingStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const To = () => {
  const navigation = useNavigation();
  const [textInputFrom, setTextInputFrom] = useState('');
  let sumary = {
    capitalOrigin: '',
    countryOrigin: '',
    capitalDestiny: '',
    countryDestiny: '',
    date: {
      day: 0,
      month: 0,
      year: 0,
    },
    passengers: 0,
  };
  const checkTextInput = () => {
    if (!textInputFrom.trim()) {
      alert('Please Enter a City');
      return;
    }
    navigation.navigate('Select_date', sumary);
  };
  return (
    <SafeAreaView style={Style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('From');
        }}>
        <View style={Style.back}>
          <IonIcon name="chevron-back" size={38} color={'#5c6df8'} />
        </View>
      </TouchableOpacity>

      <View style={Style.flyregion}>
        <View>
          <Text style={Style.cityList}>BEG</Text>
          <Text style={Style.countryList}>Serbia</Text>
        </View>
        <View>
          <IonIcon name="airplane" size={30} color={'#5c6df8'} />
        </View>
      </View>
      <View style={Style.to_container}>
        <Text style={Style.to}>Where will you be flying to?</Text>
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
