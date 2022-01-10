import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import flies from '.././helpers/flies.json';
import {My_flightlist} from '../components/index';
import FlightStyle from '../components/flightlist/FlightStyle';
import style_index from './style/style_index';

export const my_flights = () => {
  const navigation = useNavigation();

  const renderflights = flies?.map((flies, index) => {
    return <My_flightlist key={`flights${index}`} flights={flies} />;
  });

  const signOut = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.replace('login');
      })
      .catch(error => alert(error.message));
  };

  return (
    <SafeAreaView>
      <View>
        <View style={FlightStyle.logOut_container_row_spaceBetween}>
          <Text style={FlightStyle.my_flights_Title}>My flights</Text>
          <TouchableOpacity onPress={signOut}>
            <IonIcon style={FlightStyle.log_out} name="log-out" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={FlightStyle.flights_Container}>
        {renderflights}
      </ScrollView>

      <TouchableOpacity
        style={style_index.container_circle}
        onPress={() => {
          navigation.navigate('From');
        }}>
        <IonIcon name="add-circle" style={style_index.add_circle} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
