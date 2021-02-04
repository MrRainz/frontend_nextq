import React, {useEffect, useMemo, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';

import { BottomNavigator } from './src/Navigator/BottomNavigator.js'
import { Auth } from './src/components/context.js';

export default function App() {
  
  const [loggedIn, setLoggedIn] = useState()
  
  AsyncStorage.getItem('jwt').then((result) => {
    if (result == null) {
      setLoggedIn(false)
    }
    else {
      setLoggedIn(true)
    }
  })

  const setLoggedState = useMemo(()=> ({
    loggedIn,
    setFalse: () => {
      setLoggedIn(false)
    },
    setTrue: () => {
      setLoggedIn(true)
    }
  }));

  return (
    <Auth.Provider value={setLoggedState}>
      <NavigationContainer>
        <BottomNavigator/>
      </NavigationContainer>
    </Auth.Provider>
  );
}