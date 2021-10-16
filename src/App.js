import React from 'react';

import {NativeBaseProvider} from 'native-base';

import MenuScreen from './pages/MenuScreen';
import RegisterBraceletScreen from './pages/RegisterBraceletScreen';
import ListBraceletScreen from './pages/ListBraceletScreen';
import RegisterFenceScreen from './pages/RegisterFenceScreen';
import ListFenceScreen from './pages/ListFenceScreen';

export default function App() {
  return (
    <NativeBaseProvider>
      <MenuScreen />
    </NativeBaseProvider>
  );
}
