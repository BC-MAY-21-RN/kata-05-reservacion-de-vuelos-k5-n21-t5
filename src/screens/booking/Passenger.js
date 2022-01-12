import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './BookingStyles';
import {PassengerPicker} from '../../components/index';

export const Passenger = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Select_date');
        }}>
        <View style={Style.back}>
          <IonIcon name="chevron-back" size={38} color={'#5c6df8'} />
        </View>
      </TouchableOpacity>
      <View>
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
        <View>
          <Text style={Style.date}>30 September 2021</Text>
        </View>
      </View>
      <View style={Style.to_container}>
        <Text style={Style.to}>How many passengers?</Text>
      </View>
        
        <PassengerPicker />
      <TouchableOpacity
        style={Style.container_next}
        onPress={() => {
          navigation.navigate('my_flights');
        }}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
