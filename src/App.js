import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import DisplayNavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import DisplayAllArticles from "./components/AllArticles";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  return (
    <div className="App">
      <DisplayNavBar />
      <Router>
        <HomePage path="/" />
        <DisplayAllArticles path="/articles" />
        <ArticlesByTopic path="/topic/:topic" />
        {/* /articles?topic=:topic */}
      </Router>
    </div>
  );
}

export default App;
