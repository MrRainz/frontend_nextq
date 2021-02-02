import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from '@react-navigation/native';
import { Button } from 'react-native';

import { Ionicons, AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

import Profilepage from "../pages/Profilepage.js";
import Home from '../pages/Homepage.js';
import Checkin from '../pages/Checkinpage.js';
import onCamera from "../pages/Camera.js";
import Shoppage from '../pages/Shoppage.js';
import Signup from "../pages/SignUpForm.js";
import Signin from "../pages/SignInForm.js";

const Stack = createStackNavigator();

const HomeStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ 
          title: <Ionicons name="home" size={18} color="black"> Home </Ionicons>,
          headerLeft: () => (
            <Button onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} title="Nav"/>
            ),
          }}/>
      <Stack.Screen name="Profile" component={Profilepage} options={{ title: <AntDesign name="profile" size={18} color="black"> Profile </AntDesign> }} />
    </Stack.Navigator>
  );
}

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={Shoppage} options={{ title: <Entypo name="shop" size={18} color="black"> Shop </Entypo> }}/>
    </Stack.Navigator>
  )
}

const CheckInStackNavigator =() => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Check In" component={Checkin} options={{ title: <Ionicons name="scan" size={18} color="black"> Check In </Ionicons> }}/>
      <Stack.Screen name="Camera" component={onCamera} options={{ title: <Entypo name="camera" size={18} color="black"> Camera </Entypo> }}/>
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profilepage} options={{ title: <AntDesign name="user" size={18} color="black"> Profile </AntDesign> }} />
      <Stack.Screen name="Sign Up" component={Signup} options={{ title: <AntDesign name="adduser" size={18} color="black"> Sign Up </AntDesign> }}/>
      <Stack.Screen name="Sign In" component={Signin} options={{ title: <FontAwesome name="sign-in" size={18} color="black"> Sign In </FontAwesome> }}/>
    </Stack.Navigator>
  );
}

export { HomeStackNavigator, ShopStackNavigator, CheckInStackNavigator, ProfileStackNavigator  };