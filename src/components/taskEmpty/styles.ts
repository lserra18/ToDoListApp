import { colors } from "@/styles/color";
import { fontFamily } from "@/styles/fontFamily";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    width: "100%",
    height: 208,
    alignItems: "center",
    justifyContent: "center",
    borderTopColor: "#333333",
    borderTopWidth: 1,
  },
  image: {
    height: 56,
    width: 56,
    marginBottom: 20,
  },
  descriptionBold: {
    fontSize: 14,
    fontFamily: fontFamily.inter.bold,
    color: colors.gray[300],
  },
  descriptionRegular: {
    fontSize: 14,
    fontFamily: fontFamily.inter.regular,
    color: colors.gray[300],
  },
});
