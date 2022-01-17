import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigator/Navigator.js';
import {Provider} from 'react-redux';
import {Store} from './src/Redux/Store.js';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
