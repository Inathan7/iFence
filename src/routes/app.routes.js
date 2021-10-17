import React from 'react';

import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import MenuScreen from '../pages/MenuScreen';
import RegisterBraceletScreen from '../pages/RegisterBraceletScreen';
import ListBraceletScreen from '../pages/ListBraceletScreen';
import RegisterFenceScreen from '../pages/RegisterFenceScreen';
import ListFenceScreen from '../pages/ListFenceScreen';

//const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen
        name="Registrar Pulseira"
        component={RegisterBraceletScreen}
      />
      <Stack.Screen name="Lista de Pulseiras" component={ListBraceletScreen} />
      <Stack.Screen name="Registrar Cerca" component={RegisterFenceScreen} />
      <Stack.Screen name="Lista de Cercas" component={ListFenceScreen} />
    </Stack.Navigator>
  );
}
