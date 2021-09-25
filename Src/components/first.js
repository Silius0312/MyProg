import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export const First = () => {
  const First1 = useSelector((state) => state.firstRS);

  const ItemFirst1 =  ({item}) => (
    <TouchableOpacity>
    <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  )

  const itemList = ({ item }) => {
    return (
    <ItemFirst1 item={item}/>
    )
  }


  return (
    <SafeAreaView>
      <FlatList
        data={First1}
        keyExtractor={(item) => item.id.toString()}
        renderItem={itemList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "red"
  },
});