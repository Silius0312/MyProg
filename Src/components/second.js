import React from "react";
import { Text, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const Second = () => {
  const Second = useSelector((state) => state.secondRS);

  return (
    <SafeAreaView>
      <FlatList
        data={Second}
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