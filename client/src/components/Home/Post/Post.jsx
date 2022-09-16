import React, { useState } from "react";
import Board from "../Board/Board";

import styles from "./Post.module.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import exploreIcons from "../Explore/ExploreEmojis";

export default function Post({ post }) {
  const [liked, setLiked] = useState(false);
  console.log(post);
  return (
    <Board>
      <div className={styles.post__header}>
        <img className={styles.post__profilePic} src={global.testImgUrl} />
        <div className={styles.post__info}>
          <span className={styles.post__profileName}>{post.username}</span>
          <span className={styles.post__date}>{post.createdAt}</span>
        </div>
      </div>

      {post.img && <img className={styles.post__image} src={post.img} />}
      <span className={styles.post__description}>
        <span className={styles.post__emotion}>
          {exploreIcons[post.emotion]}
        </span>
        {post.text}
      </span>
      <span className={styles.post_icons}>
        {liked ? (
          <FavoriteIcon
            className={styles.post__icon}
            onClick={() => setLiked(!liked)}
          />
        ) : (
          <FavoriteBorderIcon
            className={styles.post__icon}
            onClick={() => setLiked(!liked)}
          />
        )}
      </span>
    </Board>
  );
}
