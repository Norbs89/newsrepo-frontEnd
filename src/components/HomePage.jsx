import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import DisplayTopics from "./DisplayTopics";

const HomePage = () => {
  return (
    <div className="homePage-main-div">
      <header>
        <p>NC News</p>
      </header>
      <Container>
        <Row>
          <Col className="intro-text" sm>
            Built from the ground up - a front end website to my very own hosted
            API.
          </Col>
        </Row>
        <Row>
          <Col className="topic-intro" sm>
            Click on any of these topics to see their articles:
          </Col>
        </Row>
        <Row>
          <DisplayTopics />
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
