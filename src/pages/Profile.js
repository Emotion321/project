import React from "react";
import { ChangeProfile } from "./ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      Profile: {props.username} <ChangeProfile />
    </div>
  );
};
