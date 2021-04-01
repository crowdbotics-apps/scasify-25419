import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import UserProfile221131Navigator from '../features/UserProfile221131/navigator';
import Settings221130Navigator from '../features/Settings221130/navigator';
import Settings221128Navigator from '../features/Settings221128/navigator';
import SignIn2221126Navigator from '../features/SignIn2221126/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
UserProfile221131: { screen: UserProfile221131Navigator },
Settings221130: { screen: Settings221130Navigator },
Settings221128: { screen: Settings221128Navigator },
SignIn2221126: { screen: SignIn2221126Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
