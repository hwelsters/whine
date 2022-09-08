import React, { useState } from "react";
import Post from "../Post/Post";
import UserInput from "../UserInput/UserInput";

import styles from "./Posts.module.css";

export default function Posts({children}) {
  const [posts, setPosts] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  return (
    <div className={styles.posts__root}>
      {children}
      {posts.map(() => (
        <Post text=""/>
      ))}
    </div>
  );
}
