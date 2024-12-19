import { FlatList } from "react-native";
import { TaskSummary } from "../taskSummary";
import { Task } from "../task";
import { TaskEmpty } from "../taskEmpty";
import { s } from "./styles";

type Props = {
  data: { description: string; status: "pending" | "completed" }[];
  onDeleteTask: (task: string) => void;
  handleCompletedTask: (task: string) => void;
};
export const Tasks = ({ data, onDeleteTask, handleCompletedTask }: Props) => {
  const taskCompleted2 = data.reduce(
    (acc, task) => {
      acc.total += task.status === "completed" ? 1 : 0;
      return acc;
    },
    { total: 0 }
  );
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.description}
      renderItem={({ item }) => (
        <Task
          description={item.description}
          onCompleted={handleCompletedTask}
          onDelete={() => onDeleteTask(item.description)}
        />
      )}
      style={s.container}
      ListHeaderComponent={() => (
        <TaskSummary
          numberCreated={data.length}
          numberCompleted={taskCompleted2.total}
        />
      )}
      ListEmptyComponent={() => <TaskEmpty />}
    />
  );
};
