import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Styles from './style/common_style';
import {My_flightlist} from '../components/index';
import IonIcon from 'react-native-vector-icons/Ionicons';
import flies from '.././helpers/flies.json';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

export const my_flights = () => {
  const navigation = useNavigation()

  const renderflights = flies?.map((flies, index) => {
    return <My_flightlist key={`flights${index}`} flights={flies} />;
  });

  const signOut = () => {
    auth()
    .signOut()
    .then(() => { navigation.replace('login'); })
    .catch(error => alert(error.message))
  }
  
  return (
    <SafeAreaView>
      <View>
        <View style={Styles.log_out_container}>
        <Text style={Styles.mfTitle}>My flights</Text>
        <TouchableOpacity onPress={signOut}>
        <IonIcon style={Styles.log_out} name="log-out"/>
      </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={Styles.flightsContainer}>{renderflights}</ScrollView>

      <TouchableOpacity style={Styles.container_circle}>
        <IonIcon name="add-circle" style={Styles.add_circle} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
