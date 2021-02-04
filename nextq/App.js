import React, {useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import { BottomNavigator } from './src/Navigator/BottomNavigator.js'

export default function App() {
  //const [loggedIn, setLoggedIn] = useState(false)

  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}