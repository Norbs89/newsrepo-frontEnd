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
class App extends React.Component {
  state = { currentUser: "jessjelly" };

  updateUser = () => {};

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <DisplayNavBar currentUser={currentUser} />
        <Router>
          <HomePage path="/" currentUser={currentUser} />
          <DisplayAllArticles path="/articles" currentUser={currentUser} />
          <ArticlesByTopic path="/topic/:topic" currentUser={currentUser} />
          <CommentsByArticleId
            path="/articles/:article_id/comments"
            currentUser={currentUser}
          />
          <ErrorHandling
            default
            status={404}
            msg={"Page not found!"}
            currentUser={currentUser}
          />
        </Router>
      </div>
    );
  }
}

export default App;
