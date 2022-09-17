import React, { useState } from "react";
import { Link } from "react-router-dom"
import Board from "../Board/Board";

import styles from "./Post.module.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import exploreIcons from "../Explore/ExploreEmojis";

export default function Post({ post }) {
  const date = new Date(post.createdAt);
  const dateString = date.getDate();
  const monthString = date.getMonth();
  const yearString = date.getFullYear();
  const str = monthString + "/" + dateString + "/" + yearString;

  return (
    <Board>
      <div className={styles.post__header}>
        <img className={styles.post__profilePic} src={global.testImgUrl} />
        <div className={styles.post__info}>
          <Link to={`/friend?u=${post.username}`}>
            <span className={styles.post__profileName}>{post.username}</span>
          </Link>
          <span className={styles.post__date}>{str}</span>
        </div>
      </div>

      {post.img && <img className={styles.post__image} src={post.img} />}
      <span className={styles.post__description}>
        <span className={styles.post__emotion}>
          {exploreIcons[post.emotion]}
        </span>
        {post.text}
      </span>
    </Board>
  );
}
