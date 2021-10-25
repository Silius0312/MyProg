import React, {useState} from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput } from 'react-native';

export  const AddWorks = () => {  
        const [name, setName]= useState(null);  
        const [weight, setWeight] = useState(null);
        const [amount, setAmount] = useState(null);

    return (
        <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={name}
          placeholder="Название упражнения"         
        />
        <TextInput
          style={styles.input}
          onChangeText={setAmount}
          value={weight}
          placeholder="Вес"
          keyboardType="numeric"
        />
          <TextInput
          style={styles.input}
          onChangeText={setName}
          value={amount}
          placeholder="Количество"
          keyboardType="numeric"
        />
        <Button 
        title = "Добавить упражнение"
        onPress = {() => {goBack();}}
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