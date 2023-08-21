import "./App.css";
import React from "react";
import { useToggle } from "./useToggle";

function App() {
  const [isVisible, toggle] = useToggle();

  return (
    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h2> Hidden Text </h2>}
    </div>
  );
}

export default App;
