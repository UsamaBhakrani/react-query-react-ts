import axios from "axios";
import { Todo } from "../react-query/TodoList";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
  const fetchTodos = () => {
    return axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data);
  };
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
    staleTime: 10 * 1000,
  });
};

export default useTodos;
