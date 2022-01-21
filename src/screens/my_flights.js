import React, {useState, useEffect} from 'react';
import { FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FlightStyle from '../components/flightlist/FlightStyle';
import {My_flightlist} from '../components/index';
import style_index from './style/style_index';
import {Store} from '../Redux/Store';
import {setName, setEmail, setPassword} from '../Redux/Actions';

export const my_flights = () => {
  const navigation = useNavigation();
  const [data, setData] = useState();
  const [rtdata, setrtData] = useState([]);

  async function loadData() {
    try {
      const flies = await firestore().collection('Flies').get();
      setData(flies.docs);
    } catch (e) {
      console.log(e);
    }
  }

  async function loadRTData() {
    const suscriber = firestore()
      .collection('Flies')
      .onSnapshot(querySnapshot => {
        const vuelos = [];
        querySnapshot.forEach(documentSnapshoot => {
          vuelos.push({
            ...documentSnapshoot.data(),
            key: documentSnapshoot.id,
          });
        });
        setrtData(vuelos);
      });
    return () => suscriber();
  }

  useEffect(() => {
    loadData();
    loadRTData();
  }, []);

  function renderRT({item}) {
    return (
      <View>
        <My_flightlist item={item} />
      </View>
    );
  }

  const signOut = () => {
   alert(
    'Log Out', 'Are you sure you want to log out?',
    {
      textConfirm: 'Yes',
      textCancel: 'No',
      onConfirm: () => confirmClick(),
      onCancel: () => console.log('No pressed'),
    }
   )
   
   confirmClick = () => {
    auth()
            .signOut()
            .then(() => {
              navigation.replace('register');
              Store.dispatch(setName(''));
              Store.dispatch(setEmail(''));
              Store.dispatch(setPassword(''));
            })
            .catch(error => alert(error.message))
          }
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
        <Text style={FlightStyle.userText}>
          {'Hello! ' + (Store.getState().userData.name === '' ? Store.getState().userData.email : Store.getState().userData.name)}
        </Text>
      </View>

      <FlatList
        data={rtdata}
        renderItem={renderRT}
        keyExtractor={item => item.key}
      />

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
