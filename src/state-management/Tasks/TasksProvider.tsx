import { ReactNode, useReducer } from "react";
import TasksContext from "./tasksContext";

export interface Task {
  id: number;
  title: string;
}

interface TaskReducerAddActions {
  type: "ADD";
  payload: Task;
}

interface TaskReducerDeleteActions {
  type: "DELETE";
  taskId: number;
}

export type TaskReducerActions = TaskReducerAddActions | TaskReducerDeleteActions;

const taskReducer = (state: Task[], action: TaskReducerActions): Task[] => {
  if (action.type === "ADD") return [...state, action.payload];
  if (action.type === "DELETE")
    return state.filter((s) => s.id !== action.taskId);
  return state;
};

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
