import React from 'react';
import { View, Text } from "react-native";
import {First} from "../components/first"


export const Home = (props) => {
    const navigation = props.navigation;
    return (                   
        <View>
            <First />
             </View>     
    );
};
