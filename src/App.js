import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import React from "react";

function App() {
  const [generatedExcuse, setGeneratedExcuse] = useState("");

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).
      then((res) => {
        setGeneratedExcuse(res.data[0].excuse);
      });
  };

  return (
    <div className="App">
      <h1> Generate an excuse </h1>
      <button onClick={() => fetchExcuse("office")}> Office </button>
      <button onClick={() => fetchExcuse("funny")}> Funny </button>
      <button onClick={() => fetchExcuse("unbelievable")}> Unbelievable </button>

      <h2>{generatedExcuse}</h2>
    </div>
  );
}

export default App;
