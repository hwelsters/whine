import React, { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

import styles from "./Friend.module.css";

import Posts from "../../components/Home/Posts/Posts";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";
import UserInput from "../../components/Home/UserInput/UserInput";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { useSearchParams } from "react-router-dom";

export default function Friend() {
  const [posts, setPosts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const username = searchParams.get("u");

  const location = useLocation();

  const getPosts = async () => {
    const res = await axios
      .get(`${global.apiUrl}/posts/userPosts/` + username)
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, [location]);

  return (
    <div>
      <Navbar />
      <div className={styles.friend__block}>
        <LeftSection />
        <Posts posts={posts}>
          <ProfileInfo username={username}/>
        </Posts>
        <RightSection />
      </div>
    </div>
  );
}