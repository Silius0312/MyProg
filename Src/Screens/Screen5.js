import React from "react";
import { View, Text } from "react-native";




 export const Screen5 = ({route}) => {
    
    return (
        <View>
            <Text>{route.params.itemId}</Text>            
        </View>
    
    )
};

