import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

export default function Shopdetail() {
    return (
      <View style={styles.container}>
        <Text>Shop Detail</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  })