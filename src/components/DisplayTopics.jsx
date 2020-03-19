import React from "react";
import { AllTopicsRequest } from "../API";
import { Card, Container, Row, Col } from "react-bootstrap";
import coding from "../images/coding.png";
import cooking from "../images/cooking.png";
import football from "../images/football.png";
import { Link } from "@reach/router";

class DisplayTopics extends React.Component {
  state = {
    topics: [],
    images: {
      coding: coding,
      cooking: cooking,
      football: football
    },
    isLoaded: false
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    AllTopicsRequest()
      .then(({ data }) => {
        this.setState(currentState => {
          return {
            ...currentState,
            topics: data.topics,
            isLoaded: true
          };
        });
      })
      .catch(err => {
        console.dir(err);
      });
  };

  render() {
    const { topics, isLoaded } = this.state;
    return isLoaded ? (
      <Container className="topic-container">
        <Row className="topics-row">
          {topics.map(topic => {
            return (
              <Col key={topic.slug} className="topic-card" md>
                <Link to={`/topic/${topic.slug}`}>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={this.state.images[topic.slug]}
                      className="topic-img"
                    />
                    <Card.ImgOverlay className="card-all-text">
                      <Card.Title className="card-title">
                        {topic.slug}
                      </Card.Title>
                    </Card.ImgOverlay>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    ) : (
      <p>Loading...</p>
    );
  }
}

export default DisplayTopics;
