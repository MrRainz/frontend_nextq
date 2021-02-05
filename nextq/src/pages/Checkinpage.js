import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Card } from 'react-native-elements'
import { Auth } from '../components/context.js';

export default function Checkin({navigation}) {

  const { loggedIn } = useContext(Auth);

  return (
    <View style={styles.container}>
      <Card containerStyle={{
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
            }}>
        <View style={styles.cardtext}>
          <Text style={styles.user}> User </Text>
          <Text style={styles.mobile}> Mobile:123123 </Text>
        </View>
      </Card>
      <View style={styles.qrcode}>
        <MaterialCommunityIcons name="qrcode-scan" size={200} color="black" />
      </View>
      { loggedIn 
      ? <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
          <Text style={styles.buttontext}> SCAN </Text>
        </TouchableOpacity>
      : <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
          <Text style={styles.buttontext}> SCAN </Text>
        </TouchableOpacity> 
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  cardtext: {
    flex: 1,
    justifyContent:'center',
    width:'100%', 
  },
  user: {
    flex:0.3,
    fontSize:20,
    textAlign:'center',
  },
  mobile: {
    flex:0.3,
    fontSize:16,
    textAlign:'center',
  },
  qrcode: {
    flex:0.4,
    justifyContent:'center'
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    width: 187,
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
  color:'white',
  fontSize:20
  },
})