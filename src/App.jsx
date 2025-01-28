import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./assets/pages/HomePage";
import TasksPage from "./assets/pages/TasksPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/tasks" element={<TasksPage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
