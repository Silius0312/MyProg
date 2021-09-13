import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Screen3 = () => {
  const [calcsTap, setCalcsTap] =  useState(0);

  const onePlus = () => {
    setCalcsTap(calcsTap + 1)  
  };

  const oneMinus = () => {
    setCalcsTap(calcsTap - 1) 
};
        return (            
            <View>            
                <Text style= {styles.red}>3 страница</Text>
                    <Button
                        title = "Добавить"                                                          
                        onPress={onePlus}                        
                    />
                   <Button
                        title = "Убрать"                                                          
                        onPress={oneMinus}
                   />    
                    <Text>Вы нажали: {calcsTap}</Text>                        
            </View>
    )
};

const styles = StyleSheet.create({
    input: {
    height: 50,
    margin: 20,
    borderWidth: 2,
    padding: 15,
  },
  red: {
      color: 'red',
  },
  green: {
      color: 'green',
  }
});