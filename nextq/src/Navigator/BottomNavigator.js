import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { HomeStackNavigator, ProfileStackNavigator, CheckInStackNavigator, ShopStackNavigator, HistoryStackNavigator } from "./StackNavigator";
import { Auth } from '../components/context.js';

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {

  const { loggedIn } = useContext(Auth);

  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'lightgrey' }} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size=25 }) => {
        if (route.name === 'Home') {
          return (
            <Ionicons
              name={ focused ? 'home' : 'home-outline' }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Shops') {
          return (
            <Entypo
              name={ focused ? 'shop' : 'shop' }
              size={ size }
              color={ color }
            />
          );
        } else if (route.name === 'Scan') {
          return (
            <Ionicons
              name={ focused ? 'scan' : 'scan-outline' }
              size={ size }
              color={ color }
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <AntDesign
              name={ focused ? 'user' : 'user' }
              size={ size }
              color={ color }
              />
          );
        } else if (route.name === 'History') {
          return (
            <MaterialCommunityIcons
              name={ focused ? 'history' : 'history' }
              size={ size }
              color={ color }
              />
          );
        }
      }
    })}> 
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Shops" component={ShopStackNavigator}/>
      <Tab.Screen name="Scan" component={CheckInStackNavigator}/>
      { 
      loggedIn 
      ? <Tab.Screen name="History" component={HistoryStackNavigator}/> 
      : null
      }
      <Tab.Screen name="Profile" component={ProfileStackNavigator}/>
    </Tab.Navigator>
  );
};

export { BottomNavigator } 