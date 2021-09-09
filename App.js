import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

import {MyStack} from './navigation/navigation'
import {Home} from './Screens/Home' 


export default function App() {
  return (   
    <View style={styles.container}>
      <MyStack/>
      <Home/>         
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
