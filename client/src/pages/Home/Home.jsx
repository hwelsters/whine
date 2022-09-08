import React from "react";
import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar/Navbar";
import Posts from "../../components/Home/Posts/Posts";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";
import UserInput from "../../components/Home/UserInput/UserInput";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";

export default function Home() {
  return (
    <div className={styles.home__root}>
      <Navbar />
      <div className={styles.home__body}>
        <LeftSection/>
        <Posts><ProfileInfo username="Noel Ngu" dateCreated="02/02/02"/><UserInput/></Posts>
        <RightSection/>
      </div>
    </div>
  );
}
