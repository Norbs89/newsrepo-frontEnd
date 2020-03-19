import React from "react";
import { AllTopicsRequest } from "../API";
import { Card, Container, Row, Col } from "react-bootstrap";
import coding from "../images/coding.jpg";
import cooking from "../images/cooking.jpg";
import football from "../images/football.jpg";
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
              <Col key={topic.slug} className="topic-card">
                <Link to={`/topic/${topic.slug}`}>
                  <Card className="bg-dark text-white">
                    <Card.Img
                      src={this.state.images[topic.slug]}
                      className="topic-img"
                    />
                    <Card.ImgOverlay className="card-allText">
                      <Card.Title className="cardText">{topic.slug}</Card.Title>
                      <Card.Text className="cardText">
                        {topic.description}
                      </Card.Text>
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
