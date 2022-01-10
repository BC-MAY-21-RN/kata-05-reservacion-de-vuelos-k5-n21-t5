import React from 'react';
import {View, Text} from 'react-native';
import FlightStyle from './FlightStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';

export function My_flightlist({flights}) {

  return (
    <View style={FlightStyle.container}>
      <View style={FlightStyle.flyregion}>
        <View>
          <Text style={FlightStyle.cityList}>{flights.capitalOrigin}</Text>
          <Text style={FlightStyle.countryList}>{flights.countryOrigin}</Text>
        </View>

        <IonIcon name="airplane" size={30} color={'#5c6df8'} />

        <View>
          <Text style={FlightStyle.cityList}>{flights.capitalDestiny}</Text>
          <Text style={FlightStyle.countryList}>{flights.countryDestiny}</Text>
        </View>
      </View>

      <View style={FlightStyle.flydetails}>
        <Text style={FlightStyle.date}>{flights.date}</Text>
        <Text style={FlightStyle.passenger}>{flights.passengers} passengers</Text>
      </View>
    </View>
  );
}
