import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Style from '../../screens/booking/BookingStyles';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

export const BookingLayout = ({
  showOrigin,
  showDestiny,
  children,
  showDate,
  page,
  underline,
}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={Style.container}>
      <TouchableOpacity onPress={() => navigation.navigate(page)}>
        <View style={Style.back}>
          <IonIcon name="chevron-back" size={38} color={'#5c6df8'} />
        </View>
      </TouchableOpacity>
      <View>
        <View style={underline ? Style.flyregion_selectDate : Style.flyregion_selectDateNoUnderline}>
          <View>
            <Text style={Style.cityList}>{showOrigin ? 'BEG' : ''}</Text>
            <Text style={Style.countryList}>{showOrigin ? 'QWE' : ''}</Text>
          </View>
          <View>
            <IonIcon
              name={showOrigin ? 'airplane' : ''}
              size={30}
              color={'#5c6df8'}
            />
          </View>
          <View>
            <Text style={Style.cityListDestiny}>
              {showDestiny ? 'AMS' : ''}
            </Text>
            <Text style={Style.countryList}>{showDestiny ? 'NET' : ''}</Text>
          </View>
        </View>
        <View>
          <Text style={Style.date}>{showDate ? '30 September 2021' : ''}</Text>
        </View>
      </View>
      {children}
    </SafeAreaView>
  );
};
