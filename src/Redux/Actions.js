export const SET_ORIGIN = 'SET_ORIGIN';
export const SET_DESTINY = 'SET_DESTINY';
export const SET_DATE = 'SET_DATE';
export const SET_PASSENGERS = 'SET_PASSENGERS';

export const setOrigin = origin => ({
  type: SET_ORIGIN,
  payload: origin,
});

export const setDestiny = destiny => ({
  type: SET_DESTINY,
  payload: destiny,
});

export const setDate = date => ({
  type: SET_DATE,
  payload: date,
});

export const setPassenger = passengers => ({
  type: SET_PASSENGERS,
  payload: passengers,
});
