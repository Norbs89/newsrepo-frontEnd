import React from "react";
import ArticleById from "./ArticleCards";
import { AllArticlesRequest } from "../API";
import UserChoice from "./UserChoice";
import { Container, Row, Col } from "react-bootstrap";
import { searchArticleByTitle } from "../utils/utils";

class DisplayAllArticles extends React.Component {
  state = {
    articles: null,
    isLoaded: false,
    articleById: [],
    selectedUser: "",
    searchBar: ""
  };

  componentDidMount() {
    this.fetchAllArticles();
  }

  handleChange = event => {
    this.setState({ selectedUser: event.target.value });
  };

  handleInput = value => {
    this.setState(currentState => {
      return {
        ...currentState,
        searchBar: value
      };
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedUser !== this.state.selectedUser) {
      this.fetchAllArticles({ author: this.state.selectedUser });
    }
  }

  fetchAllArticles = query => {
    console.log(query);
    AllArticlesRequest(query).then(({ data }) => {
      this.setState(currentState => {
        return {
          ...currentState,
          articles: data.articles,
          isLoaded: true
        };
      });
    });
  };

  render() {
    const { articles, isLoaded, searchBar } = this.state;
    return isLoaded ? (
      <div className="all-articles">
        <Container>
          <Row>
            <Col md="auto" className="article-sorter">
              Show articles by:
              <UserChoice
                handleChange={this.handleChange}
                selectedUser={this.state.selectedUser}
              />
            </Col>
            <Col md="auto" className="article-sorter">
              <form>
                <label>
                  Search By Article Title:
                  <input
                    type="text"
                    onChange={e => this.handleInput(e.target.value)}
                  />
                </label>
              </form>
            </Col>
          </Row>
        </Container>
        {searchBar !== ""
          ? searchArticleByTitle(searchBar, articles).map(article => {
              return <ArticleById article={article} key={article.article_id} />;
            })
          : articles.map(article => {
              return <ArticleById article={article} key={article.article_id} />;
            })}
      </div>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default DisplayAllArticles;
