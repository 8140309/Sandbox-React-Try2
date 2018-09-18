import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandboxas xssad</h1>
      <h2>Start editing to sadee some magic happen!</h2>
      <button
        onClick={() => {
          alert("alert");
        }}
      >
        alert
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
