import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class SearchForm extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Row>
      </Form>
    );
  }
}
