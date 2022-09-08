import React from "react";
import Board from "../../Home/Board/Board";

import styles from "./ProfileInfo.module.css";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function ProfileInfo({ username, dateCreated }) {
  return (
    <div className={styles.profileInfo__root}>
      <Board>
        <img
          className={styles.profileInfo__profilePicture}
          src={global.testImgUrl}
        />

        <div className={styles.profileInfo__username}>{username}</div>
        <div className={styles.profileInfo__date}>
          <div className={styles.profileInfo__date}>
            <CalendarMonthIcon />
            <div>Date created:</div>
          </div>
          <div>{dateCreated}</div>
        </div>
      </Board>
    </div>
  );
}
