import { useEffect, useState, useContext } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import KoshiroContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const KoshiroInfo = useContext(KoshiroContext);

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

      <hr />
      <h1>useContext</h1>
      <p>{KoshiroInfo.name}</p>
      <p>{KoshiroInfo.age}</p>
    </div>
  );
}

export default App;
