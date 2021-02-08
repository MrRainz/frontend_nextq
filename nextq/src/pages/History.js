import axios from 'axios';
import { Card } from 'react-native-elements';
import { Auth } from '../components/context.js';
import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, SafeAreaView, View, ScrollView, StatusBar, RefreshControl } from 'react-native';

export default function History() {

  // Pass states from setAllState @ App.js using Context & Memo.
  const { userID, jwt } = useContext(Auth); 

  // History
  const [history, sethistory] = useState([])
  
  // useEffect(() => {    
  //   axios.get(`https://nextq.herokuapp.com/api/v1/history/${userID}/user/all`,
  //   {
  //     headers: {
  //       "Authorization" : "Bearer " + jwt
  //     }
  //   })
  //   .then (result => {
  //   console.log(result)
  //   sethistory([...result.data])
  //   })
  //   .catch (error => {
  //     console.log('ERROR: ',error)
  //   })
  // },[])

  // Refreshing extract from react native doc @ RefreshControl https://reactnative.dev/docs/refreshcontrol
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get(`https://nextq.herokuapp.com/api/v1/history/${userID}/user/all`,
    {
      headers: {
        "Authorization" : "Bearer " + jwt
      }
    })
    .then (result => {
    console.log(result)
    sethistory([...result.data])
    })
    .catch (error => {
      console.log('ERROR: ',error)
    });
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar barStyle='dark-content'/>
      {/* <ScrollView style={{height:"100%"}} 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />}
      > */}
      <View style={styles.container}>
        <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
            />
          }
        >
          { history.map(historydata => (
            <Card containerStyle={styles.card}>
              <View style={styles.cardcont}>
                <Entypo name="location" size={35} color="black" style={{margin:2}}/>
              <View style={styles.cardtext}>
                <View style={styles.detail}> 
                  <Entypo name="shop" size={18} color="black"/> 
                  <Text style={styles.detailtext}>Store: {historydata.name}</Text>
                </View>
                <View style={styles.detail}>
                  <Entypo name="location" size={18} color="black"/> 
                  <Text style={styles.detailtext}>Location: {historydata.location}</Text>
                </View>
                <View style={styles.detail}>
                  <Ionicons name="enter-outline" size={18} color="black" /> 
                  <Text style={styles.detailtext}>Time in: {historydata.time_in} </Text>
                </View>
                <View style={styles.detail}>
                  <Ionicons name="exit-outline" size={18} color="black" /> 
                  <Text style={styles.detailtext}>Time out: {historydata.time_out} </Text>
                </View>
              </View>
            </View>
          </Card>
          ))}
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles= StyleSheet.create({
  safecontainer: {
    flex:1,
    backgroundColor:'black'
  },
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  card: {
    height:100,
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
  cardcont: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardtext: {
    flex:1,
    height:50,  
    justifyContent:'center'
  },
  detail: {
    flexDirection:'row',
    margin:2,
  },
  detailtext: {
    fontStyle:'italic'
  }
})