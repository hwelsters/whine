import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <Link to="/" data-testid="logo">
      <div className={styles.logo__root}>whine</div>
    </Link>
  );
}
