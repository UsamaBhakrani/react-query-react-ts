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

type TaskReducerActions = TaskReducerAddActions | TaskReducerDeleteActions;

const taskReducer = (state: Task[], action: TaskReducerActions): Task[] => {
  if (action.type === "ADD") return [...state, action.payload];
  if (action.type === "DELETE")
    return state.filter((s) => s.id !== action.taskId);
  return state;
};

export default taskReducer;
