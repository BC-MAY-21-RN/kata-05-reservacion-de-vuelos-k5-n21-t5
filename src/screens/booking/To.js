import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Style from './BookingStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
export const To = () => {
  const navigation = useNavigation();
  let sumary = {
    origin: '',
    destiny: '',
    date:{
      day: 0,
      month: 0,
      year: 0,
    },
    passengers: 0,
  }
  return (
    <SafeAreaView style={Style.container}>
      <TouchableOpacity onPress={() =>{
        navigation.goBack();
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
      <TextInput style={Style.textInput_to} placeholder='Select location' placeholderTextColor='black'/>
      </View>
      
      <TouchableOpacity style={Style.container_next} onPress={() => {
        //Asignar el origen sumary.origin
        navigation.navigate('Select_date', sumary)
      }}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

