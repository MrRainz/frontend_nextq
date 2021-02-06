import React, { useContext } from 'react';
import { Card } from 'react-native-elements'
import { Auth } from '../components/context.js';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

export default function Checkin({navigation}) {

  const { loggedIn } = useContext(Auth);

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Card containerStyle={styles.card}>
          { 
          loggedIn 
          ? <View style={styles.cardtext}>
              <Text style={styles.user}>
                User
              </Text>
              <Text style={styles.mobile}>
                Mobile:123123
              </Text>
            </View>
          : <View style={styles.cardtext}> 
              <Text style={styles.welcometext}>
                Welcome back!
              </Text>
              <Text style={styles.descriptiontext}>
                Please sign in if you are an exisitng user to enjoy the features
              </Text>
            </View>
          }
        </Card>
        <View style={styles.qrcode}>
          <MaterialCommunityIcons name="qrcode-scan" size={150} color="black" />
        </View>
        { 
        loggedIn 
        ? <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.buttontext}>
              SCAN
            </Text>
          </TouchableOpacity>
        : <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Text style={styles.buttontext}>
              SCAN
            </Text>
          </TouchableOpacity> 
        }
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex:1,
    backgroundColor:'black'
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  card :{
    flex:0.3,
    width:'80%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    borderWidth:0.25,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 6,
    shadowOpacity: 0.2
  },
  cardtext: {
    justifyContent:'center',
    width:'100%', 
  },
  user: {
    fontSize:20,
    textAlign:'center',
  },
  mobile: {
    fontSize:16,
    textAlign:'center',
  },
  welcometext: {
    fontSize:25,
    margin:5,
    textAlign:'center'
  },
  descriptiontext: {
    fontSize:16,
    textAlign:'center'
  },
  qrcode: {
    flex:0.4,
    justifyContent:'center'
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    width: '40%',
    height: "7.5%",
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
  color:'white',
  fontSize:20
  },
})