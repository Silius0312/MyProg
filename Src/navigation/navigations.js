import React from 'react';
import { Home } from '../Screens/Home';
import { Screen1 } from '../Screens/Screen1';
import { Screen2 } from '../Screens/Screen2';
import { Screen3 } from '../Screens/Screen3';
import { Screen4 } from '../Screens/Screen4';
import { Screen5 } from '../Screens/Screen5';

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
            options={{ title: 'Welcome Screen 1' }} 
        />

        <Stack.Screen 
            name="Screen2" 
            component={Screen2}
            options={{ title: 'Welcome Screen2' }} 
        />

        <Stack.Screen 
            name="Screen3" 
            component={Screen3}
            options={{ title: 'Welcome Screen3' }} 
        />
        <Stack.Screen
            name="Screen4"
            component={Screen4}
            options={{ title: 'Welcome Screen4' }}
        />
        <Stack.Screen
            name="Screen5"
            component={Screen5}
            options={{ title: 'Welcome Screen5' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
