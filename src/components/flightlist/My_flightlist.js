import React from 'react';
import { View, Text } from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FlightStyle from './FlightStyle';

export function My_flightlist({ item }) {
  return (
    <View style={FlightStyle.container}>
      <View style={FlightStyle.flyregion}>
        <View>
          <Text style={FlightStyle.cityList}>{item.origin}</Text>
          <Text style={FlightStyle.countryList}>{item.origin}</Text>
        </View>

        <IonIcon name="airplane" size={30} color="#5c6df8" />

        <View>
          <Text style={FlightStyle.cityList}>{item.destiny}</Text>
          <Text style={FlightStyle.countryList}>{item.destiny}</Text>
        </View>
      </View>

      <View style={FlightStyle.flydetails}>
        <Text style={FlightStyle.date}>{item.date}</Text>
        <Text style={FlightStyle.passenger}>
          {item.passengers}
          {' '}
          passengers
        </Text>
      </View>
    </View>
  );
}
