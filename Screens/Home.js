import React from 'react';
import { View, Button, Text } from "react-native";


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
        <Text> Как же долго я ебался,{"\n"}
            Наконец-то докапался,{"\n"}
            Я ошибки всё искал,{"\n"}
            Влад мне в этом помогал.
        </Text>
        </View>     
    );
};
