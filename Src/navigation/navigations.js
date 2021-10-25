import React from 'react';
import { First } from '../components/first';
import { Workout } from '../Screens/Workout';
import { Journal } from '../Screens/Journal';
// import { Bench } from '../Screens/WorkoutList/Bench';
// import { Lifting } from '../Screens/WorkoutList/Lifting';
// import { Squats } from '../Screens/WorkoutList/Squats';
// import { Shoulders } from '../Screens/WorkoutList/Shoulders';
// import { Press } from '../Screens/WorkoutList/Press';



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
