import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import { Post } from "../react-query/PostList";

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["Posts", query],
    queryFn: ({ pageParam }) =>
      axios
        .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((res) => res.data),
    staleTime: 1 * 60 * 1000,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default usePosts;
