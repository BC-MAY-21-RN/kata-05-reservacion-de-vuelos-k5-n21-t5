import {
  SET_EMAIL, SET_NAME, SET_PASSWORD, SET_CHECKBOX,
} from './Actions';

const initialData = {
  name: '',
  email: '',
  password: '',
  check_box: false,
};

function userData(state = initialData, action) {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };
    case SET_NAME:
      return { ...state, name: action.payload };
    case SET_PASSWORD:
      return { ...state, password: action.payload };
    case SET_CHECKBOX:
      return { ...state, check_box: action.payload };
    default:
      return state;
  }
}

export default userData;
