import React from 'react';
import { View, Text } from "react-native";
import {First} from "../components/first"
import { Second } from "../components/second"
import { Tree } from '../components/tree';

export const Home = (props) => {
    const navigation = props.navigation;
    return (                   
        <View>
            <First />
            <Second />
            <Tree />
             </View>     
    );
};
