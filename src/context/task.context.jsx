import { createContext, useState } from "react";
const TaskContext = createContext();

function TasksProviderWrapper(props) {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Comprar la cena",
      completed: false,
    },
    {
      id: "2",
      title: "Cocinar",
      completed: true,
    },
    {
      id: "3",
      title: "Cenar",
      completed: false,
    },
    {
      id: "4",
      title: "Lavar los platos",
      completed: false,
    },
  ]);

  const addTask = (newTask) => {
    setTasks([newTask, ...tasks]);
  };

  const updateTask = (updatedTask) => {
    const uptadedTasks = tasks.map((task) => {
      if (task.id !== updatedTask.id) return task;
      return updatedTask;
    });

    setTasks(uptadedTasks);
  };
  return (
    <TaskContext.Provider value={{ tasks, setTasks, addTask, updateTask }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TasksProviderWrapper };
