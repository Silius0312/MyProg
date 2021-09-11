import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput } from "react-native";


export const Screen1 = (props) => {
    const [number, setNumber] = React.useState(null);    
    const onChangeText = (text) => {
      setNumber(text);
    };

    const result = number 
    return (
      <SafeAreaView>
        <TextInput 
          style={styles.input}
          value={number}
          placeholder="Введите текст"
          onChangeText={onChangeText}
        />
         <Text>{result}</Text>
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