import { useEffect, useState, useContext, useRef, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import KoshiroContext from "./main";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

function App() {
  const [count, setCount] = useState(0);
  const KoshiroInfo = useContext(KoshiroContext);
  const ref = useRef();
  const [state, dispatch] = useReducer(reducer, 0);

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

      <hr />
      <h1>useReducer</h1>
      <p>カウント：{state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
}

export default App;
