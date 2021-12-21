import {StyleSheet} from 'react-native';
import {windowHeight} from '../../helpers/size';

export const StylesForm = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },

  inputContainer: {
    width: '100%',
    height: windowHeight / 18,
    borderColor: '#000',
    backgroundColor: '#DBDEDF',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },

  textInput: {
    height: windowHeight / 15,
    width: '100%',
    fontSize: 20,
    color: '#000',
  },

  iconInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'right',
    marginRight: 10,
  },
});
