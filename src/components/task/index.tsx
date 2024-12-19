import { colors } from "@/styles/color";
import {
  IconCircle,
  IconCircleCheckFilled,
  IconTrash,
} from "@tabler/icons-react-native";
import { View, Text, TouchableOpacity } from "react-native";
import { s } from "./styles";
import { useState } from "react";

type Props = {
  description: string;
  onCompleted: (task: string) => void;
  onDelete: (task: string) => void;
};
export const Task = ({ description, onCompleted, onDelete }: Props) => {
  const [taskStatus, setTaskStatus] = useState(false);
  return (
    <View style={[s.container, taskStatus && s.containerCompleted]}>
      <TouchableOpacity
        onPress={() => {
          onCompleted(description);
          setTaskStatus((prevState) => !prevState);
        }}
      >
        {taskStatus ? (
          <IconCircleCheckFilled color={colors.purple.dark} size={20} />
        ) : (
          <IconCircle color={colors.blue.light} size={20} />
        )}
      </TouchableOpacity>
      <Text style={[s.text, taskStatus && s.textCompleted]} numberOfLines={2}>
        {description}
      </Text>
      <TouchableOpacity onPress={() => onDelete(description)}>
        <IconTrash size={20} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  );
};
