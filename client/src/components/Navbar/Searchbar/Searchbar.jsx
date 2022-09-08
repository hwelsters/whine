import React from "react";

import styles from "./Searchbar.module.css";

import SearchIcon from "@mui/icons-material/Search";

export default function Searchbar() {
  return (
    <div className={styles.searchbar__root}>
      <SearchIcon />
      <form className={styles.searchbar__form}>
        <input
          className={styles.searchbar__input}
          type="text"
          placeholder="Search for some stuff to whine about..."
        />
      </form>
    </div>
  );
}
