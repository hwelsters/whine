import React, { useContext, useState, useEffect } from "react";
import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar/Navbar";
import Posts from "../../components/Home/Posts/Posts";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { axiosInstance } from "../../utils/config";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axiosInstance.get(`posts/recent`).then((res) => {
      setPosts(res.data);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className={styles.home__root}>
      <Navbar />
      <div className={styles.home__body}>
        <LeftSection />
        <Posts posts={posts} />
        <RightSection />
      </div>
    </div>
  );
}
