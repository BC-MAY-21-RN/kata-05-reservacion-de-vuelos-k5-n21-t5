import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  text: {
    color: '#000',
  },
  wrapperVertical: {
    width: 250,
    height: 340,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  OptionWrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    height: 50,
  },
  backIcon: {
    fontSize: 25,
    color: '#5c6df8',
    marginHorizontal: 30,
  },
});

export default styles;
