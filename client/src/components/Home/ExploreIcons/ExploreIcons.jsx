import React from "react";
import { Link } from "react-router-dom";
import styles from "./ExploreIcons.module.css";

export default function ExploreIcons({ blockType, emoji, emojiIndex }) {
  const rootStyles = [
    styles.emotionIcons__colorFirst,
    styles.emotionIcons__colorSecond,
    styles.emotionIcons__colorThird,
    styles.emotionIcons__colorFourth,
    styles.emotionIcons__colorFifth,
    styles.emotionIcons__colorSixth,
    styles.emotionIcons__colorSeventh,
    styles.emotionIcons__colorEight,
    styles.emotionIcons__colorNinth,
  ];

  return (
    <div className={styles.emotionIcons__root}>
      <Link
        className={`${styles.emotionIcons__block} ${rootStyles[emojiIndex]}`}
        to={`/emotion?e=${emojiIndex}`}
      >
        <div >{emoji}</div>
      </Link>
    </div>
  );
}
