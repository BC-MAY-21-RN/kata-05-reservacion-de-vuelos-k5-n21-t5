import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { Store } from '../Redux/Store';

export function loadUser() {
  auth()
    .signInWithEmailAndPassword(
      Store.getState().userData.email,
      Store.getState().userData.password,
    )
    .then(() => {
      Alert.alert(`Bienvenido ${Store.getState().userData.email}`);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert(`${Store.getState().userData.email} ya está en uso`);
      }
      if (error.code === 'auth/invalid-email') {
        Alert.alert(
          `${Store.getState().userData.email} Invalido, revisalo nuevamente`,
        );
      }
      if (error.code === 'auth/user-not-found') {
        Alert.alert(`${Store.getState().userData.email} no está registrado`);
      }
      if (error.code === 'auth/wrong-password') {
        Alert.alert('La contraseña que ingresaste no es correcta');
      }

      console.error(error);
    });
}
