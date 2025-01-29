import { createContext, useState } from "react";
const TaskContext = createContext();

function TasksProviderWrapper(props) {
  const [tasks, setTasks] = useState([]);
  const [hasLoaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  const API_URL = "https://cabd98b331266d873072.free.beeceptor.com/api/tasks/";

  const getTasks = async () => {
    if (hasLoaded) return;
    try {
      console.log("Get Tasks");
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
      setLoaded(true);
      setError(false);
    } catch (e) {
      console.log("Error fetching tasks");
      console.error(e);
      setError(true);
    }
  };
  const addTask = async (newTask) => {
    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newTask),
      });
      setTasks([newTask, ...tasks]);
      setError(false);
    } catch (e) {
      console.error(e);
      setError(true);
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
      value={{
        tasks,
        setTasks,
        getTasks,
        addTask,
        updateTask,
        hasLoaded,
        hasError,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TasksProviderWrapper };
