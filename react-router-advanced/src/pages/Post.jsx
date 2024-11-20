import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();  // Fetch the dynamic route parameter

  return (
    <div>
      <h2>Post {id}</h2>
      <p>Details about the post with ID: {id}</p>
    </div>
  );
};

export default Post;
