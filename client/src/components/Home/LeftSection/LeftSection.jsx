import React from "react";

import styles from "./LeftSection.module.css";

import Explore from "../Explore/Explore";

export default function LeftSection() {
  return (
    <div className={styles.leftSection__root}>
      <Explore />
    </div>
  );
}
