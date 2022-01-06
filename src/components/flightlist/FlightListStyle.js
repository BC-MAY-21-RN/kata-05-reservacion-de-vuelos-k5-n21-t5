import {StyleSheet} from 'react-native';

const StyleList = StyleSheet.create({
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
});

export default StyleList;
