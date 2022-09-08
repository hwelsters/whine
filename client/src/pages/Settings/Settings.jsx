import React from "react";
import Navbar from "../../components/Navbar/Navbar/Navbar";

import styles from "./Settings.module.css";

export default function Settings() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Navbar />
      <div className={styles.settings__root}>
        <form className={styles.settings__block} onSubmit={handleSubmit}>
          <img
            className={styles.settings__profilePic}
            src={global.testImgUrl}
          />
          {/* Username input */}
          <label className={styles.settings__label}>Username</label>
          <input className={styles.settings__input} type="text" />

          {/* Email input */}
          <label className={styles.settings__label}>Email</label>
          <input className={styles.settings__input} type="text" />

          {/* Password input */}
          <label className={styles.settings__label}>Password</label>
          <input className={styles.settings__input} type="password" />

          <button className={styles.settings__button}>
            Change information
          </button>
        </form>
      </div>
    </div>
  );
}
