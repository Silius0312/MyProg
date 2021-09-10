import React from 'react';
import { Button, View } from "react-native";


export const Screen1 = ({navigation}) => {
    return (
        <View>            
            <Button 
            title =  "Back"
            onPress={() => 
            navigation.navigate('Home') 
    } 
    /> 
        </View>  
    );
};