import React from "react";
import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
import { Link } from "@reach/router";

const DisplayNavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Link to="/">
        <Navbar.Brand>NC-News</Navbar.Brand>
      </Link>
      <Navbar.Text>
        <Link to="/articles">All Articles</Link>
      </Navbar.Text>
    </Navbar>
  );
};

export default DisplayNavBar;
