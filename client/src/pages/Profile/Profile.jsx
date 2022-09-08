import React from "react";

import styles from "./Profile.module.css";

import Posts from "../../components/Home/Posts/Posts";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import ProfileInfo from "../../components/Profile/ProfileInfo/ProfileInfo";
import LeftSection from "../../components/Home/LeftSection/LeftSection";
import RightSection from "../../components/Home/RightSection/RightSection";

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className={styles.profile__block}>
        <LeftSection />
        <Posts>
            <ProfileInfo username="Noel Ngu" dateCreated="01/01/01"/>
        </Posts>
        <RightSection />
      </div>
    </div>
  );
}
