import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from "react-native";




export const GymComp = ({navigation}) => {


        return (                   
        <SafeAreaView>
            <TouchableOpacity onPress = {()=>navigation.navigate("Gym") } >
            <Text>Грудь</Text> 
            </TouchableOpacity>                            
        </SafeAreaView>     
    );
};
