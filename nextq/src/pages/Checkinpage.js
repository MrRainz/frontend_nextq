import axios from 'axios';
import { Card } from 'react-native-elements';
import { Auth } from '../components/context.js';
import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { MaterialCommunityIcons, Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, StatusBar, ScrollView, RefreshControl } from 'react-native';

export default function Checkin({navigation}) {

  // Pass states from setAllState @ App.js using Context & Memo.
  const { loggedIn, userID } = useContext(Auth); 

  // Checked In status
  const [ checkedIN, setcheckedIN ] = useState()

  // Save store name
  const [ storeName, setStoreName ] = useState("")

  // Store check in data  
  const retrieveCheckInStore = async () => {
    try {
      // The keyword await makes JavaScript wait until that promise settles and returns its result.
      const store = await AsyncStorage.getItem('store');
      if (store == null) {
        setStoreName("")
        setcheckedIN(false)
      } else {
        setStoreName(store)
        setcheckedIN(true)
      }
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
      }
    }

  retrieveCheckInStore();
  
  // Queue number
  const [ queue, setqueue ] = useState("")

  useEffect(() => {    
    const getQ = async() => {
      const id = await AsyncStorage.getItem('userID');
      axios.get(`https://nextq.herokuapp.com/api/v1/queue/${id}`)
      .then (result => {
        setqueue(result.data)
      })
      .catch (error => {
        console.log('ERROR: ',error)
      })
    }
    getQ();
  },[])

  // Refreshing extract from react native doc @ RefreshControl https://reactnative.dev/docs/refreshcontrol
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get(`https://nextq.herokuapp.com/api/v1/queue/${userID}`)
    .then (result => {
      setqueue(result.data)
    })
    .catch (error => {
      console.log('ERROR: ',error)
    })
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Allow whenever return to this page refresh the screen. Doc @ https://reactnavigation.org/docs/navigation-events/#navigationaddlistener
  // Example @ https://reactnativeforyou.com/how-to-make-the-screen-refresh-when-navigating-back-in-react-native/
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setRefreshing(true)
      setRefreshing(false)
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar barStyle='dark-content'/>
      <ScrollView contentContainerStyle={styles.refresh}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.container}>
          <Card containerStyle={styles.card}>
            { loggedIn 
            ? 
            <View style={styles.cardtext}>
              { checkedIN
              ?
              <View>
                { queue == "0"
                ? 
                <Text style={styles.queue}>
                  <Entypo name="shop" size={30} color="black"> {storeName} </Entypo>
                  {"\n"}
                  <FontAwesome name="user" size={30} color="black">: {queue} </FontAwesome>
                  {"\n"}
                  It's your turn!
                  {"\n"}
                  Please go ahead to your favourite store!
                </Text>
                : 
                <Text style={styles.queue}>
                  <Entypo name="shop" size={30} color="black"> {storeName} </Entypo>
                  {"\n"}
                  <FontAwesome name="user" size={30} color="black">: {queue} </FontAwesome>
                  {"\n"}
                  {queue} number of people ahead of you!
                  {"\n"}
                  Please be patient!
                </Text>
                }
              </View>
              :
              <Text style={styles.queue}>
                Please be scan to check into queue!
              </Text>
              }
            </View>
            : 
            <View style={styles.cardtext}> 
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
          { loggedIn 
          ? 
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
            <Ionicons name="scan" size={25} color="white"/>
            <Text style={styles.buttontext}>
              SCAN
            </Text>
          </TouchableOpacity>
          : 
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign In')}>
            <Ionicons name="scan" size={25} color="white"/>
            <Text style={styles.buttontext}>
              SCAN
            </Text>
          </TouchableOpacity> 
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex:1,
    backgroundColor:'#fff'
  },
  refresh: {
    flex:1,
    backgroundColor: '#fff',
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
  queue: {
    fontSize:20,
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
    flexDirection:'row',
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
  margin:5,
  color:'white',
  fontSize:20
  },
})