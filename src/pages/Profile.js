import React, { useState } from "react";
import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = (props) => {
  const { username } = useContext(AppContext);

  return (
    <div>
      Profile: {username}
    </div>
  );
};
