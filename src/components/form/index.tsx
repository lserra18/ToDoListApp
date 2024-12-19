import { TextInput, View } from "react-native";
import { Button } from "../button";
import { IconCirclePlus } from "@tabler/icons-react-native";
import { s } from "./styles";
import { colors } from "@/styles/color";
import { useState } from "react";

type Props = {
  onCreateTask: (task: string) => void;
};
export const Form = ({ onCreateTask }: Props) => {
  const [taskDescription, setTaskDescription] = useState("");
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray[300]}
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <Button
        onPress={() => {
          onCreateTask(taskDescription);
          setTaskDescription("");
        }}
      >
        <Button.Icon icon={IconCirclePlus} />
      </Button>
    </View>
  );
};
