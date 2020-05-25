import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EmailContainer from "./components/EmailContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmailContainer />
      </header>
    </div>
  );
}

export default App;
