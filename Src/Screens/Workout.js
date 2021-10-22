import React from 'react';
import { SafeAreaView, Text } from "react-native";
import { Navigate } from '../navigation/navigations';
import { Works } from '../components/Work';


export const Workout = () => {
        return (                   
        <SafeAreaView>           
            <Works navigation = { navigation }/>
        </SafeAreaView>     
    );
};


