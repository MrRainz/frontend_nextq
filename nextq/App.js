import React, { useMemo, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { BottomNavigator } from './src/Navigator/BottomNavigator.js';
import { Auth } from './src/components/context.js';
import { SignInStackNavigator } from './src/Navigator/StackNavigator.js';
// import { RootSiblingParent } from 'react-native-root-siblings';

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
      {/* <RootSiblingParent> */}
        <NavigationContainer>
          {loggedIn ?
          <BottomNavigator/>
          :<SignInStackNavigator/>}
        </NavigationContainer>
      {/* </RootSiblingParent> */}
    </Auth.Provider>
  );
}