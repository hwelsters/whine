import React from "react";

import styles from "./NavbarIcon.module.css";

export default function NavbarIcon({ Icon }) {
  return (
    <div className={styles.navbarIcon__root}>
      {Icon}
    </div>
  );
}
