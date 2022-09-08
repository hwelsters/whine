import React from "react";
import { Link } from "react-router-dom";
import styles from "./FriendIcon.module.css";

export default function FriendIcon({ username }) {
  return (
    <Link to={"/profile?p=" + username}>
      <div className={styles.friendIcon__root}>
        <img
          className={styles.friendIcon__profilePicture}
          src={global.testImgUrl}
        />
        <div className={styles.friendIcon__info}>
          <div className={styles.friendIcon__username}>{username}</div>
        </div>
      </div>
    </Link>
  );
}
