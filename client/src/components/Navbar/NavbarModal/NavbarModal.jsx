import React, { useContext } from "react";
import { Link } from "react-router-dom";
import NavbarModalIcons from "../NavbarModalIcons/NavbarModalIcons";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./NavbarModal.module.css";

import { AuthContext } from "../../../contexts/Auth/AuthContext";
import { logoutCall } from "../../../apiCalls";

export default function NavbarModal() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = (event) => {
    console.log("CLICKED!");
    logoutCall(dispatch);
  };

  const toProfile = () => {
    window.location.href="/profile";
  }
  return (
    <div className={styles.navbarModal__root}>
      <div onClick={toProfile}>
        <NavbarModalIcons Icon={AccountCircleIcon} text="Profile" />
      </div>

      {/* Logout user on click */}
      <div onClick={handleLogout}>
        <NavbarModalIcons Icon={LogoutIcon} text="Sign out" />
      </div>
    </div>
  );
}
