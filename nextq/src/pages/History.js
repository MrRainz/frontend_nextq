import axios from 'axios';
import { Entypo } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { Auth } from '../components/context.js';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, StatusBar, RefreshControl } from 'react-native';

export default function History() {

  // Pass states from setAllState @ App.js using Context & Memo.
  const { userID } = useContext(Auth); 

  // Refreshing extract from react native doc @ RefreshControl https://reactnative.dev/docs/refreshcontrol
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userID}`)
    .then (result => {
    console.log(result)
    setuserimages([...result.data])
    })
    .catch (error => {
      console.log('ERROR: ',error)
    });
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // History
  const [userimages, setuserimages] = useState([])

  // useEffect(() => {    
  //   axios.get(`https://insta.nextacademy.com/api/v2/images?userId=${userID}`)
  //   .then (result => {
  //   console.log(result)
  //   setuserimages([...result.data])
  //   })
  //   .catch (error => {
  //     console.log('ERROR: ',error)
  //   })
  // },[])
  // console.log(userimages)

  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar barStyle='dark-content'/>
      <ScrollView style={styles.container} 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
      >
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
      </ScrollView>
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