import auth from '@react-native-firebase/auth';
import { Store } from '../Redux/Store';

export function loadUser() {
  auth()
    .signInWithEmailAndPassword(
      Store.getState().userData.email,
      Store.getState().userData.password,
    )
    .then(() => {
      alert(`Welcome ${Store.getState().userData.email}`);
    })
    .catch((error) => {
      if (error.code === 'auth/email-already-in-use') {
        alert(`${Store.getState().userData.email} is already in use`);
      }
      if (error.code === 'auth/invalid-email') {
        alert(`${Store.getState().userData.email} invalid, check it again`);
      }
      if (error.code === 'auth/user-not-found') {
        alert(`${Store.getState().userData.email} is not registered`);
      }
      if (error.code === 'auth/wrong-password') {
        alert('The password is not correct');
      }
      console.log(error);
    });
}
