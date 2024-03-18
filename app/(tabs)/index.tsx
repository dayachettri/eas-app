import React, { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { Header } from "@/components/header";
import { Task, TasksList } from "@/components/task-list";
import { TodoInput } from "@/components/todo-input";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const hasTaskWithThisName = tasks.find(
      task =>
        task.title.trim().toLowerCase() === newTaskTitle.trim().toLowerCase()
    );

    if (hasTaskWithThisName) {
      Alert.alert(
        "Task already registered",
        "You cannot register a task with the same name"
      );
    } else {
      setTasks([
        ...tasks,
        {
          id: new Date().getTime(),
          title: newTaskTitle,
          done: false,
        },
      ]);
    }
  }

  function handleToggleTaskDone(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }

  function handleUpdateTaskName(id: number, newTaskName: string) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          title: newTaskName,
        };
      }

      return task;
    });

    setTasks(newTasks);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask}
        updateTaskName={handleUpdateTaskName}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  },
});
