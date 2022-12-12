import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  // 第2引数が更新される度に発火される
  // 第2引数が空の場合はリロード時に発火される
  useEffect(() => {
    console.log("カウントが更新されました。");
  }, [count]);

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
