import { StyleSheet } from "react-native"
import {windowWidth, windowHeight} from '../../helpers/size'
const Styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 5,
  },
  back:{
    marginBottom: 5,
    marginTop: 10,
  },
  flyregion: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#444646',
    borderBottomWidth: 0.5,
    paddingVertical: 8,
    width: windowWidth * .50,
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
  to_containar:{
    
  },
  to:{
    marginTop: 60,
    color:'black',
    fontSize: 35,
    fontWeight: '900',
  },
  textInput_to:{
    marginTop: windowHeight / 10,
    borderBottomColor:'black',
    borderBottomWidth: 2,
    color:'black',
    fontSize: 15
  },
  container_next:{
    alignContent: "center",
    padding: 10,
  },
  text_next:{
    color:'white',
    backgroundColor: '#5c6df8',
    fontSize: 18,
    bottom: 0.9,
    textAlign: 'center',
    borderRadius: 5,
    height: 30,
  }
})

export default Styles;