import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="main" style={{ backgroundColor: color }}>
      <div className="button-bar">
        <div className="button-group">
          <button className="btn" onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
          <button className="btn" onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
          <button className="btn" onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }}>Blue</button>
          <button className="btn" onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow", color: "#000" }}>Yellow</button>
          <button className="btn" onClick={() => setColor("black")} style={{ backgroundColor: "black" }}>Black</button>
          <button className="btn" onClick={() => setColor("white")} style={{ backgroundColor: "white", color: "#000" }}>White</button>
          <button className="btn" onClick={() => setColor("gray")} style={{ backgroundColor: "gray" }}>Gray</button>
          <button className="btn" onClick={() => setColor("pink")} style={{ backgroundColor: "pink", color: "#000" }}>Pink</button>
          <button className="btn" onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }}>Purple</button>
        </div>
      </div>
    </div>
  );
}

export default App;
