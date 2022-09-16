import React, { useState } from "react";

import styles from "./Messages.module.css";

import Board from "../Board/Board";
import FriendIcon from "../FriendIcon/FriendIcon";

export default function Messages() {
  const [friends, setFriends] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return (
    <Board>
      <h1 className={styles.messages__title}>Other people</h1>
      {friends.map((friend, index) => (
        <FriendIcon key={index} username="Noel"/>
      ))}
    </Board>
  );
}
