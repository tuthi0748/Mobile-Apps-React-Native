import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
const Drawer = createDrawerNavigator();
 
import Home from './src/pages/Home';
import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Exp from './src/pages/Exp';
 
import CustomDrawer from './src/components/CustomDrawer';
 
export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator
    drawerContent={CustomDrawer}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Pessoal" component={Pessoal} />
      <Drawer.Screen name="Formação" component={Formacao} />
      <Drawer.Screen name="Experiência" component={Exp} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
