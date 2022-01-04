import React from 'react';
import {View, Text} from 'react-native';
import StyleList from './FlightListStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';

export function My_flightlist(props) {
  const {flights} = props;
  const {
    capitalDestiny,
    capitalOrigin,
    countryOrigin,
    countryDestiny,
    passengers,
    date,
  } = flights;

  return (
    <View style={StyleList.container}>
      <View style={StyleList.flyregion}>
        <View>
          <Text style={StyleList.cityList}>{capitalOrigin}</Text>
          <Text style={StyleList.countryList}>{countryOrigin}</Text>
        </View>

        <IonIcon name="airplane" size={30} color={'#5c6df8'} />

        <View>
          <Text style={StyleList.cityList}>{capitalDestiny}</Text>
          <Text style={StyleList.countryList}>{countryDestiny}</Text>
        </View>
      </View>

      <View style={StyleList.flydetails}>
        <Text style={StyleList.date}>{date}</Text>
        <Text style={StyleList.passenger}>{passengers} passengers</Text>
      </View>
    </View>
  );
}
