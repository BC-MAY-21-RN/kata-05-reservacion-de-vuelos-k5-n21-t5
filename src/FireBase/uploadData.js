import firestore from '@react-native-firebase/firestore';
import { Store } from '../Redux/Store';
import {
  setOrigin,
  setDate,
  setDestiny,
  setPassenger
} from '../Redux/Actions';

export function uploadData(){
  try{
    firestore().collection('Flies').add({
      origin: Store.getState().userReducer.origin,
      destiny: Store.getState().userReducer.destiny,
      date: Store.getState().userReducer.date,
      passengers: Store.getState().userReducer.passengers

    })
  }catch(e){
    console.log(e)
  } finally{
    Store.dispatch(setOrigin(''))
    Store.dispatch(setDestiny(''))
    Store.dispatch(setDate(''))
    Store.dispatch(setPassenger(''))
  }
}