import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Peredacha } from './Screen3';

export const Screen2 = (props) => {
    // проверяем введеный текст число это или нет
    const TextInputScren1 = !isNaN (props.value);

    // проверяем делится ли число на 2
    const TextOrNo = (n) => n % 2===0;
    
    // выводим на экран результат
    const ProverkaTXT = () => {
        return TextInputScren1     
            ? TextOrNo (props.value)
            ? "Кратно двум"
            : "Не кратно 2-м"
            : "Это не число" 
         };

    const itog = ProverkaTXT ()
        return (
            <View>
                 <Text style = {{ color: TextOrNo  ?'red' :'green'}}>{itog}</Text>
                 <Text>{Peredacha}</Text> 
            </View>            
)
};

const styles = StyleSheet.create({
    input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
    color: 'white',   
  },
  red: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
      color: 'red',
  },
  green: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
      color: 'green',
  },
  def: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
    color: 'black',
  },
});