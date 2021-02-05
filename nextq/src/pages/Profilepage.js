import React, { useContext } from 'react';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
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

          <Card containerStyle={styles.bottomContainer}>
            <View style={styles.userDetailBox}>
              <View style={styles.email}>
                <Text>Email</Text>
              </View>
              <View style={styles.phoneNumber}>
                <Text>Phone Number</Text>
              </View>
            </View>
            <View style={styles.signoutplacement}>
            <TouchableOpacity style={styles.button} title="Log Out" onPress={handleLogout} >
                <FontAwesome name="sign-out" size={24} color="black" />
                <Text style={styles.buttontextinout}> Sign Out </Text>
            </TouchableOpacity>
            </View>
          </Card>
        </ScrollView>
      </SafeAreaView> 
      :
      <View style={styles.notificationContainer}>
        <Text style={styles.notificationText}>Welcome back !</Text>
        <Text style={styles.notificationBodyText}>Please sign in to your account </Text>
        <View style={styles.buttonplacement}>
          <TouchableOpacity style={styles.button} title="Sign Up" //Need to move to new page
            onPress={() => navigation.navigate("Sign Up")}>
              <AntDesign name="adduser" size={24} color="black"/>
              <Text style={styles.buttontextinout}> Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} title="Sign Up" //Need to move to new page
            onPress={() => navigation.navigate("Sign In")}>
              <FontAwesome name="sign-in" size={24} color="black"/>
              <Text style={styles.buttontextinout}> Sign In </Text>
          </TouchableOpacity>
        </View> 
      </View>
      } 
    </View>
  );
}

const styles=StyleSheet.create({
  navigation: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // loggedIn
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:  'center',
    backgroundColor: "#fff",
  },
  topContainer: {
    flex: 1,
    top: 50,
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
  usernameText: {
    color: "#FD0D39",
    fontFamily: "Helvetica",
    fontSize:15,
    paddingBottom: 30,
  },
  bottomContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent:'center',
    width: 360,
    height: 450,
    borderRadius:50,
    top:50,
    borderWidth:0.25,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 6,
    shadowOpacity: 0.2
  },
  userDetailBox: {
    alignItems: "center",
    flexDirection: "column",
    flex:0.8,
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
  signoutplacement: {
    alignItems:'center'
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
  buttontextinout: {
    fontSize: 20,
    color:'white'
  },
  // loggedOut
  notificationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  notificationText: {
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 30
  },
  notificationBodyText: {
    paddingBottom: 30,
    fontFamily: "Helvetica",
    fontSize: 20
  },
})