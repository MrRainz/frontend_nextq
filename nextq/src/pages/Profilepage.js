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
    return (
      <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button title="Sign Up"
        onPress={() => navigation.navigate('Sign Up', { loggedIn: {loggedIn}, setLoggedIn: {setLoggedIn} })}/>
      <Button title="Sign In"
        onPress={() => navigation.navigate('Sign In', { loggedIn: {loggedIn}, setLoggedIn: {setLoggedIn} })} />
      </View>
    );
  }