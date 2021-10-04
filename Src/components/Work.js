import React from 'react'
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, FlatList } from 'react-native'
import { useSelector } from "react-redux";

export const Work = () => {
    const Work1 = useSelector((state) => state.workRS);

    const ItemWork = ({item}) => (
        <TouchableOpacity>
            <Text> { item.title } </Text>
        </TouchableOpacity>
    );

    const ItemListWork = ({item}) =>{
        return (
            <ItemWork item={item} />
        )
    };


    
    return (
        <SafeAreaView>
            <FlatList
                data={Work1}
                keyExtractor={(item) => item.id.toString()}
                renderItem={ ItemListWork }                 
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