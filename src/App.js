import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router } from "@reach/router";
import DisplayNavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import DisplayAllArticles from "./components/AllArticles";
import ArticlesByTopic from "./components/ArticlesByTopic";
import CommentsByArticleId from "./components/CommentsByArticle";
import ErrorHandling from "./components/ErrorHandling";

//turn this into class, have a hardcoded user here for now to be able to post a comment//
function App() {
  return (
    <div className="App">
      <DisplayNavBar />
      <Router>
        <HomePage path="/" />
        <DisplayAllArticles path="/articles" />
        <ArticlesByTopic path="/topic/:topic" />
        <CommentsByArticleId path="/articles/:article_id/comments" />
        <ErrorHandling default status={404} msg={"Page not found!"} />
      </Router>
    </div>
  );
}

export default App;
