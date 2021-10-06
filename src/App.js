import React from 'react';

import {NativeBaseProvider} from 'native-base';
import BraceletScreen from './pages/BraceletScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <BraceletScreen />
    </NativeBaseProvider>
  );
}
