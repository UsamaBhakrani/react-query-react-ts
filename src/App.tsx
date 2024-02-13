import { useReducer } from "react";
import "./App.css";
import taskReducer from "./state-management/reducers/taskReducer";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TasksContext from "./state-management/contexts/tasksContext";
import TaskList from "./state-management/TaskList";
import LoginContext from "./state-management/contexts/loginContext";
import loginReducer from "./state-management/reducers/loginReducer";

function App() {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);
  const [user, authDispatch] = useReducer(loginReducer, "");

  return (
    <>
      <LoginContext.Provider value={{ user, dispatch: authDispatch }}>
        <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
          <NavBar />
          <HomePage />
          <TaskList />
        </TasksContext.Provider>
      </LoginContext.Provider>
    </>
  );
}

export default App;
