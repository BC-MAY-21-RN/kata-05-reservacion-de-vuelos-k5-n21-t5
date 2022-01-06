import {StyleSheet} from 'react-native';

const FlightStyle = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  flyregion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#444646',
    borderBottomWidth: 0.5,
    paddingVertical: 8,
  },
  cityList: {
    color: 'black',
    fontWeight: '900',
    fontSize: 30,
  },
  countryList: {
    color: 'black',
    fontWeight: '200',
    fontSize: 14,
    letterSpacing: 0.8,
  },
  flydetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    paddingVertical: 15,
  },
  date: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
  },
  passenger: {
    color: 'black',
    fontWeight: '600',
    fontSize: 15,
  },
  my_flights_Title: {
    fontSize: 28,
    color: '#5c6df8',
    fontWeight: '800',
    margin: 10,
    letterSpacing: 0.9,
  },
  logOut_container_row_spaceBetween:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  log_out:{
    fontSize: 40,
    color: '#5c6df8',
    margin: 10,
  },
  flights_Container: {
    marginBottom: 50,
  },
});

export default FlightStyle;
