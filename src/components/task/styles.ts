import { colors } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    height: 64,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.gray[500],
    padding: 10,
    borderRadius: 10,
    borderColor: colors.gray[400],
    borderWidth: 1,
    marginBottom: 10,
  },
  text: {
    color: colors.gray[100],
    fontFamily: fontFamily.inter.regular,
    fontSize: 14,
    width: "78%",
  },
  containerCompleted: {
    borderWidth: 0,
  },
  textCompleted: {
    color: colors.gray[300],
    fontFamily: fontFamily.inter.regular,
    fontSize: 14,
    width: "78%",
    textDecorationLine: "line-through",
  },
});
