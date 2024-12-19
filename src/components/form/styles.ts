import { colors } from "@/styles/color";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    bottom: 30,
    paddingHorizontal: 25,
    gap: 5,
  },
  input: {
    height: 54,
    flex: 1,
    padding: 15,
    backgroundColor: colors.gray[500],
    borderRadius: 5,
    color: colors.gray[100],
  },
});
