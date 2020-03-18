import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import { Link } from "@reach/router";

const ErrorHandling = props => {
  const { status, msg } = props;
  return (
    <Jumbotron fluid>
      <Container>
        <h1>
          {status} {msg}
        </h1>
        <p>Click here to go to our home page!</p>
        <p>
          <Link to="/">
            <button>home</button>
          </Link>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default ErrorHandling;
