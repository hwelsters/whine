import React from "react";
import Board from "../Board/Board";

import styles from "./Post.module.css";

export default function Post({ text, image }) {
  return (
    <Board>
      <div className={styles.post__header}>
          <img className={styles.post__profilePic} src={global.testImgUrl} />
        <div className={styles.post__info}>
          <span className={styles.post__profileName}>hwelsters</span>
          <span className={styles.post__date}>01/01/2001</span>
        </div>
      </div>

      {image && <img className={styles.post__image} src={image} />}
      <span className={styles.post__description}>
        Whining about things in seven words max
      </span>
    </Board>
  );
}
