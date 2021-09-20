import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";


export const Screen4 = ({navigation, route}) => { 
    const txtFrom5 = route.params.text
    const passFrom5 = route.params.number
    return (
        <View>     
            <Button
                title="Войти"
                onPress={() => {
                navigation.navigate('Screen5')
        }}
        />                      
                <Text>{txtFrom5}</Text>
                <Text>{passFrom5}</Text>                 
         </View>       
    );   
};