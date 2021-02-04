import styles from '../../styles.js';
import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-community/async-storage';

export default function Profilepage({navigation}) {

  const [loggedIn, setLoggedIn] = useState(false)

  AsyncStorage.getItem('jwt').then((result) => {
    if (result == null) {
        setLoggedIn(false)
    }
    else {
        setLoggedIn(true)
    }
  })

  const handleLogout = () => {
    AsyncStorage.removeItem('jwt')
  }

    return (
      <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button title="Sign Up" //Need to move to new page
        onPress={() => navigation.navigate('Sign Up')}/>
      <Button title="Sign In"
        onPress={() => navigation.navigate('Sign In')} />
      <Button title="Log Out"
        onPress={handleLogout} />
      </View>
    );
  }