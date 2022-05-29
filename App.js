import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Header, CostumeButton, CostumeInput } from "./src/components/index";

const App = () => {
  const [task, setTask] = useState();
  const [item, setItem] = useState([]);
  const [isCheckbox, setCheckbox] = useState(false);
  const onHandleInput = (text) => {
    setTask(text);
  };

  const onHandleSubmit = () => {
    setTask("");
    setItem((currentItems) => [
      ...currentItems,
      { id: Math.random(), value: task },
    ]);
  };

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={isCheckbox ? styles.done : null}>{item.value}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Checkbox
            value={isCheckbox}
            onValueChange={setCheckbox}
            color={isCheckbox ? "red" : null}
            style={{ paddingHorizontal: 11, paddingVertical: 11 }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              padding: 5,
              paddingHorizontal: 9,
              marginLeft: 10,
            }}
            // onPress={() => handleModal(item.id)}
          >
            <Text style={styles.deleteBtn}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const ListHeader = () => {
    return (
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontWeight: "bold" }}>List</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header title="My List" />
      <View style={styles.inputRow}>
        <CostumeInput
          onChangeText={(text) => onHandleInput(text)}
          placeholder="Add Item"
          value={task}
          style={{ width: "70%" }}
        />
        <CostumeButton
          text="Add"
          style={{ width: "25%" }}
          onPress={onHandleSubmit}
        />
      </View>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={item}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputRow: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    marginHorizontal: 20,
  },
  done: {
    textDecorationLine: "line-through",
  },
});

export default App;
