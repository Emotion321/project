import React, { useState } from "react";

export const ChangeProfile = (props) => {
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
          props.setUsername(newUsername);
        }}
      >
        Change username
      </button>
    </dib>
  );
};
