import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Style from '../../screens/booking/BookingStyles';
import { Store } from '../../Redux/Store';

export function BookingLayout({
  showAirplane,
  children,
  page,
  underline,
  passengers,
}) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={Style.container}>
      <TouchableOpacity onPress={() => navigation.navigate(page)}>
        <View style={Style.back}>
          <IonIcon name="chevron-back" size={38} color="#5c6df8" />
        </View>
      </TouchableOpacity>
      <View>
        <View
          style={
            underline
              ? Style.flyregion_selectDate
              : Style.flyregion_selectDateNoUnderline
          }
        >
          <View>
            <Text style={Style.cityList}>
              {Store.getState().userReducer.origin}
            </Text>
            <Text style={Style.countryList}>
              {Store.getState().userReducer.origin}
            </Text>
          </View>
          <View>
            <IonIcon
              name={showAirplane ? 'airplane' : null}
              size={30}
              color="#5c6df8"
            />
          </View>
          <View>
            <Text style={Style.cityListDestiny}>
              {Store.getState().userReducer.destiny}
            </Text>
            <Text style={Style.countryList}>
              {Store.getState().userReducer.destiny}
            </Text>
          </View>
        </View>
        <View style={Style.flyregion_selectDateNoUnderline}>
          <Text style={Style.date}>{Store.getState().userReducer.date}</Text>
          <Text style={{ color: 'black' }}>
            {passengers
              ? ` ${Store.getState().userReducer.passengers} passengers`
              : ''}
          </Text>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
}
