import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from './BookingStyles';
import {Calendar} from 'react-native-calendars';
export const Select_date = () => {
  const [dia, setDia] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);

  const navigation = useNavigation();
  console.log(dia);
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
      <Calendar
        minDate={'2020-01-01'}
        maxDate={'2023-12-31'}
        //onDayPress={}
        theme={{backgroundColor: '#f2f2f2'}}
        style={{height: 150}}
      />

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
