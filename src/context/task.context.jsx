import { createContext, useState } from "react";
const TaskContext = createContext();

function TasksProviderWrapper(props) {
  const [tasks, setTasks] = useState([]);
  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export { TaskContext, TasksProviderWrapper };
