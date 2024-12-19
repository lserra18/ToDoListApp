import { View, Text, Image } from "react-native";
import { s } from "./styles";

export const TaskEmpty = () => {
  return (
    <View style={s.container}>
      <Image
        source={require("@/assets/Clipboard.png")}
        alt={"taskempty"}
        style={s.image}
      />
      <Text style={s.descriptionBold}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={s.descriptionRegular}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
};
