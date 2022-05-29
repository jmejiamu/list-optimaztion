import { StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";
import { styles } from "./styles";

const CostumeInput = ({ style, placeholder, onChangeText, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={{ ...styles.input, ...style }}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default CostumeInput;
