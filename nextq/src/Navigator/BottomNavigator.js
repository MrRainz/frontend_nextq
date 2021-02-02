import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
import { HomeStackNavigator, ProfileStackNavigator, CheckInStackNavigator, ShopStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Home') {
          return (
            <Ionicons
              name={ focused ? 'home' : 'home-outline' }
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Shop') {
          return (
            <Entypo
              name={ focused ? 'shop' : 'shop' }
              size={ size }
              color={ color }
            />
          );
        } else if (route.name === 'Check In') {
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
        }
      }
      })
      }>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Shop" component={ShopStackNavigator}/>
      <Tab.Screen name="Check In" component={CheckInStackNavigator}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

export { BottomNavigator };