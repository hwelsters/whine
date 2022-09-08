import React, { useState } from "react";

import styles from "./Messages.module.css";

import Board from "../Board/Board";
import FriendIcon from "../FriendIcon/FriendIcon";

export default function Messages() {
  const [friends, setFriends] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  return (
    <Board>
      <h1 className={styles.messages__title}>Friends</h1>
      {friends.map(() => (
        <FriendIcon username="Noel"/>
      ))}
    </Board>
  );
}
