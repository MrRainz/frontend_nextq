import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, SafeAreaView, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function Homepage({navigation}) {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>

        <View style={styles.headerContainer} >
          <Text style={styles.headerText}>
            Suria KLCC
          </Text>
        </View>

        <View style={styles.box} >
          <TouchableOpacity onPress={() => navigation.navigate('Shopdetail')}>
          <View>
            <Image style={styles.image} source={{uri:'https://maps.abuzzinteractive.net/klcc/api/v1.30/abuzz/media/storeinfoLogo/dest_1378.png'}} />
          </View>
          </TouchableOpacity>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Uniqlo
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              Uniqlo is a modern Japanese company that inspires the world to dress casually. From T-shirts and sweaters to denim..
            </Text>
          </Text>
        </View>

        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://maps.abuzzinteractive.net/klcc/api/v1.30/abuzz/media/storeinfoLogo/dest_1639.jpg'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Adidas Originals
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
            Adidas Originals carries a line of casual sports clothing, the heritage line of German sportswear brand...
            </Text>
          </Text>
        </View>

        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://maps.abuzzinteractive.net/klcc/api/v1.30/abuzz/media/storeinfoLogo/dest_1411.png'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Zara
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              One of the largest international fashion companies, this Spanish fashion retailer is known for its fashion-forward...
            </Text>
          </Text>
        </View>

        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://maps.abuzzinteractive.net/klcc/api/v1.30/abuzz/media/storeinfoLogo/dest_1377.png'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Vincci
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              Vincci and Vincci Accessories store carries one of the most extensive lines of shoes, bags and accessories from...
            </Text>
          </Text>
        </View>
        <View style={styles.headerContainer} >
          <Text style={styles.headerText}>
            The Gardens Mall
          </Text>
        </View>

        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://maps.abuzzinteractive.net/klcc/api/v1.30/abuzz/media/storeinfoLogo/dest_1615.png'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Armani Exchange
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              Armani Exchange is accessible Armani, inspired by street-chic culture, fashionable dance music and everything...
            </Text>
          </Text>
        </View>
        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://maps.abuzzinteractive.net/klcc/api/v1.30/abuzz/media/storeinfoLogo/dest_1669.png'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Guess
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              GUESS was established in 1981 by the Marciano brothers, who left the south of France in pursuit of the American dream...
            </Text>
          </Text>
        </View>
        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://thegardensmall.com.my/wp-content/uploads/2016/06/Store-Logo_BossHugoBoss-768x480.jpg'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Hugo Boss
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              The name denotes success, perfection and a style that transcends international borders. The HUGO BOSS brands...
            </Text>
          </Text>
        </View>
        <View style={styles.box}>
          <View>
            <Image  style={styles.image} source={{uri:'https://thegardensmall.com.my/wp-content/uploads/2016/06/logo-DTF-05-768x768.jpg'}} />
          </View>
          <Text style={styles.textContainer}>
            <Text style={styles.titleText}>
              Din Tai Fung
              {"\n"}
              {"\n"}
            </Text>
            <Text numberOfLines={4} style={styles.bodyText} >
              Din Tai Fung is the first non-pork restaurant by Din Tai Fung in Malaysia. Similar to Din Tai Fung, DIN by Din Tai...
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>

    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#111111",
    },
    scrollContentContainer: {
      alignItems: "center",
      paddingTop: 40,
      paddingBottom: 60
    },
    box: {
      height: 100,
      width: 350,
      borderRadius: 20,
      marginVertical: 5,
      backgroundColor: "#C4C4C4",
      alignItems: "center",
      justifyContent: "space-around",
      flexDirection: "row"
    },
  
    headerContainer: {
      flex: 1,
      flexDirection: "row",
      alignContent: "flex-start",
      marginTop: 100,
      marginBottom:20,
   
    },
  
    headerText:{
      color:  "#FFFFFF",
      fontSize: 20,
      fontWeight: "bold",
  
    },
  
    textContainer: {
      flex: 1,
      flexDirection:  "column",
      justifyContent: "center",
      fontFamily: "Cochin",
      margin: 8,
      width: 200,
      height: 80
    },
  
    titleText: {
      flex: 1,
      fontSize: 15,
      fontWeight: "bold",
      color: "#000",
    },
  
    bodyText: {
      flex: 1,
      fontSize: 14,
      color: "#000",
    },
  
    image: {
      width: 105,
      height: 100,
      borderRadius: 10,
      backgroundColor: "red",
      alignItems: "center",
    },

  });