import React from 'react';
import { SafeAreaView, Text } from "react-native";

import { Works } from '../components/Work';


export const Workout = ({navigation}) => {
        return (                   
        <SafeAreaView>           
            <Works navigation = { navigation }/>
        </SafeAreaView>     
    );
};


