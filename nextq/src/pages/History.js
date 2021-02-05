import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import { Card } from 'react-native-elements'
import { Entypo } from '@expo/vector-icons';
import { Auth } from '../components/context.js';

export default function History() {

  const { loggedIn } = useContext(Auth);
  const [userimages, setuserimages] = useState([])

  useEffect(() => {    
    axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${1}`)
    .then (result => {
    console.log(result)
    setuserimages([...result.data])
    })
    .catch (error => {
      console.log('ERROR: ',error)
    })
  },[])
  console.log(userimages)

  return (
    <ScrollView style={styles.container}>
      { userimages.map(image => (
        <Card containerStyle={{
          borderRadius:25,
          borderWidth:0.25,
          shadowOffset: {
            width: 5,
            height: 5
          },
          shadowRadius: 6,
          shadowOpacity: 0.2
        }} key={image.id}>
          <View style={styles.cardcont}>
            <Entypo name="location" size={35} color="black" style={{margin:10}}/>
          <View style={styles.cardtext}>
            <Text> Location: </Text>
            <Text> Time: </Text>
          </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardcont :{
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardtext: {
    flex:1,
    height:50,  
    justifyContent:'space-between'
  }
})