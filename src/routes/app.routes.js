import React from 'react';

//import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MenuScreen from '../pages/MenuScreen';
import RegisterBraceletScreen from '../pages/RegisterBraceletScreen';
import ListBraceletScreen from '../pages/ListBraceletScreen';
import RegisterFenceScreen from '../pages/RegisterFenceScreen';
import ListFenceScreen from '../pages/ListFenceScreen';

//const Tab = createBottomTabNavigator();
//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={MenuScreen} />
      <Drawer.Screen
        name="Registrar Pulseira"
        component={RegisterBraceletScreen}
      />
      <Drawer.Screen name="Lista de Pulseiras" component={ListBraceletScreen} />
      <Drawer.Screen name="Registrar Cerca" component={RegisterFenceScreen} />
      <Drawer.Screen name="Lista de Cercas" component={ListFenceScreen} />
    </Drawer.Navigator>
  );
}
