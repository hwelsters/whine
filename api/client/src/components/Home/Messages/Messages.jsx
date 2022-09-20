import React, { useEffect, useState } from "react";

import styles from "./Messages.module.css";

import Board from "../Board/Board";
import FriendIcon from "../FriendIcon/FriendIcon";
import { axiosInstance } from "../../../utils/config";

export default function Messages() {
  const [friends, setFriends] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const getPosts = async () => {
    const res = await axiosInstance
      .get(`auth/recent/`)
      .then((res) => {
        setFriends(res.data);
      });
  };

  useEffect(()=>{
    getPosts();
  },[]);

  return (
    <Board>
      <h1 className={styles.messages__title}>Other people</h1>
      {friends.map((friend, index) => (
        <FriendIcon key={index} username={friend.username}/>
      ))}
    </Board>
  );
}
