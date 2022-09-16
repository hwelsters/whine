import React, { useState } from "react";
import Board from "../Board/Board";
import Post from "../Post/Post";

import styles from "./Posts.module.css";

export default function Posts({ children, posts }) {
  return (
    <div className={styles.posts__root}>
      {children}
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}

      {posts.length === 0 && (<Board> 🙃Nothing to see here... </Board>)}
    </div>
  );
}
