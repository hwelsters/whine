import { useState } from "react";

import styles from "./SignUp.module.css";
import { checkPasswordStrength } from "./passwordCheck";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar/Navbar";
import { Link } from "react-router-dom";
import PasswordStrength from "../../components/Authentication/PasswordStrengthModal/PasswordStrength";
import { axiosInstance } from "../../../config";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(
    new Array() < Boolean > 5
  );

  const setPasswordField = (event) => {
    console.log("DOING STUFF");
    setPassword(event.target.value);
    setPasswordStrength(checkPasswordStrength(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    if (username === "") setError("Username is required");
    else if (email === "") setError("Email is required");
    else if (password !== confirmPassword) setError("Passwords don't match");
    else {
      try {
        const res = await axiosInstance.post(
          "auth/register",
          {
            username: username,
            email: email,
            password: password,
          }
        );

        setError("Profile created");
        window.location.href = "/signin";
      } catch (err) {
        setError(err.response.data);
        console.log(err);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signUp__belowNavbar}>
        <form className={styles.signUp__block} onSubmit={handleSubmit}>
          <Logo />
          <div className={styles.signUp__subBlock}>
            {/* Username input */}
            <label className={styles.signUp__label}>Username</label>
            <input
              className={styles.signUp__input}
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {/* Email input */}
            <label className={styles.signUp__label}>Email</label>
            <input
              className={styles.signUp__input}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password input */}
            <label className={styles.signUp__label}>Password</label>
            <input
              className={styles.signUp__input}
              type="password"
              value={password}
              onChange={setPasswordField}
            />

            <PasswordStrength passwordStrength={passwordStrength} />

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
