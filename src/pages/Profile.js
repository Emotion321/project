import React, { useState } from "react";
import { ChangeProfile } from "./ChangeProfile";

export const Profile = (props) => {
  return (
    <div>
      Profile: {props.username}
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};
