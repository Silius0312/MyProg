import React from 'react';
import { View, Button, Text } from "react-native";


export const Home = (props) => {
    const navigation = props.navigation;
    return (                   
        <View>
            <Text>Главная Страница</Text>
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
                title =  "Страница 2"
                onPress={() => 
                navigation.navigate('Screen2') 
             } 
        />
         <Button 
                title =  "Страница 3"
                onPress={() => 
                navigation.navigate('Screen3') 
             } 
        />
        <Button 
                title =  "Страница 4"
                onPress={() => 
                navigation.navigate('Screen4') 
             } 
        />
             </View>     
    );
};
