import styles from "./PasswordStrength.module.css";

import DoneIcon from "@mui/icons-material/Done";
import CircleIcon from "@mui/icons-material/Circle";

export default function PasswordStrength({ passwordStrength }) {
  return (
    <div className={styles.passwordStrength__root}>
      <div className={styles.passwordStrength__item}>
        {passwordStrength[0] ? (
          <DoneIcon className={styles.passwordStrength__itemIcon} />
        ) : (
          <CircleIcon className={styles.passwordStrength__itemIcon} />
        )}
        <text>At least 8 characters</text>
      </div>
      <br />

      <div className={styles.passwordStrength__item}>
        {passwordStrength[1] ? (
          <DoneIcon className={styles.passwordStrength__itemIcon} />
        ) : (
          <CircleIcon className={styles.passwordStrength__itemIcon} />
        )}
        <text>Lowercase and Uppercase</text>
      </div>
      <br />

      <div className={styles.passwordStrength__item}>
        {passwordStrength[2] ? (
          <DoneIcon className={styles.passwordStrength__itemIcon} />
        ) : (
          <CircleIcon className={styles.passwordStrength__itemIcon} />
        )}
        <text>Number (0-9)</text>
      </div>
      <br />

      <div className={styles.passwordStrength__item}>
        {passwordStrength[3] ? (
          <DoneIcon className={styles.passwordStrength__itemIcon} />
        ) : (
          <CircleIcon className={styles.passwordStrength__itemIcon} />
        )}
        <text>Special Character (!@#$%^&")</text>
      </div>
      <br />
    </div>
  );
}
