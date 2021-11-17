import React from 'react'
import { SafeAreaView, TouchableOpacity, StyleSheet, Text, FlatList, Button } from 'react-native'
import { useSelector } from "react-redux";

export const Works = ({navigation, route}) => {
    
    const Work1 = useSelector((state) => state.workRS);    
   
    const ItemWork = ({item}) => (
        <TouchableOpacity >            
            <Text> { item.title } </Text>
            <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('addDetailsWork', {item});
        }}
      />
        </TouchableOpacity>
    );

    const ItemListWork = ({item}) =>{
        return (
            <ItemWork item={item} />
        )
    };
    
    return (
        <SafeAreaView>
            <Button
                title=" Добавить упражнение "
                onPress={() => navigation.navigate("AddWork")}/>
            <FlatList
                data={Work1}
                keyExtractor={(item) => item.id}  // или title ????? .toString()
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
// onPress={() => {
// navigation.navigate('Details', {
//     itemId: 86,
//     otherParam: 'anything you want here',
//   });