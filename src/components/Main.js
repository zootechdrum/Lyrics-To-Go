import Container from "react-bootstrap/Container";
import React, { Component } from "react";

import SearchButton from "../Atoms/SearchButton";

export default class Main extends Component {
  render() {
    return (
      <Container fluid>
        <SearchButton text="Search Song" />
      </Container>
    );
  }
}
