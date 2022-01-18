import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../helpers/size.js';

const style_index = StyleSheet.create({
  login: {
    flexDirection: 'row',
    marginTop: 40,
  },

  textLogin: {
    fontSize: 16,
    color: '#757575',
  },

  goToSignIn: {
    color: '#046BF1',
    fontSize: 16,
  },
  paswordText: {
    color: 'gray',
    fontSize: 10,
  },
  or: {
    color: 'black',
    marginTop: 8,
    marginBottom: 5,
  },
  container_circle: {
    position: 'absolute',
    alignSelf: 'center',
    marginTop: windowHeight / 1.3,
  },
  add_circle: {
    color: '#5c6df8',
    fontSize: 90,
  },
});

export default style_index;
