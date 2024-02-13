import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TaskList from "./state-management/Tasks/TaskList";
import AuthProvider from "./state-management/Auth/AuthProvider";
import TasksProvider from "./state-management/Tasks/TasksProvider";
import Counter from "./state-management/Counter/Counter";
import LoginStatus from "./state-management/Auth/LoginStatus";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <Counter />
          <NavBar />
          <HomePage />
          <TaskList />
          <LoginStatus />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
