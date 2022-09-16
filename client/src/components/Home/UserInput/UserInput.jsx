import React, { useContext, useState } from "react";

import axios from "axios";

import styles from "./UserInput.module.css";

import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";

import upload from "../../../firebase";

import Board from "../Board/Board";
import { AuthContext } from "../../../contexts/Auth/AuthContext";
import exploreIcons from "../Explore/ExploreEmojis";

export default function UserInput() {
  const { user } = useContext(AuthContext);

  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [emotion, setEmotion] = useState(0);

  const [error, setError] = useState("");

  const countWords = (sentence) => {
    const arr = sentence.split(" ");
    return arr.filter((val) => {
      return val !== "";
    }).length;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user) return;
    if (countWords(text) > 6) {
      setError("Too many words. Use fewer words.");
      return;
    } else if (countWords(text) < 1) {
      setError("Write something! But just six words!");
      return;
    } else {
      setError("");
    }

    const url = await upload({ file: image, label: "image" });

    // POST WITH AXIOS
    const config = {
      headers: {
        token: user.accessToken,
      },
    };
    
    const data = {
      id: user._id,
      username: user.username,
      img: url,
      text: text,
      emotion: 0,
    };

    console.log(data);
    const res = await axios.post(`${global.apiUrl}/posts/create`, data, config);

    setText("");
    setImage("");
    window.location.reload();
  };

  const onImgChange = (event) => {
    setImage(event.target.files[0]);
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
          <img
            className={styles.userInput__image}
            src={URL.createObjectURL(image)}
            data-testid="imagePreview"
          />
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
            placeholder="Whine about something in six words"
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
            <div>{countWords(text)} / 6</div>
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
            <button
              className={styles.userInput__icon}
              data-testid="userInputButton"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      </form>
    </Board>
  );
}
