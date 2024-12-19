import { Cover } from "@/components/cover";
import { Alert, View } from "react-native";
import { s } from "./styles";
import { Tasks } from "@/components/tasks";
import { Form } from "@/components/form";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState<
    { description: string; status: "pending" | "completed" }[]
  >([]);

  function handleCreateTask(taskDescription: string) {
    if (task.some((item) => item.description === taskDescription)) {
      return Alert.alert("Cadastro de Tareda", "Essa tarefa já existe!");
    }
    setTask((prevState) => [
      ...prevState,
      { description: taskDescription, status: "pending" },
    ]);
  }

  function handleCompletedTask(taskDescription: string) {
    setTask((prevState) => {
      return prevState.map((item) => {
        if (item.description === taskDescription) {
          return { ...item, status: "completed" };
        }
        return item;
      });
    });
  }

  function handleDeleteTask(taskDescription: string) {
    const newTask = task.filter((item) => item.description !== taskDescription);
    setTask(newTask);
  }

  return (
    <View style={s.container}>
      <Cover />
      <Form onCreateTask={handleCreateTask} />
      <Tasks
        data={task}
        onDeleteTask={handleDeleteTask}
        handleCompletedTask={handleCompletedTask}
      />
    </View>
  );
}
