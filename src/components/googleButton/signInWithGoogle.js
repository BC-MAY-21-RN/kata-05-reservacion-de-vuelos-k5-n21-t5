import {
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Store } from '../../Redux/Store';
import { setName } from '../../Redux/Actions';

GoogleSignin.configure({
  webClientId:
    '343591224161-hgjsesh1nlnb105dtqju613v97agm2id.apps.googleusercontent.com',
});

export async function onGoogleButtonPress() {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  return auth().signInWithCredential(googleCredential);
}

export const getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  Store.dispatch(setName(currentUser.user.name));
  this.setState({ currentUser });
};
