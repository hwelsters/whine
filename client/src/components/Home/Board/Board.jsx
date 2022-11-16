import React from "react";

import styles from "./Board.module.css";

export default function Board({ children }) {
  return <div className={styles.board__root}>{children}</div>;
}
