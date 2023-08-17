import { useForm } from "react-hook-form";
import React from "react";

export const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Full Name" />
      <br />
      <input type="text" placeholder="Email" />
      <br />
      <input type="text" placeholder="Age" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <input type="password" placeholder="Confirm Password" />
      <br />
      <input type="submit" />
    </form>
  );
};
