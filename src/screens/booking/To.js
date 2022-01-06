import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Style from './BookingStyles';
import Common_Styles from '../../styles/CommonStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const To = () => {
  return (
    <SafeAreaView style={Common_Styles.center_container}>
      <View style={Style.back}>
      <IonIcon name="chevron-back" size={38} color={'#5c6df8'} />
      </View>
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
      
      <TouchableOpacity style={Style.container_next}>
        <Text style={Style.text_next}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

