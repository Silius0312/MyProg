import React from "react";
import { Button, View, Text } from "react-native";


export const Screen4 = ({navigation, route}) => {
    const txtFrom5 = route.params?.text1
    const numberFrom5 = route.params?.number1

    return (
        <View>
            <Button 
            title = 'Login'
            onPress = {() => {
                navigation.navigate('Screen5')
            }}
            />
            <Text>{ txtFrom5 }</Text>
            <Text>{ numberFrom5 }</Text>
        </View>
    )
}

    