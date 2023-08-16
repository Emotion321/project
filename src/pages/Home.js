import { useQuery } from "@tanstack/react-query";
import React from "react";
import Axios from "axios";

export const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(["cat"], async () => {
    const response = await Axios.get("https://catfact.ninja/fact");
    return response.data;
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error fetching cat fact</p>
      ) : (
        <div>
          <h1>Homepage</h1>
          <p>{data.fact}</p>
        </div>
      )}
      <button onClick={refetch}>Update</button>
    </div>
  );
};
