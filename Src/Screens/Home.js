import React from 'react';
import { SafeAreaView, Text } from "react-native";
import {First} from "../components/first"
import { Workout } from '../components/Workout';


export const Home = () => {
        return (                   
        <SafeAreaView>
            <First />
            <Workout/>
             </SafeAreaView>     
    );
};


