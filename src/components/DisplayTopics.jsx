import React from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class DisplayTopics extends React.Component {
  state = {
    topics: []
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    axios
      .get("https://nc-news-hosting-app.herokuapp.com/api/topics")
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
                  <Card.Img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtMNZsZek6YaV4nsGlsAZMBrwDDG8YjKqQo28jSPBZDGAB_d9C"
                    alt="Card image"
                  />
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
