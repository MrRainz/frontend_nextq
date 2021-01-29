import styles from '../styles.js';
import React from 'react';
import { Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

export default function Homepage({navigation}) {
    return (
      <View style={styles.container}>
      <Text>Homepage</Text>
      <Button
        title="Go to Profilepage"
        onPress={() => navigation.navigate('Profile')}
      />
      </View>
    );
  }