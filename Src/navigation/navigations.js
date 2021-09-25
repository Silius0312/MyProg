import React from 'react';
import { Home } from '../Screens/Home';

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
            name="WorkOut"
            component={Home}
            options={{ title: 'Welcome Home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
