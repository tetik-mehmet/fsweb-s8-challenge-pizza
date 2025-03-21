import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="pizza-container">
      <div className="pizza-header">
        <h1>Teknolojik Yemekler</h1>
        <div className="pizza-slogan">
          <h2>KOD AÇIKTIRIR</h2>
          <h2>PİZZA, DOYURUR</h2>
        </div>
        <button
          className="aciktim-button"
          onClick={() => setCount((count) => count + 1)}
        >
          AÇIKTIM
        </button>
      </div>
    </div>
  );
}

export default App;
