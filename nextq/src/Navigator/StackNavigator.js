import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons, AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Profilepage from "../pages/Profilepage.js";
import Home from '../pages/Homepage.js';
import Checkin from '../pages/Checkinpage.js';
import onCamera from "../pages/Camera.js";
import Shoppage from '../pages/Shoppage.js';
import Shopdetail from "../pages/Shopdetail.js";
import Signup from "../pages/SignUpForm.js";
import Signin from "../pages/SignInForm.js";
import History from "../pages/History.js";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ title: <Ionicons name="home" size={18} color="black"> Home </Ionicons> }} />
      <Stack.Screen name="Sign In" component={Signin} options={{ title: <FontAwesome name="sign-in" size={18} color="black"> Sign In </FontAwesome> }} />
      <Stack.Screen name="Sign Up" component={Signup} options={{ title: <AntDesign name="adduser" size={18} color="black"> Sign Up </AntDesign> }} />
    </Stack.Navigator>
  );
}

const ShopStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shop" component={Shoppage} options={{ title: <Entypo name="shop" size={18} color="black"> Shop </Entypo> }}/>
      <Stack.Screen name="Shopdetail" component={Shopdetail} />
    </Stack.Navigator>
  )
}

const ShopdetailStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Shopdetail" component={Shopdetail} />
    </Stack.Navigator>
  );
}

const CheckInStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Check In" component={Checkin} options={{ title: <Ionicons name="scan" size={18} color="black"> Check In </Ionicons> }} />
      <Stack.Screen name="Camera" component={onCamera} options={{ title: <Entypo name="camera" size={18} color="black"> Camera </Entypo> }} />   
      <Stack.Screen name="Sign In" component={Signin} options={{ title: <FontAwesome name="sign-in" size={18} color="black"> Sign In </FontAwesome> }} />   
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profilepage} options={{ title: <AntDesign name="user" size={18} color="black"> Profile </AntDesign> }} />
      <Stack.Screen name="Sign Up" component={Signup} options={{ title: <AntDesign name="adduser" size={18} color="black"> Sign Up </AntDesign> }} />
      <Stack.Screen name="Sign In" component={Signin} options={{ title: <FontAwesome name="sign-in" size={18} color="black"> Sign In </FontAwesome> }} />
    </Stack.Navigator>
  );
}

const HistoryStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="History" component={History} options={{ title: <MaterialCommunityIcons name="history" size={18} color="black"> History </MaterialCommunityIcons> }} />
    </Stack.Navigator>
  )
}

export { HomeStackNavigator, ShopStackNavigator, ShopdetailStackNavigator, CheckInStackNavigator, ProfileStackNavigator, HistoryStackNavigator };