import { colors } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 20,
  },
  count: {
    height: 19,
    width: 25,
    borderRadius: 20,
    backgroundColor: colors.gray[400],
  },
  textCount: {
    color: colors.gray[200],
    fontSize: 12,
    fontFamily: fontFamily.inter.bold,
    textAlign: "center",
  },
  subContainer: {
    flexDirection: "row",
    gap: 10,
  },
  textCreated: {
    color: colors.blue.light,
    fontSize: 14,
    fontFamily: fontFamily.inter.bold,
  },
  textCompleted: {
    color: colors.purple.light,
    fontSize: 14,
    fontFamily: fontFamily.inter.bold,
  },
});
