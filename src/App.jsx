import { useEffect, useState, useContext, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import KoshiroContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const KoshiroInfo = useContext(KoshiroContext);
  const ref = useRef();

  const handleClick = () => {
    setCount(count + 1);
  };

  // 第2引数が更新される度に発火される
  // 第2引数が空の場合はリロード時に発火される
  useEffect(() => {
    console.log("カウントが更新されました。");
  }, [count]);

  // useRef
  const handleRef = () => {
    console.log(ref.current.value);
    console.log(ref.current.offSetHeight);
  };

  return (
    <div className="App">
      <h1>useState, useEffect</h1>
      <button onClick={handleClick}>+</button>
      <p>{count}</p>

      <hr />
      <h1>useContext</h1>
      <p>{KoshiroInfo.name}</p>
      <p>{KoshiroInfo.age}</p>

      <hr />
      <h1>useRef</h1>
      <input type="text" ref={ref} />
      <button onClick={handleRef}>useRef</button>
    </div>
  );
}

export default App;
