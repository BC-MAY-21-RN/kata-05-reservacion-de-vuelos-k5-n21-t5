import { StyleSheet } from 'react-native'

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
        width: '80%',
        borderRadius: 20,
        backgroundColor: '#FFF',
        borderWidth: 0.5,
        elevation: 10,
        borderColor: '#FFF',
        padding: 15,
        marginBottom: 5
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

})

export default styles