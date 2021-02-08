import 'react-native-gesture-handler';
import { Auth } from './src/components/context.js';
import React, { useMemo, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { BottomNavigator } from './src/Navigator/BottomNavigator.js';
import { SignInStackNavigator } from './src/Navigator/StackNavigator.js';

// Toastify if import unable to start expo web browser
// import { RootSiblingParent } from 'react-native-root-siblings';

export default function App() {
  
  const [loggedIn, setLoggedIn] = useState()
  const [loading, setLoading] = useState(false)
  const [userID, setuserID]= useState()

  // To get jwt token. Act as the same as localstorage in ReactJS
  AsyncStorage.getItem('jwt').then((result) => {
    if (result == null) {
      setLoggedIn(false) // if result == null, return loggedIn state to false which indicates user is not loggedIn.
    }
    else {
      setLoggedIn(true)
    }
  })
  
  // To get userID after login. Act as the same as localstorage in ReactJS.
  AsyncStorage.getItem('userID').then((result) => {
    if (result == null) {  
      setuserID(result) // if result == null, set result into setID()
    }
    else {
      setuserID(result)
    }
  })

  // Pass states to other js files using useMemo and useContext
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