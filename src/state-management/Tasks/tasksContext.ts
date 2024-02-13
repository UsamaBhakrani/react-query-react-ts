import { Dispatch, createContext, useContext } from "react";
import { Task, TaskReducerActions } from "./TasksProvider.tsx";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskReducerActions>;
}

const TasksContext = createContext<TasksContextType>({} as TasksContextType);

//Custom Hook
const useTasksContext = () => {
  return useContext(TasksContext);
};

export default TasksContext;
export { useTasksContext };
