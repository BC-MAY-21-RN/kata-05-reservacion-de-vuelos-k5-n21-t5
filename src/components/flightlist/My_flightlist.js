import React from 'react';
import {View, Text} from 'react-native';
import FlightStyle from './FlightStyle'
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
    <View style={FlightStyle.container}>
      <View style={FlightStyle.flyregion}>
        <View>
          <Text style={FlightStyle.cityList}>{capitalOrigin}</Text>
          <Text style={FlightStyle.countryList}>{countryOrigin}</Text>
        </View>

        <IonIcon name="airplane" size={30} color={'#5c6df8'} />

        <View>
          <Text style={FlightStyle.cityList}>{capitalDestiny}</Text>
          <Text style={FlightStyle.countryList}>{countryDestiny}</Text>
        </View>
      </View>

      <View style={FlightStyle.flydetails}>
        <Text style={FlightStyle.date}>{date}</Text>
        <Text style={FlightStyle.passenger}>{passengers} passengers</Text>
      </View>
    </View>
  );
}
