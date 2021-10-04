import React from 'react';
import { First } from '../components/first';
import { Workout } from '../Screens/Workout';
import { Gym } from '../Screens/Workout/Gym';
import { Turnik } from '../Screens/Workout/Turnik';
import { Nogi } from '../Screens/Workout/Nogi';
import { Plechi } from '../Screens/Workout/Plechi';
import { Press } from '../Screens/Workout/Press';


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
        <Stack.Screen
            name="Gym"
            component={Gym}
            options={{ title: 'Gym' }}
        />
        <Stack.Screen
            name="Turnik"
            component={Turnik}
            options={{ title: 'Turnik' }}
        />
        <Stack.Screen
            name="Plechi"
            component={Plechi}
            options={{ title: 'Plechi' }}
        />
        <Stack.Screen
            name="Nogi"
            component={Nogi}
            options={{ title: 'Nogi' }}
        />
        <Stack.Screen
            name="Press"
            component={Press}
            options={{ title: 'Press' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
