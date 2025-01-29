import { createContext, useState } from "react";
const TaskContext = createContext();

function TasksProviderWrapper(props) {
  const [tasks, setTasks] = useState([]);

  const API_URL = "https://cabd98b331266d873072.free.beeceptor.com/api/tasks/";

  const getTasks = async () => {
    try {
      console.log("Get Tasks");
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (e) {
      console.log("Error fetching tasks");
      console.error(e);
    }
  };
  const addTask = async (newTask) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newTask),
      });
      setTasks([newTask, ...tasks]);
    } catch (e) {
      console.error(e);
    }
  };

  const updateTask = (updatedTask) => {
    const uptadedTasks = tasks.map((task) => {
      if (task.id !== updatedTask.id) return task;
      return updatedTask;
    });

    setTasks(uptadedTasks);
  };
  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, getTasks, addTask, updateTask }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TasksProviderWrapper };
