import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../react-query/PostList";

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useQuery<Post[], Error>({
    queryKey: ["Posts", query],
    queryFn: () =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default usePosts;
