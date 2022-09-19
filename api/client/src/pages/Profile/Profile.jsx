import React, { useState, useContext, useEffect } from "react";

import styles from "./Profile.module.css";

import Posts from "../../components/Home/Posts/Posts";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";
import UserInput from "../../components/Home/UserInput/UserInput";

import { AuthContext } from "../../contexts/Auth/AuthContext";
import { axiosInstance } from "../../config";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axiosInstance
      .get(`posts/userPosts/` + user.username)
      .then((res) => {
        setPosts(res.data);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (user)
    return (
      <div>
        <Navbar />
        <div className={styles.profile__block}>
          <LeftSection />
          <Posts posts={posts}>
            <ProfileInfo username={user.username} />
            <UserInput />
          </Posts>
          <RightSection />
        </div>
      </div>
    );
  else return <Home />;
}
