import React from 'react';
import { Button, View, Text } from "react-native";


export const Screen1 = ({navigation}) => {
    return (
        <View>            
            <Button 
            title =  "Back"
            onPress={() => 
            navigation.navigate('Home') 
    } 
    /> 
    <Text> А теперь всё заепца,{"\n"}
        Счастье полная штанца,{"\n"}
        Во какой я Молодец,{"\n"}
        Скоро будет всем 3.14*дец...{"\n"}
    </Text>
        </View>  
    );
};