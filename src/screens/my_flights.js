import React, {useState, useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import FlightStyle from '../components/flightlist/FlightStyle';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {My_flightlist} from '../components/index';
import style_index from './style/style_index';

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
      <My_flightlist item={item}/>
    </View>
    )
  }

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
