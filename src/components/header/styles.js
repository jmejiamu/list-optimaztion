import { StyleSheet } from "react-native";
import Colors from "../../constant/colors";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    paddingTop: 30,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: Colors.textColorSecondary,
    fontSize: 22,
    fontWeight: "bold",
  },
});
