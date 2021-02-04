import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { Auth } from '../components/context.js';

export default function Profilepage({navigation}) {

  const { loggedIn, setFalse } = useContext(Auth);

  const handleLogout = () => {
    AsyncStorage.removeItem('jwt')
    setFalse()
  }

  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      { loggedIn 
      ? <Button title="Log Out" onPress={handleLogout} />  
      : <View>
          <Button title="Sign Up" //Need to move to new page
            onPress={() => navigation.navigate('Sign Up')}/>
          <Button title="Sign In"
            onPress={() => navigation.navigate('Sign In')} />
        </View>
      } 
    </View>
  );
}

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})