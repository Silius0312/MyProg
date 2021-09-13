import React from 'react';
import { View, Text } from 'react-native';


export const Screen2 = (props) => {
    const TextInputScren1 = !isNaN (props.value)
    const TextOrNo = (n) => n % 2===0;
    const ProverkaTXT = () => {
        return TextInputScren1     
            ? TextOrNo (props.value)
            ? "Кратно двум"
            : "Не кратно 2-м"
            : "Это не число" 
         }

    const itog = ProverkaTXT ()
        return (
            <View>
                 <Text>{ itog }</Text> 
            </View>            
)
};
