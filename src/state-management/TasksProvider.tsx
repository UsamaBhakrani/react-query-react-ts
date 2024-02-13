import { ReactNode, useReducer } from "react";
import TasksContext from "./contexts/tasksContext";
import taskReducer from "./reducers/taskReducer";

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, tasksDispatch] = useReducer(taskReducer, []);

  return (
    <TasksContext.Provider value={{ tasks, dispatch: tasksDispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
