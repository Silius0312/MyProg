import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
   

export const First = ({navigation}) => {
  const First1 = useSelector((state) => state.firstRS); // импортируем в First1 состояние из Storejs (firstRS: FirstR,)
  const onPress =()=> navigation.navigate('Workout' );

  const ItemFirst1 = ({item}) => ( // ItemFirst1 принимает параметры item из reducer
    <TouchableOpacity onPress={onPress}>             
      <Text> { item.title } </Text>
    </TouchableOpacity>           // деалем так, чтоб при нажатии на название  что-то происходило
  )
  const itemList = ({item}) => {  // создаём переменную которая принимает item вызывает ItemFirst1, чтоб вывести дальше
    return (
      <ItemFirst1  item = {item} /> // выводим ItemFirst1 
    )
  };
 
  return (      // выводим на экран Список (Flatlist) с пар-ит data: First1 (из сторе состояние) и вызываем itemList 
    <SafeAreaView style={styles.container}> 
      <FlatList
        data={First1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ itemList }        
      />      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});