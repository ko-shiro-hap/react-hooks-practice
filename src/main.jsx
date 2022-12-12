import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// useContext
const KoshiroInfo = {
  name: "Koshiro",
  age: 24,
};

const KoshiroContext = createContext(KoshiroInfo);

ReactDOM.createRoot(document.getElementById("root")).render(
  <KoshiroContext.Provider value={KoshiroInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </KoshiroContext.Provider>
);

export default KoshiroContext;
