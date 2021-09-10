import React from 'react';
import { Home } from '../Screens/Home';
import { Screen1 } from '../Screens/Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome Home' }}
        />
        
        <Stack.Screen 
            name="Screen1" 
            component={Screen1}
            options={{ title: 'Welcome Screen1' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
