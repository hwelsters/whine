import React, { useState } from "react";
import Board from "../Board/Board";

import styles from "./UserInput.module.css";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

export default function UserInput() {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const countWords = (sentence) => {
    const arr = sentence.split(" ");
    return arr.filter((val) => {
      return val !== "";
    }).length;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (countWords(text) > 7) {
      setError("Too many words. Use less than seven");
      return;
    } else {
      setError("");
    }
  };

  const onImgChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
    console.log(event.target.files[0]);
  };

  return (
    <Board>
      {image && (
        <div className={styles.userInput__imageDiv}>
          <div
            className={styles.userInput__imageClose}
            onClick={(event) => {
              setImage("");
            }}
          >
            <CloseIcon />
          </div>
          <img className={styles.userInput__image} src={image} data-testid="imagePreview"/>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className={styles.userInput__header}>
          <img
            className={styles.userInput__profilePic}
            src={global.testImgUrl}
          />
          <input
            className={styles.userInput__input}
            type="text"
            placeholder="Whine about something in seven words max"
            onChange={(event) => setText(event.target.value)}
            value={text}
            data-testid="userTextInput"
          ></input>
        </div>

        <hr className={styles.userInput__line} />

        <div className={styles.userInput__bottom}>
          <div className={styles.userInput__error} data-testid="userTextError">
            {error}
          </div>
          <div className={styles.userInput__info}>
            <div>{countWords(text)} / 7</div>
            <label className={styles.userInput__icon}>
              <AddAPhotoIcon />
              <input
                className={styles.userInput__hidden}
                type="file"
                onChange={onImgChange}
                accept="image/*"
                data-testid="image-input"
              ></input>
            </label>
            <button className={styles.userInput__icon} data-testid="userInputButton">
              <SendIcon />
            </button>
          </div>
        </div>
      </form>
    </Board>
  );
}
