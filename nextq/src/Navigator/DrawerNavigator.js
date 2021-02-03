import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomNavigator } from "./BottomNavigator.js";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({loggedIn, setLoggedIn}) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomNavigator} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator