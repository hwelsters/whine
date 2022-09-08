import React from "react";
import NavbarModalIcons from "../NavbarModalIcons/NavbarModalIcons";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

import styles from "./NavbarModal.module.css";

export default function NavbarModal() {
  return (
    <div className={styles.navbarModal__root}>
      <NavbarModalIcons Icon={AccountCircleIcon} text="Profile" />
      <NavbarModalIcons Icon={SettingsIcon} text="Settings" />
      <NavbarModalIcons Icon={LogoutIcon} text="Sign out" />
    </div>
  );
}
