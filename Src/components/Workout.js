import React from 'react'
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, FlatList } from 'react-native'
import { useSelector } from "react-redux";

export const Workout = () => {
    const Workout1 = useSelector((state) => state.exerciciesRS);

    const ItemWorkout = ({item}) => (
        <TouchableOpacity>
            <Text> { item.title } </Text>
        </TouchableOpacity>
    );

    const ItemListWorkout = ({item}) =>{
        return (
            <ItemWorkout item={item} />
        )
    };


    
    return (
        <SafeAreaView>
            <FlatList
                data={Workout1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ ItemListWorkout }                 
      />      
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page1: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
},

txt: {
    fontSize: 18      
},

})