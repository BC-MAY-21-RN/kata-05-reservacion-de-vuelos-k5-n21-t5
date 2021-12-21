import {StyleSheet} from 'react-native';
import {windowHeight} from '../../helpers/size';

export const GoogleStyles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    height: windowHeight / 18,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#5B5CDD',
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },

  imageContainer: {
    width: '17%',
  },

  imageGoogle: {
    width: 30,
    height: 30,
    borderRadius: 20,
  },
});
