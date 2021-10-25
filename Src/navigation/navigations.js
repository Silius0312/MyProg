import React from 'react';

import { Workout } from '../Screens/Workout';
import { Journal } from '../Screens/Journal';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>        
        <Stack.Screen
            name="Workout"
            component={Workout}
            options={{ title: 'Упражнения' }}
        />
        <Stack.Screen
            name="Journal"
            component={Journal}
            options={{ title: 'Дневник' }}
        />        
        </Stack.Navigator>
    </NavigationContainer>
  );
};
