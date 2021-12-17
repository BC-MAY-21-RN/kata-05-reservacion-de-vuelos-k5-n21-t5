import { StyleSheet } from 'react-native';
import { windowHeight} from '../../helpers/size';

export const ButtonStyles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: '90%',
    height: windowHeight / 18,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#5B5CDD',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
});