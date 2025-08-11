import "./App.css";
import { useState, useEffect } from "react";

function App() {
  return (
    <div
      style={{
        display: "Flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>Scare Factor</h1>
      <div style={{ border: "2px solid black", padding: "2rem" }}>
        <div>
          <img src="src/assets/The_Autopsy_of_Jane_Doe.jpg" alt="test" />
          <div>description: </div>
          <div>director</div>
        </div>
        <div style={{ display: "inline-block", paddingTop: "1Rem" }}>
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
}

export default App;
