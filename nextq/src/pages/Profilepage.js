import styles from '../../styles.js';
import React, {useState, useEffect} from 'react';
import { Text, View, Button } from 'react-native';

export default function Profilepage({navigation}) {
    return (
      <View style={styles.container}>
      <Text>Profile Page</Text>
      <Button title="Sign Up"
        onPress={() => navigation.navigate('Sign Up')}/>
      <Button title="Sign In"
        onPress={() => navigation.navigate('Sign In')}/>
      </View>
    );
  }