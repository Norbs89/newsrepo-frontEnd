import React from "react";
import { AllTopicsRequest } from "../API";
import { Card, Container, Row, Col } from "react-bootstrap";
import coding from "../images/coding.jpg";
import cooking from "../images/cooking.jpg";
import football from "../images/football.jpg";

class DisplayTopics extends React.Component {
  state = {
    topics: [],
    images: {
      coding: coding,
      cooking: cooking,
      football: football
    }
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    AllTopicsRequest()
      .then(({ data }) => {
        this.setState({ topics: data.topics });
      })
      .catch(err => {
        console.dir(err);
      });
  };

  render() {
    const { topics } = this.state;
    return (
      <Container className="topic-container">
        <Row className="topics-row">
          {topics.map(topic => {
            return (
              <Col key={topic.slug}>
                <Card className="bg-dark text-white">
                  <Card.Img src={this.state.images[topic.slug]} />
                  <Card.ImgOverlay className="card-allText">
                    <Card.Title className="cardText">{topic.slug}</Card.Title>
                    <Card.Text className="cardText">
                      {topic.description}
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default DisplayTopics;
