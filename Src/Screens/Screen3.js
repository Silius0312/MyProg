import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export const Screen3 = () => {   
  const [counter, setCounter] =  useState(0);

  // При нажатии добавляем 1 (+1)
  const OnePlus = () => { setCounter(counter +1)}
// При нажатии убавляем 1  (-1)
   const OneMinus = () => { setCounter(counter - 1)}
    
        return (            
            <View>            
                <Text>3 страница</Text>
                   <Button
                        title = "Добавить"                                                          
                        onPress={OnePlus}                        
                    />                    
                    <Button
                        title = "Убрать"                                                          
                        onPress={OneMinus}
                   /> 
                    <Text style = {{ color: OnePlus ?'red' :'green'}}> 
                                     
                        Вы нажали: {counter}
                    </Text> 
                     
            </View>
    )    
        };

  



