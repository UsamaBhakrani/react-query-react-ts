import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../react-query/PostList";

const usePosts = () => {
  const fetchPosts = () => {
    return axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  };
  return useQuery<Post[], Error>({
    queryKey: ["Posts"],
    queryFn: fetchPosts,
  });
};

export default usePosts;
