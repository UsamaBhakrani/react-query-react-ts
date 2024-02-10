import { useState } from "react";
import usePosts from "../hooks/usePosts";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostList = () => {
  const [userId, setuserId] = useState<number>();
  const { data: posts, error, isLoading } = usePosts(userId);

  if (isLoading) return <p>Loading.....</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(e) => setuserId(parseInt(e.target.value))}
        value={userId}
      >
        <option></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
