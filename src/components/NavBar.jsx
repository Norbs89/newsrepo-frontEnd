import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "@reach/router";
import UserChoice from "./UserChoice";

class DisplayNavBar extends React.Component {
  state = { selectedUser: "jessjelly" };

  handleChange = event => {
    this.setState({ selectedUser: event.target.value });
    this.props.updateUser(event.target.value);
  };

  render() {
    return (
      <Navbar bg="custom" variant="dark" sticky="top">
        <Link to="/">
          <Navbar.Brand className="brand">NC-News</Navbar.Brand>
        </Link>
        <Navbar.Text>
          <Link to="/articles" className="nav-text">
            All Articles
          </Link>
        </Navbar.Text>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-text">Signed in as: </Navbar.Text>
          <UserChoice
            selectedUser={this.state.selectedUser}
            handleChange={this.handleChange}
          />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default DisplayNavBar;
