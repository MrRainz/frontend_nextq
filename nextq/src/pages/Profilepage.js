import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';
import { Auth } from '../components/context.js';
// import Toast from 'react-native-root-toast';

export default function Profilepage({navigation}) {

  const { loggedIn, setFalse } = useContext(Auth);

  const handleLogout = () => {
    AsyncStorage.removeItem('jwt')
    setFalse()
    // Toast.show('Successfully sign out!', {
    //   duration: Toast.durations.LONG,
    //   position: 90,
    //   textColor: 'black',
    //   backgroundColor: 'green',
    //   shadow: true,
    //   animation: true,
    //   hideOnPress: true,
    //   delay: 0,
    // });
  }

  return (
    <View style={styles.container}>
      <Text>Profile Page</Text>
      { loggedIn 
      ? <TouchableOpacity style={styles.button} title="Log Out" onPress={handleLogout} >
          <FontAwesome name="sign-out" size={24} color="black" />
          <Text style={styles.buttontext}> Sign Out </Text>
        </TouchableOpacity>
      : <View style={styles.buttonplacement}>
          <TouchableOpacity style={styles.button} title="Sign Up" //Need to move to new page
            onPress={() => navigation.navigate("Sign Up")}>
              <AntDesign name="adduser" size={24} color="black"/>
              <Text style={styles.buttontext}> Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} title="Sign Up" //Need to move to new page
            onPress={() => navigation.navigate("Sign In")}>
              <FontAwesome name="sign-in" size={24} color="black"/>
              <Text style={styles.buttontext}> Sign In </Text>
          </TouchableOpacity>
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
  buttonplacement: {
    flexDirection:'row',
  },
  button: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    margin:5,
    width: 125,
    height: 46,
    borderRadius:50,
    shadowOffset: {
        width: 5,
        height: 5
      },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    backgroundColor: 'orange'
  },
  buttontext: {
    fontSize: 20,
    color:'white'
  }
})