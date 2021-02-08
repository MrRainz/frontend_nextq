import axios from 'axios';
import 'react-native-gesture-handler';
import { Auth } from './src/components/context.js';
import React, { useMemo, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { BottomNavigator } from './src/Navigator/BottomNavigator.js';
import { SignInStackNavigator } from './src/Navigator/StackNavigator.js';

// import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  
  const [loggedIn, setLoggedIn] = useState()
  const [loading, setLoading] = useState(false)
  const [userID, setuserID]= useState()

  AsyncStorage.getItem('jwt').then((result) => {
    if (result == null) {
      setLoggedIn(false)
    }
    else {
      setLoggedIn(true)
    }
  })

  AsyncStorage.getItem('userID').then((result) => {
    if (result == null) {  
      setuserID(result) // if result == null, set result into setID()
    }
    else {
      setuserID(result)
    }
  })

  const setAllState = useMemo(()=> ({
    loggedIn,
    setLoggedFalse: () => {
      setLoggedIn(false)
    },
    setLoggedTrue: () => {
      setLoggedIn(true)
    },
    loading,
    setLoadingFalse: () => {
      setLoading(false)
    },
    setLoadingTrue: () => {
      setLoading(true)
    },
    userID,
  }));

  return (
    <Auth.Provider value={setAllState}>
      {/* <RootSiblingParent> */}
        <NavigationContainer>
          {loggedIn 
          ?
          <BottomNavigator/>
          :
          <SignInStackNavigator/>
          }
        </NavigationContainer>
      {/* </RootSiblingParent> */}
    </Auth.Provider>
  );
}