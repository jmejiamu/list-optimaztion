import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
const RenderItems = ({ item, handleModal }) => {
  return (
    <View
      style={{
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 10,
      }}
    >
      <Text style={styles.item}>{item.value}</Text>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 5,
            paddingHorizontal: 9,
            marginLeft: 10,
            borderRadius: 15,
          }}
          onPress={() => handleModal(item.id)}
        >
          <Text style={styles.deleteBtn}>X</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderItems;

// const styles = StyleSheet.create({});
