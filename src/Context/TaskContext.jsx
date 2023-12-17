import { createContext, useState, useEffect } from "react";
import { Tasks as roca } from "../Task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [editDescription, setEditDescription] = useState("");

  function createTask(task) {
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: tasks.length + 1, title: task.title, description: task.description },
    ]);
  }

  useEffect(() => {
    console.log("Updated tasks array:", tasks);
  }, [tasks]);

  const updateTask = ({ id, newDescription }) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    if (taskIndex !== -1) {
      // La tarea con el ID proporcionado existe
      tasks[taskIndex].description = newDescription;
      console.log(`Descripción de la tarea ${id} actualizada.`);
    } else {
      console.log(`No se encontró ninguna tarea con el ID ${id}.`);
    }
  };

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  useEffect(() => {
    setTasks(roca);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        setEditDescription,
        editDescription,
        updateTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
