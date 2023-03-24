import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/contact";
import Main from "../src/components/Background/Main";

function App() {
  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
