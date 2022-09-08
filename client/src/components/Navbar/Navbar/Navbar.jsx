import React, { useState } from "react";

import styles from "./Navbar.module.css";

import Searchbar from "../Searchbar/Searchbar";
import NavbarIcon from "../NavbarIcon/NavbarIcon";
import Logo from "../../Logo/Logo";
import NavbarModal from "../NavbarModal/NavbarModal";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [user, setUser] = useState("");
  return (
    <div className={styles.navbar__root}>
      {/* Left */}
      <div className={styles.navbar__left}>
        <Logo />
      </div>
      {/* Center */}
      <div className={styles.navbar__center}>
        <Searchbar />
      </div>
      {/* Right */}
      <div className={styles.navbar__right} tabIndex="0">
        {user?
          <>
            <NavbarIcon
              Icon={
                <img
                  className={styles.navbar__profilePicture}
                  src={global.testImgUrl}
                />
              }
            />
            <NavbarModal />
          </>

          :

          <Link className={styles.navbar__signIn} to="/signin">Sign in</Link>
        }
      </div>

    </div>
  );
}
