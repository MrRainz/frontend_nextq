import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, StatusBar} from 'react-native';

export default function onCamera({navigation}) {

  const [scanned, setScanned] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [flashtype, flashsetType] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
              <TouchableOpacity onPress={() => setScanned(false)}>
                <Image
                  style={styles.qr}
                  source={require('../Images/qr4.png')}
                />
              </TouchableOpacity>
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