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

class App extends React.Component {
  state = { currentUser: "jessjelly" };

  updateUser = user => {
    this.setState(currentState => {
      return { ...currentState, currentUser: user };
    });
  };

  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <DisplayNavBar currentUser={currentUser} updateUser={this.updateUser} />
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
