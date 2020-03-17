import React from "react";
import Container from "react-bootstrap/Container";
import DisplayTopics from "./DisplayTopics";

const HomePage = () => {
  return (
    <div className="homePage-main-div">
      <header>this is the header</header>
      <Container>
        <section className="intro-text">
          Built from the ground up - a front end website to my very own hosted
          API.
        </section>
        <section>
          <DisplayTopics />
        </section>
      </Container>
    </div>
  );
};

export default HomePage;
