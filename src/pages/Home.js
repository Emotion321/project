import { useQuery } from '@tanstack/react-query'
import React from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const Home = () => {
  const {} = useQuery(["cat"]);
  const { username } = useContext(AppContext)
  return <h1> {username} </h1>;
};
