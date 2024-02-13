import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TaskList from "./state-management/Tasks/TaskList";
import AuthProvider from "./state-management/Auth/AuthProvider";
import TasksProvider from "./state-management/Tasks/TasksProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TasksProvider>
          <NavBar />
          <HomePage />
          <TaskList />
        </TasksProvider>
      </AuthProvider>
    </>
  );
}

export default App;
