import { useReducer } from "react";
import "./App.css";
import LoginStatus from "./state-management/LoginStatus";
import taskReducer from "./state-management/reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import TaskList from "./state-management/TaskList";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <>
      <TasksContext.Provider value={{ tasks, dispatch }}>
        <NavBar />
        <HomePage />
        <TaskList />
      </TasksContext.Provider>
    </>
  );
}

export default App;
