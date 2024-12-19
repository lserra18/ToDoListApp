import { colors } from "@/styles/color";
import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[700],
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 32,
    width: 110,
  },
});
