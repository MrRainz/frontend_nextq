import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerActions } from '@react-navigation/native';
import { ProfileStackNavigator } from "./StackNavigator";
import { BottomNavigator, ProfileNavigator } from "./BottomNavigator.js";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigator} />
      <Drawer.Screen name="Profile" component={ProfileNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator