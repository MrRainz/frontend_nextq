import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import 'react-native-gesture-handler';

export default function Checkin({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardtext}>
          <Text style={styles.user}> User </Text>
          <Text style={styles.mobile}> Mobile:123123 </Text>
        </View>
      </View>
      <View style={styles.qrcode}>
        <MaterialCommunityIcons name="qrcode-scan" size={200} color="black" />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
        <Text style={styles.buttontext}> SCAN </Text>
      </TouchableOpacity>
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
    flex: 0.5,
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
  card: {
    flex:0.3,
    width:'80%',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:25,
    borderWidth:0.25,
    borderColor:'grey',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 6,
    shadowOpacity: 0.2
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