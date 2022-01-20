import { StyleSheet } from 'react-native';

const CheckBoxStyle = StyleSheet.create({
  checkContainer: {
    display: 'flex',
    flexDirection: 'row',
  },

  text: {
    color: 'gray',
    fontSize: 12,
    margin: 8,
    marginLeft: 0,
  },

  textUnderLine: {
    textDecorationLine: 'underline',
  },
});

export default CheckBoxStyle;
