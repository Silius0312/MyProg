import React from 'react';
import { View, Button } from "react-native";


export const Home = (props) => {
    const navigation = props.navigation;
    return (                   
        <View>
            <Button 
                title =  "Next"
                onPress={() => 
                navigation.navigate('Screen1') 
             } 
        />
        </View>     
    );
};
