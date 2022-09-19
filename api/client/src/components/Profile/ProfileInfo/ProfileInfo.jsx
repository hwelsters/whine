import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";

import Board from "../../Home/Board/Board";

import styles from "./ProfileInfo.module.css";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { axiosInstance } from "../../../config";

export default function ProfileInfo({ username }) {
  const [user, setUser] = useState("");

  const date = new Date(user.createdAt);
  const str = date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear();
  const location = useLocation();

  const getPosts = async () => {
    const res = await axiosInstance
      .get(`auth/front/` + username)
      .then((res) => {
        setUser(res.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, [location]);

  console.log(user);
  return (
    <Board>
      <img
        className={styles.profileInfo__profilePicture}
        src={user.profilePic ? user.profilePic : global.testImgUrl}
      />

      <div className={styles.profileInfo__username}>{user.username}</div>
      <div className={styles.profileInfo__date}>
        <div className={styles.profileInfo__date}>
          <CalendarMonthIcon />
          <div>Date created:</div>
        </div>
        <div>{str}</div>
      </div>
    </Board>
  );
}
