import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./custom.scss";
import Navbar from "./components/navbar/Navbar.js";
import { BrowserRouter } from "react-router-dom";
import defaultfirebase from "./firebase.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
