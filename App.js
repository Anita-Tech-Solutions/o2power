import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './navigation/Screens';

import {theme} from './constants';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Screens />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
