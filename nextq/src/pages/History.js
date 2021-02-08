import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { Auth } from '../components/context.js';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, StatusBar } from 'react-native';

export default function History() {

  const { loggedIn, userID } = useContext(Auth);
  const [userimages, setuserimages] = useState([])

  useEffect(() => {    
    axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userID}`)
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
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar barStyle='dark-content'/>
      <View style={styles.container}>
        <ScrollView>
          { userimages.map(image => (
            <Card containerStyle={styles.card} key={image.id}>
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
      </View>
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  safecontainer: {
    flex:1,
    backgroundColor:'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius:25,
    borderWidth:0.25,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 6,
    shadowOpacity: 0.2
  },
  cardcont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardtext: {
    flex:1,
    height:50,  
    justifyContent:'space-between'
  }
})