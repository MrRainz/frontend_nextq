import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();


const BottomNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Shop" component={HomeStackNavigator}/>
      <Tab.Screen name="Scan" component={HomeStackNavigator}/>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

const ProfileNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Shop" component={HomeStackNavigator}/>
      <Tab.Screen name="Scan" component={HomeStackNavigator}/>
    </Tab.Navigator>
  );
};

export { BottomNavigator, ProfileNavigator };