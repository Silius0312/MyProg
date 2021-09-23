import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const First = () => {
  const product = useSelector((state) => state.productsR);

  return (
    <SafeAreaView>
      <FlatList
        data={first}
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
  },
});