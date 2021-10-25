import React from 'react';

import { Workout } from '../Screens/Workout';
import { AddWork } from '../Screens/AddWork';

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
            name="AddWork"
            component={AddWork}
            options={{ title: 'Добавить упражнения' }}
        />        
        </Stack.Navigator>
    </NavigationContainer>
  );
};
