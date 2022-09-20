import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import styles from "./SignIn.module.css";

import Logo from "../../components/Logo/Logo";
import Navbar from "../../components/Navbar/Navbar/Navbar";

import { loginCall } from "../../utils/apiCalls";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const { isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setWarning("");
    if (email === "") setWarning("Email not filled in");
    if (password === "") setWarning("Password not filled in");

    const res = await loginCall({ email: email, password: password }, dispatch);

    if (res) {
      setWarning("Signed in successfully");
      window.location = "/";
    }
  };

  useEffect(() => {
    if (error) setWarning(error.response.data);
  }, [error]);

  return (
    <div>
      <Navbar />
      <div className={styles.signIn__belowNavbar}>
        <form className={styles.signIn__block} onSubmit={handleSubmit}>
          <Logo />
          <div className={styles.signIn__subBlock}>
            <label className={styles.signIn__label}>Email</label>
            <input
              className={styles.signIn__input}
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <label className={styles.signIn__label}>Password</label>
            <input
              className={styles.signIn__input}
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className={styles.signIn__warning}>{warning}</div>
            <button className={styles.signIn__button}>Sign In</button>
            <div className={styles.signIn__below} disabled={isFetching}>
              <div>Don't have an account?</div>
              <Link className={styles.signIn__link} to="/signup">
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
