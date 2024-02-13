import "./App.css";
import NavBar from "./state-management/NavBar";
import HomePage from "./routing/HomePage";
import TaskList from "./state-management/TaskList";
import AuthProvider from "./state-management/AuthProvider";
import TasksProvider from "./state-management/TasksProvider";

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
