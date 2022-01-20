export const SET_ORIGIN = 'SET_ORIGIN';
export const SET_DESTINY = 'SET_DESTINY';
export const SET_DATE = 'SET_DATE';
export const SET_PASSENGERS = 'SET_PASSENGERS';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_NAME = 'SET_NAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CHECKBOX = 'SET_CHECKBOX';

export const setOrigin = (origin) => ({
  type: SET_ORIGIN,
  payload: origin,
});

export const setDestiny = (destiny) => ({
  type: SET_DESTINY,
  payload: destiny,
});

export const setDate = (date) => ({
  type: SET_DATE,
  payload: date,
});

export const setPassenger = (passengers) => ({
  type: SET_PASSENGERS,
  payload: passengers,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});
export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setCheckBox = (checkbox) => ({
  type: SET_CHECKBOX,
  payload: checkbox,
});
