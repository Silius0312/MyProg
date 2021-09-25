import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const Tree = () => {
  const Tree = useSelector((state) => state.treeRS);

  return (
    <SafeAreaView>
      <FlatList
        data={Tree}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <Text style={styles.title}>{item.title}</Text>
        )}
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