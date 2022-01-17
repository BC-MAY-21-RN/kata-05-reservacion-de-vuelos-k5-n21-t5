import {SET_DATE, SET_DESTINY, SET_ORIGIN, SET_PASSENGERS} from './Actions';

const initialState = {
  origin: '',
  destiny: '',
  date: '',
  passengers: 0,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORIGIN:
      return {...state, origin: action.payload};
    case SET_DESTINY:
      return {...state, destiny: action.payload};
    case SET_DATE:
      return {...state, date: action.payload};
    case SET_PASSENGERS:
      return {...state, passengers: action.payload};
    default:
      return state;
  }
}

export default userReducer;
