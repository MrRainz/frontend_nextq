import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, Image } from 'react-native';
import styles from '../../styles.js';
import Home from "../Homepage.js";
import Profilepage from "../Profilepage.js";
import 'react-native-gesture-handler';
import { DrawerActions } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{
          headerLeft: () => (
            <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} title="Nav"></Button>
            ),
            }}/>
      <Stack.Screen name="Profile" component={Profilepage} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profilepage} />
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, ProfileStackNavigator };