import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigator/Navigator.js';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store.js';
import SuperAlert from "react-native-super-alert";

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <SuperAlert/>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
