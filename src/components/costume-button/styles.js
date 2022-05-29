import { StyleSheet } from "react-native";
import Colors from "../../constant/colors";
export const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    width: "50%",
    backgroundColor: Colors.primary,
    borderRadius: 10,
    paddingVertical: 10,
  },
  textStyle: {
    fontWeight: "bold",
    color: Colors.white,
  },
});
