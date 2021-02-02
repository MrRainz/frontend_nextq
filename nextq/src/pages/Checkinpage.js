import styles from '../../styles.js';
import React from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Checkin({navigation}) {
    return (
      <View style={styles.container}>
      <Text>Check In</Text>
      <Button
        title="Check In"
        onPress={() => navigation.navigate('Camera')}
      />
      </View>
    );
  }