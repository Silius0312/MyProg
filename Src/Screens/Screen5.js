import React from "react";
import { View, Text } from "react-native";




 export const Screen5 = ({route}) => {
    const { itemId } = route.params;
    return (
        <View>
            <Text>{itemId}</Text>            
        </View>
    
    )
};

