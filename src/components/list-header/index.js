import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ListHeader = ({ item }) => {
  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
      {item.length === 0 ? (
        <Text style={{ fontWeight: "bold" }}>There is not Items yet</Text>
      ) : (
        <Text style={{ fontWeight: "bold" }}>List</Text>
      )}
    </View>
  );
};

export default ListHeader;

const styles = StyleSheet.create({});
