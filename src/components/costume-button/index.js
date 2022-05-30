import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";

const CostumeButton = ({ text, style, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.btnContainer, ...style }}
      disabled={disabled}
    >
      <Text style={styles.textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CostumeButton;

// const styles = StyleSheet.create({});
