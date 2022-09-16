import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import axios from "axios";

import styles from "./Emotions.module.css";

import Posts from "../../components/Home/Posts/Posts";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";

export default function Emotions() {
  const [posts, setPosts] = useState([]);

  const location = useLocation();

  const getPosts = async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    console.log(urlParams.get("e"));
    const res = await axios
      .get(`${global.apiUrl}/posts/emotions/` + urlParams.get("e").toString())
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
      <div className={styles.emotions__block}>
        <LeftSection />
        <Posts posts={posts}></Posts>
        <RightSection />
      </div>
    </div>
  );
}
