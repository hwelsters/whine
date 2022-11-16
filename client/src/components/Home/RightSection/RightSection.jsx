import React from "react";
import Messages from "../Messages/Messages";

import styles from "./RightSection.module.css";

export default function RightSection() {
  return (
    <div className={styles.rightSection__root}>
      <Messages />
    </div>
  );
}
