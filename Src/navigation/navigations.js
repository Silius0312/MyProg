import React from 'react';
import { First } from '../components/first';
import { Workout } from '../components/Workout';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="First"
            component={First}
            options={{ title: 'Welcome First' }}
        />
        <Stack.Screen
            name="Workout"
            component={Workout}
            options={{ title: 'Welcome Workout' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
