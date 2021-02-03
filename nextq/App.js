import React, {useState} from 'react';
import { AsyncStorage } from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/Navigator/DrawerNavigator.js'

export default function App() {
  

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}