import React from "react";

import styles from "./SignIn.module.css";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import { Link } from "react-router-dom";
export default function SignIn() {
  return (
    <div>
      <Navbar />
      <div className={styles.signIn__belowNavbar}>
        <div className={styles.signIn__block}>
          <Logo />
          <div className={styles.signIn__subBlock}>
            <label className={styles.signIn__label}>Email</label>
            <input className={styles.signIn__input} type="email" />
            <label className={styles.signIn__label}>Password</label>
            <input className={styles.signIn__input} type="password" />

            <button className={styles.signIn__button}>Sign In</button>
            <div className={styles.signIn__below}>
              <div>Don't have an account?</div>
              <Link className={styles.signIn__link} to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
