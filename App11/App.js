import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';
 
const Stack = createStackNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de Conta" component={Home} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
