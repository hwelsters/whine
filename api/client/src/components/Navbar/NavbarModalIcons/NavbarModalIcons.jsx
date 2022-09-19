import React from "react";

import styles from "./NavbarModalIcons.module.css";

export default function NavbarModalIcons({ text, Icon }) {
  return (
    <div className={styles.navbarModalIcons__root}>
      <Icon />
      <div className={styles.navbarModalIcons__text}>{text}</div>
    </div>
  );
}
