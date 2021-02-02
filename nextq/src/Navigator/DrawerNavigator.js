import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomNavigator } from "./BottomNavigator.js";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator