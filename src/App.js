import React, { useState } from "react";

function App() {
  const [num, setNum] = useState(0);

  const counterPlus = () => {
    setNum(num + 1);
  };

  const counterMinus = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={counterPlus}>+</button>
      <button onClick={counterMinus}>-</button>
    </div>
  );
}

export default App;
