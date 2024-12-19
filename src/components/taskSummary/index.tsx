import { View, Text } from "react-native";
import { s } from "./styles";

type Props = {
  numberCreated: number;
  numberCompleted: number;
};
export const TaskSummary = ({ numberCreated, numberCompleted }: Props) => {
  return (
    <View style={s.container}>
      <View style={s.subContainer}>
        <Text style={s.textCreated}>Criadas</Text>
        <View style={s.count}>
          <Text style={s.textCount}>{numberCreated}</Text>
        </View>
      </View>
      <View style={s.subContainer}>
        <Text style={s.textCompleted}>Concluídas</Text>
        <View style={s.count}>
          <Text style={s.textCount}>{numberCompleted}</Text>
        </View>
      </View>
    </View>
  );
};
