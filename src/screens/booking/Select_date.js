import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './BookingStyles';

export const Select_date = () => {

  const navigation = useNavigation();

  return (
    <SafeAreaView style={Style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('To');
        }}>
        <View style={Style.back}>
          <IonIcon name="chevron-back" size={38} color={'#5c6df8'} />
        </View>
      </TouchableOpacity>

      <View style={Style.flyregion_selectDate}>
        <View>
          <Text style={Style.cityList}>BEG</Text>
          <Text style={Style.countryList}>Serbia</Text>
        </View>
        <View>
          <IonIcon name="airplane" size={30} color={'#5c6df8'} />
        </View>
        <View>
          <Text style={Style.cityListDestiny}>AMS</Text>
          <Text style={Style.countryList}>Netherlands</Text>
        </View>
      </View>

      <View style={Style.to_container}>
        <Text style={Style.to}>Select Date</Text>
      </View>
      <CalendarPicker />

      <TouchableOpacity
        style={Style.container_next}
        onPress={() => {
          navigation.navigate('Passenger');
        }}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
