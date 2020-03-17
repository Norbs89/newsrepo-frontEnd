import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";

import DisplayNavBar from "./components/NavBar";

import HomePage from "./components/HomePage";
import DisplayAllArticles from "./components/AllArticles";

function App() {
  return (
    <div className="App">
      <DisplayNavBar />
      <Router>
        <HomePage path="/" />
        <DisplayAllArticles path="/articles" />
      </Router>
    </div>
  );
}

export default App;
