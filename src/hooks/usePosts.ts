import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../react-query/PostList";

const usePosts = (userId: number | undefined) => {
  return useQuery<Post[], Error>({
    queryKey: userId ? ["users", userId, "Posts"] : ["Posts"],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            userId,
          },
        })
        .then((res) => res.data),
  });
};

export default usePosts;
