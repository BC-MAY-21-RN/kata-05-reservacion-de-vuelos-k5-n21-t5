import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../helpers/size.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Card_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    elevation: 10,
    borderColor: '#FFF',
    padding: 15,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    color: '#046BF1',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: 'black',
    fontSize: 15,
  },
  containerForm: {
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'flex-start',
  },

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
  mfTitle: {
    fontSize: 28,
    color: '#5c6df8',
    fontWeight: '800',
    margin: 10,
    letterSpacing: 0.9,
  },
  container_circle: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: windowHeight / 9,
  },
  add_circle: {
    color: '#5c6df8',
    fontSize: 90,
  },
  flightsContainer: {
    marginBottom: 50,
  },
  log_out_container:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  log_out:{
    fontSize: 40,
    color: '#5c6df8',
    margin: 10,
  },
});

export default styles;
