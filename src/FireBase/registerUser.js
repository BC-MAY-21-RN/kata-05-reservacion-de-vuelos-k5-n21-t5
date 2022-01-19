import {Store} from '../Redux/Store'
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

export function registerUser() {
  auth()
    .createUserWithEmailAndPassword(Store.getState().userData.email, Store.getState().userData.password)
    .then(() => {
      Alert.alert('Bienvenido ' + Store.getState().userData.name);
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('El email ya esta en uso');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('El email es invalido');
      }

      console.error(error);
    });
}