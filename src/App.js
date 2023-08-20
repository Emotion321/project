import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <h2> Hidden Text </h2>}
    </div>
  )
}

export default App;
