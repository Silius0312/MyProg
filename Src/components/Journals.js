import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export  const Journals = () => {    
        const [text, onChangeText] = useState(null);
        const [number, onChangeNumber] = useState(null);
    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Вес"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Количество"
          keyboardType="numeric"
        />
      </SafeAreaView>
    );     
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });