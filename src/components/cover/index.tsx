import { View, Image } from "react-native";
import { s } from "./styles";

export const Cover = () => {
  return (
    <View style={s.container}>
      <Image style={s.logo} source={require("@/assets/Logo.png")} alt="logo" />
    </View>
  );
};
