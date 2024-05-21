import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Post from './Post';

import classes from './PostList.module.css';

function PostList() {
  const posts = useLoaderData();

  // function addPostHandler(postData) {
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   setPosts((prevPosts) => {
  //     return [postData, ...prevPosts];
  //   });
  // }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              id={post.id}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <h2 style={{ textAlign: 'center' }}>No posts yet. Add one!</h2>
      )}
    </>
  );
}

export default PostList;
