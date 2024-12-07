import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchPosts = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return data;
};

const PostsComponent = () => {
  const { data, isLoading, isError, error } = useQuery("posts", fetchPosts, {
    // Advanced React Query options
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 30 * 1000,     // Data is considered fresh for 30 seconds
    refetchOnWindowFocus: false, // Do not refetch when window gains focus
    keepPreviousData: true,   // Keep previous data while fetching new data
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
