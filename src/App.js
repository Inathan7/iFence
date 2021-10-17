import React from 'react';

import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes/index.routes';

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
