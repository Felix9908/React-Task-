import {createContext, useState, useEffect} from 'react'
import { Tasks as roca } from "../Task";

export const TaskContext = createContext()

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      { title: task.title, id: tasks.length, description: task.description, },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  } 

  useEffect(() => {
    setTasks(roca);
  }, []);
   
  return (
    <TaskContext.Provider value={{
      tasks: tasks,
      deleteTask: deleteTask,
      createTask: createTask
    }}>
        {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext