import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../react-query/TodoList";
import axios from "axios";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import APIClient from "../react-query/services/apiClient";

export interface AddToDoContext {
  previousTodos: Todo[];
}

const apiClient = new APIClient<Todo>("/todos");

const useAddTodo = (onAdd: () => void) => {
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, AddToDoContext>({
    mutationFn: apiClient.post,
    onMutate: (newTodo: Todo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      onAdd();

      return { previousTodos };
    },
    onSuccess: (savedTodo, newTodo) => {
      // queryClient.invalidateQueries({
      //  queryKey: ["todos"],
      // })
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
    },
  });
};

export default useAddTodo;
