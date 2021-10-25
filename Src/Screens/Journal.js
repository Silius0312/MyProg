import React from 'react';
import { SafeAreaView, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import {Journals} from "../components/Journals";



export const Journal = () => {
        return (                   
        <SafeAreaView>
           
            <Text>Подходы</Text>
            <Journals />
                        
        </SafeAreaView>     
    );
};
