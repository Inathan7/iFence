import React from 'react';

import {NativeBaseProvider} from 'native-base';
import RegisterBraceletScreen from './pages/RegisterBraceletScreen';
import ListBraceletScreen from './pages/ListBraceletScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <ListBraceletScreen />
    </NativeBaseProvider>
  );
}
