import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Button,
  // Modal,
} from "react-native";
import {
  Header,
  CostumeButton,
  CostumeInput,
  RenderItems,
  ListHeaderComponent,
  Modal,
} from "./src/components/index";

const App = () => {
  const [task, setTask] = useState();
  const [item, setItem] = useState([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const [itemSelected, setItemSelected] = useState();
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

  const handleModal = (id) => {
    setItemSelected(item.filter((item) => item.id === id)[0]);
    setModalVisibility(!modalVisibility);
  };

  const onHandleDelete = (itemSelected) => {
    setItem((currentItems) =>
      currentItems.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisibility(!modalVisibility);
  };

  const renderItem = ({ item }) => {
    return <RenderItems item={item} handleModal={handleModal} />;
  };

  const ListHeader = () => {
    return <ListHeaderComponent item={item} />;
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
          disabled={task?.length === 0}
        />
      </View>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={item}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal
        animationType="slice"
        visible={modalVisibility}
        onRequestClose={() => null}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text>Would you like to delete this Item?</Text>
            <Text
              style={{ fontWeight: "bold", marginTop: 20, marginBottom: 20 }}
            >
              {itemSelected?.value}
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <CostumeButton
                text="Cancel"
                onPress={() => setModalVisibility(!modalVisibility)}
                style={{ backgroundColor: "red", width: 100 }}
              />
              <CostumeButton
                text="Delete"
                onPress={() => onHandleDelete(itemSelected)}
                style={{ width: 100, marginLeft: 15 }}
              />
            </View>
          </View>
        </View>
      </Modal>
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

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginVertical: 100,
  },
});

export default App;
