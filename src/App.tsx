import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EmailContainer from "./components/EmailContainer";

function App() {
  //if (loading) return <p>Loading...</p>;
  //if (error) return <p>Error :(</p>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <EmailContainer />
      </header>
    </div>
  );
}

export default App;
