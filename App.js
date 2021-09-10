import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {MyStack} from './navigation/navigation'
import {Home} from './Screens/Home' 


export default function App() {
  return (   
    <View style={styles.container}>
           <NavigationContainer><Home/></NavigationContainer>         
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
