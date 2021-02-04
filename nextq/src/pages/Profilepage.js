import React, { useContext } from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { Auth } from '../components/context.js';


export default function Profilepage({navigation}) {

  const { loggedIn, setFalse } = useContext(Auth);

  const handleLogout = () => {
    AsyncStorage.removeItem('jwt')
    setFalse()
  }

  return (
    
    <View style={styles.navigation}>
      { loggedIn
      ?
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.topContainer}>
            <View style={styles.imageBox}>
              <View style={styles.profileImage}>
                <Image source={require('../Images/user.png')} style={styles.image} resizeMode="center"></Image>
                <View>
                  <TouchableOpacity style={styles.username}>
                    <Text style={styles.usernameText}>Username</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottomContainer}>
            <View style={styles.userDetailBox}>
              <View style={styles.email}>
                <Text>Email</Text>
              </View>
              <View style={styles.phoneNumber}>
                <Text>Phone Number</Text>
              </View>
            </View>
            <View style={styles.checkoutButton}>
              <TouchableOpacity style={styles.button} >
                <Text style={styles.buttonText} onPress={handleLogout}>Check Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        </SafeAreaView> 
      :
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Welcome back !</Text>
        <Text style={styles.notificationBodyText}>Please sign in to your account </Text>
        <View style={styles.notification} >
          <Button title="Sign Up" //Need to move to new page
            onPress={() => navigation.navigate('Sign Up')}/>
          <Button title="Sign In"
            onPress={() => navigation.navigate('Sign In')} />
        </View>
      </View>
      } 
    </View>
  );
}

const styles=StyleSheet.create({
  navigation: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
    backgroundColor: "#111111",
  },
  topContainer: {
    flex: 1,
    top: 50,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: 360,
    height: 450,
    borderRadius:50,
    top:50,
  },
  text: {
    fontFamily: "Helvetica",
    color: "#111111",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  imageBox: {
    alignSelf: "center",
    paddingBottom:50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius:100,
    borderColor:"#ffffff",
    overflow: "hidden",
    backgroundColor: "#C4C4C4"
  },
  username: {
    justifyContent: "center",
    alignItems: "center",
  },
  email: {
    width:200,
    height:50,
    borderRadius: 20,
    backgroundColor:"#F18606",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneNumber: {
    width:200,
    height:50,
    top:30,
    borderRadius: 20,
    backgroundColor:"#F18606",
    justifyContent: "center",
    alignItems: "center",
  },
  usernameText: {
    color: "#FD0D39",
    fontFamily: "Helvetica",
    fontSize:15,
    paddingBottom: 30,
  },
  userDetailBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    top:50,
  },
  button: {
    alignItems: "center",
    padding: 10,
    top: 290
  },
  buttonText: {
    fontFamily: "Helvetica",
    fontSize:15,
    color: "#0A0AFF",
  },
  notificationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  notification:{
    width: 300,
    height: 200,
    borderRadius: 30,
    backgroundColor:"#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    color: "#ffffff",
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 30
  },
  notificationBodyText: {
    color: "#ffffff",
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 20
  }
})