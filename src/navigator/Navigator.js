import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {login, register} from '../screens/index.js'

const Stack = createNativeStackNavigator();

 const Navigator = () => {

    return (
     <Stack.Navigator
         initialRouteName='login'
         screenOptions={{
            headerShown: false,
          }}>
             <Stack.Screen name='login' component={login}/>
            <Stack.Screen name='register' component={register}/>
     </Stack.Navigator>
    )
}

export default Navigator


