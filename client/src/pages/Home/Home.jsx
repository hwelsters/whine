import React, { useContext, useState, useEffect } from "react";
import styles from "./Home.module.css";

import axios from "axios";

import Navbar from "../../components/Navbar/Navbar/Navbar";
import Posts from "../../components/Home/Posts/Posts";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    await axios.get(`${global.apiUrl}/posts/`).then((res) => {
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
