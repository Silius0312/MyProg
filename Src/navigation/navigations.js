import React from 'react';
import { First } from '../components/first';
import { Workout } from '../Screens/Workout';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Главная"
            component={First}
            options={{ title: 'Welcome на Главную' }}
        />
        <Stack.Screen
            name="Workout"
            component={Workout}
            options={{ title: 'Упражнения' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
