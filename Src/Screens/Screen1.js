import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Screen2 } from './Screen2';

export const Screen1 = () => {
    const [number, setNumber] = React.useState(null);    
    const onChangeText = (text) => {
      setNumber(text);
    };

      return (
      <SafeAreaView>
        <TextInput 
            style={styles.input}
            value={number}
            placeholder="Введите текст"
            onChangeText={onChangeText}
        />    
         <Screen2 value={number}/>
              <Text>{Screen2}</Text>
        </SafeAreaView>
    )
};        
const styles = StyleSheet.create({
    input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
  },
});