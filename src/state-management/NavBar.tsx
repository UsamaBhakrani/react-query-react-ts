import LoginStatus from "./Auth/LoginStatus";
import { useTasksContext } from "./Tasks/tasksContext";

const NavBar = () => {
  const { tasks, dispatch } = useTasksContext();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
