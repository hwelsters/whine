import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExploreIcons.module.css";

export default function ExploreIcons({ blockType, emoji }) {
  const rootStyles = [
    styles.emotionIcons__rootLeft,
    styles.emotionIcons__rootCenter,
    styles.emotionIcons__rootRight,
  ];

  return (
    <div className={`${styles.emotionIcons__root} ${rootStyles[blockType]}`}>
      <Link className={styles.emotionIcons__block} to={`/emotion?e=${emoji}`}>
          <div>{emoji}</div>
      </Link>
    </div>
  );
}
