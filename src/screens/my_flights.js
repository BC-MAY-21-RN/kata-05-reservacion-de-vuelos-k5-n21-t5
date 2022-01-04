import React from 'react'
import {ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import Styles from './style/common_style'
import {My_flightlist} from '../components/index'
import IonIcon from 'react-native-vector-icons/Ionicons'
import flies from '.././helpers/flies.json'

export const my_flights = () => {
  const renderflights = flies?.map((flies, index) => {
    return <My_flightlist key={`flights${index}`} flights={flies}/>
  })

  return (
    <SafeAreaView>
        <View>
          <Text style={Styles.mfTitle}>My flights</Text>
        </View>
        <ScrollView>
        {renderflights}
      </ScrollView>
      <TouchableOpacity style={Styles.container_circle}>
      <IonIcon name='add-circle' style={Styles.add_circle} />
    </TouchableOpacity>
    </SafeAreaView>
  );
};
