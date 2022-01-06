import { StyleSheet } from "react-native";

const Common_Styles = StyleSheet.create({
  center_container: {
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
  container_Form: {
    marginTop: 25,
    marginBottom: 20,
    alignItems: 'flex-start',
  },
})

export default Common_Styles
