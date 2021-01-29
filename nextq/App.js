import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/Navigator/DrawerNavigator.js'

export default function App() {

  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}