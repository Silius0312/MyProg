import React from 'react';
import { First } from '../components/first';
import { Workout } from '../Screens/Workout';
// import { Bench } from '../Screens/Workout/Bench';
// import { Lifting } from '../Screens/Workout/Lifting';
// import { Squats } from '../Screens/Workout/Squats';
// import { Shoulders } from '../Screens/Workout/Shoulders';
// import { Press } from '../Screens/Workout/Press';


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
        {/* <Stack.Screen
            name="Bench"
            component={Bench}
            options={{ title: 'Жим лёжа' }}
        />
        <Stack.Screen
            name="Подтягивание"
            component={Lifting}
            options={{ title: 'Turnik' }}
        />
        <Stack.Screen
            name="Плечи"
            component={Shoulders}
            options={{ title: 'Плечи' }}
        />
        <Stack.Screen
            name="Приседание"
            component={Squats}
            options={{ title: 'Nogi' }}
        />
        <Stack.Screen
            name="Пресс"
            component={Press}
            options={{ title: 'Press' }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
