import React from 'react';
import { SafeAreaView, Text } from "react-native";
import { FlatList } from 'react-native-gesture-handler';
import {AddWorks} from "../components/AddWorks";



export const AddWork = () => {
        return (                   
        <SafeAreaView>
           
            <Text>Подходы</Text>
            <AddWorks/>
           
                        
        </SafeAreaView>     
    );
};
