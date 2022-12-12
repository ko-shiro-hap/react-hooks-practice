import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>useState</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
