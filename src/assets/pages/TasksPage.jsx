import { useContext } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { TaskContext } from "../../context/task.context";
import TaskCard from "../components/TaskCard";
import CreateTask from "../components/CreateTask";

function TasksPage() {
  const { tasks } = useContext(TaskContext);

  const taskCards = tasks.map((task) => (
    <li key={tasks.id}>
      <TaskCard task={task}></TaskCard>
    </li>
  ));

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <section id="tasks-page">
        <h2 className="title">Tasks</h2>
        <ul className="task-list">
          <li>
            <CreateTask></CreateTask>
          </li>
          {taskCards}
        </ul>
      </section>
    </>
  );
}

export default TasksPage;
