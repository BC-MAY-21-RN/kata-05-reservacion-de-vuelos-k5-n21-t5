import auth from '@react-native-firebase/auth';
import { Store } from '../Redux/Store';

export function registerUser() {
  auth()
    .createUserWithEmailAndPassword(
      Store.getState().userData.email,
      Store.getState().userData.password,
    )
    .then(() => {
      alert(`Welcome ${Store.getState().userData.name}`);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert('The email is used');
      }

      if (error.code === 'auth/invalid-email') {
        alert('Email es invalid');
      }

      console.error(error);
    });
}
