import { useState } from "react";

import styles from "./SignUp.module.css";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setError("");
    if (password !== confirmPassword) setError("Passwords don't match");
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signUp__belowNavbar}>
        <form className={styles.signUp__block} onSubmit={handleSubmit}>
          <Logo />
          <div className={styles.signUp__subBlock}>
            {/* Email input */}
            <label className={styles.signUp__label}>Email</label>
            <input
              className={styles.signUp__input}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Username input */}
            <label className={styles.signUp__label}>Username</label>
            <input
              className={styles.signUp__input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Password input */}
            <label className={styles.signUp__label}>Password</label>
            <input
              className={styles.signUp__input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Confirm password input */}
            <label className={styles.signUp__label}>Confirm Password</label>
            <input
              className={styles.signUp__input}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className={styles.signUp__error}>{error}</div>
            <button className={styles.signUp__button}>Sign up</button>
            <div className={styles.signUp__below}>
              <div>Already have an account?</div>
              <Link className={styles.signUp__link} to="/signin">
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
