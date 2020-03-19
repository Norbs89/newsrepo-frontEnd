import React from "react";
import { Form } from "react-bootstrap";

const UserChoice = props => {
  return (
    <Form>
      <Form.Control
        as="select"
        onChange={props.handleChange}
        value={props.selectedUser}
      >
        <option value={"tickle122"}>tickle122</option>
        <option value={"grumpy19"}>grumpy19</option>
        <option value={"happyamy2016"}>happyamy2016</option>
        <option value={"cooljmessy"}>cooljmessy</option>
        <option value={"weegembump"}>weegembump</option>
        <option value={"jessjelly"}>jessjelly</option>
      </Form.Control>
    </Form>
  );
};

export default UserChoice;
