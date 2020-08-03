import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage";

// will need to tack app state here
function App() {
  var appState = "HomePage";
  return (
    <div className="App">
      {appState === "HomePage" && <HomePage></HomePage>}
    </div>
  );
}

export default App;
