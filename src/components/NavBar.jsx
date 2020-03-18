import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "@reach/router";

const DisplayNavBar = currentUser => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Link to="/">
        <Navbar.Brand>NC-News</Navbar.Brand>
      </Link>
      <Navbar.Text>
        <Link to="/articles">All Articles</Link>
      </Navbar.Text>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>Signed in as: {currentUser.currentUser}</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DisplayNavBar;
