import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import { Camera } from 'expo-camera';
import { Entypo } from '@expo/vector-icons';

export default function onCamera({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [flashtype, flashsetType] = useState(Camera.Constants.FlashMode.off);
  const [scanned, setScanned] = useState(false);

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
      <Camera flashMode={flashtype} 
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.camera]}>
        <View style={styles.view}>
            { scanned && 
            <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                <Text style={styles.text}>Tap to Scan Again</Text>
            </TouchableOpacity> }
            <Image
                style={styles.qr}
                source={require('../Images/qr4.png')}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Check In')}>
                <Text style={styles.text}>Cancel</Text>
            </TouchableOpacity>
        </View>
        <Entypo style={styles.entypo} name="flashlight" size={32} color="white" onPress={() => {
                flashsetType(
                    flashtype === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.torch
                    : Camera.Constants.FlashMode.off
            )}}/>
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
  button: {
    flex: 0.1,
    alignItems:'center',
    color:'white',
    backgroundColor: 'transparent'
  },
  view: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
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