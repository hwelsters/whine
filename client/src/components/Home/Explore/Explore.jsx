import React from "react";

import styles from "./Explore.module.css";

import Board from "../Board/Board";
import ExploreIcons from "../ExploreIcons/ExploreIcons";

import exploreIcons from "./ExploreEmojis"

export default function Explore() {
  return (
    <Board>
      <h1 className={styles.explore__title}>Emotion Spaces</h1>
      <div className={styles.explore__grid}>
        {exploreIcons.map((value, index) => (
          <ExploreIcons key={index} blockType={index % 3} emoji={exploreIcons[index]} emojiIndex={index}/>
        ))}
      </div>
    </Board>
  );
}
