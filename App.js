import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <h1>Color Changer 🎨</h1>
      <div className="buttons">
        <button onClick={() => setColor("lightblue")}>Blue</button>
        <button onClick={() => setColor("lightgreen")}>Green</button>
        <button onClick={() => setColor("lightcoral")}>Red</button>
        <button onClick={() => setColor("white")}>Reset</button>
      </div>
    </div>
  );
}
