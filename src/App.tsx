import "./App.css";
import { useState, useEffect } from "react";
import Movie from "./components/Movie";

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
      <Movie />
      <div style={{ display: "inline-block", paddingTop: "1Rem" }}>
        <button>Yes</button>
        <button>No</button>
      </div>
    </div>
  );
}

export default App;
