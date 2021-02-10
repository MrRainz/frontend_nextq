import axios from 'axios';
import * as React from 'react';
import { Entypo, FontAwesome } from '@expo/vector-icons'; 
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TextInput, Switch, StatusBar, RefreshControl } from 'react-native';

export default function Shoppage() {
  
  // Shops
  const [shops, setshops] = React.useState([])

  React.useEffect(() => {    
    axios.get(`https://nextq.herokuapp.com/api/v1/stores/all`)
    .then (result => {
    setshops([...result.data])
    })
    .catch (error => {
      console.log('ERROR: ',error)
    })
  },[])
  
  // Refreshing extract from react native doc @ RefreshControl https://reactnative.dev/docs/refreshcontrol
  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    axios.get(`https://nextq.herokuapp.com/api/v1/stores/all`)
    .then (result => {
    setshops([...result.data])
    })
    .catch (error => {
      console.log('ERROR: ',error)
    })
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // Filter data ( convert shop.name/location into lower case allow insensitive case search )
  const [filterdata, setfilterdata] = React.useState("")
  const filtername = shops.filter(shop => shop.name.toLowerCase().match(filterdata.toLowerCase()))
  const filterlocation = shops.filter(shop => shop.location.toLowerCase().match(filterdata.toLowerCase()))

  // Switch button
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState); 

  return (
    <SafeAreaView style={styles.safecontainer}>
      <StatusBar barStyle='dark-content'/>
      <ScrollView style={styles.refresh}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.container}>
          <View style={styles.map}>
            <View style={styles.search}>
              <FontAwesome name="search" size={24} color="black" style={styles.icon}  />
              { isEnabled
              ? 
              <TextInput clearButtonMode='while-editing' style={styles.textinput} value={filterdata} placeholder="Search by location" onChangeText={text => setfilterdata(text)}/>
              :
              <TextInput clearButtonMode='while-editing' style={styles.textinput} value={filterdata} placeholder="Search by name" onChangeText={text => setfilterdata(text)}/>
              }
              <Switch onValueChange={toggleSwitch} value={isEnabled}/>
            </View>
              <ScrollView contentContainerStyle={{alignItems:'center'}}>
              { isEnabled
              ? 
              filterlocation.map(shop => (    
                <View key={shop.id} style={styles.shopcard}>
                  <View style={styles.shopimageplacement}>
                    <Image style={styles.shopimage} source={{uri:shop.image}}/>
                  </View>
                  <View style={styles.shoptextplacement}>
                    <View style={styles.shopflex}>
                      <Entypo name="shop" size={20} color="black" style={styles.icon}/>
                      <Text style={styles.shopname}> {shop.name}</Text>
                    </View> 
                    <View style={styles.shopflex}>
                      <Entypo name="location" size={20} color="black" style={styles.icon}/>
                      <Text style={styles.shopplocation}> {shop.location}</Text>
                    </View>
                    <View style={styles.shopqueueplacement}>
                      <View style={styles.queuedisplay}>
                        <Text style={styles.queuetext}>Customer limit:</Text>
                        <FontAwesome name="user-times" size={20} color="black" style={styles.icon} >: {shop.customer_limit}</FontAwesome>
                      </View>
                      <View style={styles.queuedisplay}>
                        <Text style={styles.queuetext}>Headcount:</Text>
                        <FontAwesome name="users" size={20} color="black" style={styles.icon} >: {shop.headcount}</FontAwesome>
                      </View>
                      <View style={styles.queuedisplay}>
                        <Text style={styles.queuetext}>Queue:</Text>
                        <FontAwesome name="user" size={20} color="black" style={styles.icon}>: {shop.queue}</FontAwesome>
                      </View>
                    </View>
                  </View>
                </View>
              ))
              : 
              filtername.map(shop => (    
                <View key={shop.id} style={styles.shopcard}>
                  <View style={styles.shopimageplacement}>
                    <Image style={styles.shopimage} source={{uri:shop.image}}/>
                  </View>
                  <View style={styles.shoptextplacement}>
                    <View style={styles.shopflex}>
                      <Entypo name="shop" size={20} color="black" style={styles.icon}/>
                      <Text style={styles.shopname}> {shop.name}</Text>
                    </View> 
                    <View style={styles.shopflex}>
                      <Entypo name="location" size={20} color="black" style={styles.icon}/>
                      <Text style={styles.shopplocation}> {shop.location}</Text>
                    </View>
                    <View style={styles.shopqueueplacement}>
                      <View style={styles.queuedisplay}>
                        <Text style={styles.queuetext}>Customer limit:</Text>
                        <FontAwesome name="user-times" size={20} color="black" style={styles.icon} >: {shop.customer_limit}</FontAwesome>
                      </View>
                      <View style={styles.queuedisplay}>
                        <Text style={styles.queuetext}>Headcount:</Text>
                        <FontAwesome name="users" size={20} color="black" style={styles.icon} >: {shop.headcount}</FontAwesome>
                      </View>
                      <View style={styles.queuedisplay}>
                        <Text style={styles.queuetext}>Queue:</Text>
                        <FontAwesome name="user" size={20} color="black" style={styles.icon}>: {shop.queue}</FontAwesome>
                      </View>
                    </View>
                  </View>
                </View>
              ))
              }
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: "white",
  },
  refresh: {
    backgroundColor:'white'
  },
  container: {
    flex:1,
    backgroundColor:'white',
    alignItems: "center",
  },
  map: {
    flex:1, 
    width: "100%"
  },
  search: { 
    height:40,
    width:"80%",
    alignSelf:'center', 
    alignItems:'center', 
    justifyContent:'space-between', 
    flexDirection:'row', 
    borderWidth:0.5, 
    borderColor:'grey', 
    borderRadius:15, 
    margin:5
  },
  textinput: {
    flex:1,
    height:"80%"
  },
  shopcard: {
    height: 125,
    width: "90%",
    borderRadius: 20,
    margin:10,
    backgroundColor: "#C4C4C4",
    flexDirection:'row',
  },
  shopimageplacement: {
    alignItems:'center', 
    justifyContent:'center'
  },
  shopimage: {
    width: 105,
    flex:1,
    borderRadius: 20,
    margin:5,
  },
  shoptextplacement: { 
    flex:1, 
  },
  shopflex: {
    flexDirection:'row', 
    alignItems:'center'
  },
  icon: {
    margin:3
  },
  shopname:{
    fontSize: 18,
    fontStyle:'italic', 
    fontWeight:'400', 
    margin:2
  },
  shopplocation: { 
    fontSize:16, 
    fontStyle:'italic', 
    margin:2,
  },
  shopqueueplacement:{
    flex:1, 
    flexDirection:'row'
  },
  queuedisplay: {
    flex:1, 
    justifyContent:'space-between'
  },
  queuetext: {
    fontSize:12, 
    fontStyle:'italic', 
    margin:2
  },
})