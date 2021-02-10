import axios from 'axios';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import { Auth } from '../components/context.js';
import React, { useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, StatusBar} from 'react-native';

export default function onCamera({navigation}) {

  // Pass states from setAllState @ App.js using Context & Memo.
  const { jwt, userID } = useContext(Auth);
  
  // Store check in data
  const storeCheckInStore = async (storeData) => {
    try {
      // The keyword await makes JavaScript wait until that promise settles and returns its result.
      await AsyncStorage.setItem('store', storeData);
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }

  // Checkout
  const removeCheckInData = async() => {
    try {
      await AsyncStorage.removeItem('store') ;
    } catch (error) {
      console.log('AsyncStorage error: ' + error.message);
    }
  }
  
  // Camera QR code example @ https://docs.expo.io/versions/latest/sdk/camera/
  const [scanned, setScanned] = useState(false); // QR Scan @ <Camera> onBarCodeScanned 
  const [hasPermission, setHasPermission] = useState(null); // Permission to allow use of camera from device 
  const [flashtype, flashsetType] = useState(Camera.Constants.FlashMode.off); // Allow flashing @ <Camera> flashMode

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);
    alert(`QR code has been scanned!`);
    axios.post(`https://nextq.herokuapp.com/api/v1/history/${userID}/user/${data}`,
    { "Hello" : "World"},
    {
      headers: {
        "Authorization" : "Bearer " + jwt
      }
    })
    .then(result => {
      console.log(result.data)
      if (Object.keys(result.data).length == 1) {
        alert("User is not checked out from previous store! \n Please checkout from the previous store!")
      } else if (Object.keys(result.data).length == 4) {
        storeCheckInStore(result.data.store)
        console.log(result.data.store)
        navigation.navigate('Scan')
        alert("Checked In")
      } else {
        removeCheckInData()
        navigation.navigate('Scan')
        alert("Checked Out!")
      }
        
      
    })
    .catch(error => {
      alert("Error Invalid QR code");
      console.log("Error:" ,error)
    }) 
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle='dark-content'/>
      <Camera flashMode={flashtype} 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.camera]}>
        <View style={styles.view}>
            <View style={styles.cameratext}>
            { scanned && 
              <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                <Text style={styles.text}>Tap to Scan Again</Text>
              </TouchableOpacity> }
            </View>
            <View style={styles.cameraqr} >
              { scanned 
              ? <TouchableOpacity onPress={() => setScanned(false)}>
                  <Image
                    style={styles.qr}
                    source={require('../Images/qr4.png')}
                  />
                </TouchableOpacity>
              : <Image
                  style={styles.qr}
                  source={require('../Images/qr4.png')}
                />
              }
            </View>
            <View style={styles.cameratext}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.text}>Cancel</Text>
              </TouchableOpacity>
            </View>
        </View>
        <Entypo style={styles.entypo} name="flashlight" size={32} color="white" 
          onPress={() => {
            flashsetType(
              flashtype === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.torch
                : Camera.Constants.FlashMode.off
            )
          }}
        />
      </Camera>
    </View>
  );
}

const { width } = Dimensions.get('window')
const qrSize = width * 0.7

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex:1,
  },
  view: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  cameratext: {
    flex:0.2, 
    justifyContent:'center', 
  },
  button: {
    justifyContent:'center'
  },
  cameraqr:{
    flex:0.5,
    justifyContent:'center'
  },
  qr: {
    backgroundColor:'transparent',
    width: qrSize,
    height: qrSize,
  },
  text: {
    fontSize:20,
    color:'white',
  },
  entypo: {
    alignSelf:'flex-start',
  }
});