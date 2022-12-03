import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Pessoal from './src/pages/Pessoal';
import Formacao from './src/pages/Formacao';
import Exp from './src/pages/Exp';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#000',
            borderBottomColor: '#fff',
            borderWidth: 1
          },
          labelStyle: {
            fontSize: 15
          },
          activeTintColor: '#FFF'
        }}
      >


        <Tab.Screen name="Pessoal" component={Pessoal}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="person" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen name="Formação" component={Formacao}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="school" color={color} size={size} />
            ),
          }} />

        <Tab.Screen name="Experiência" component={Exp}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="briefcase" color={color} size={size} />
            ),
          }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
