import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = (props) => {
  const { setUsername } = useContext(AppContext);

  const [newUsername, setNewUsername] = useState("");
  return (
    <dib>
      <input
        onChange={(event) => {
          setNewUsername(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setUsername(newUsername);
        }}
      >
        Change username
      </button>
    </dib>
  );
};
