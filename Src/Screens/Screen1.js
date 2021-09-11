import React from 'react';
import { Button, View, Text } from "react-native";


export const Screen1 = ({navigation}) => {
    return (
        <View>            
            <Button 
            title =  "Главная"
            onPress={() => 
            navigation.navigate('Home') 
    } 
    /> 
            <Button 
                title =  "Страница 1"
                onPress={() => 
                navigation.navigate('Screen1') 
             } 
        />
            <Button 
            title = "Страница 2" 
            onPress ={() =>
            navigation.navigate('Screen2')
            }
            /> 
            <Button 
            title = "Страница 3" 
            onPress ={() =>
            navigation.navigate('HScreen3')
            }
            /> 
    <Text>1 страница</Text>
        </View>  
    );
};