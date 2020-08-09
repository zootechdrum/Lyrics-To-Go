import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import logoBlk from "../images/logo-black.png";
import "../styles/Header.css";

export default class Header extends Component {
  render() {
    return (
      <Container fluid>
        <header className="text-center">
          <a href="./index.html">
            <img src={logoBlk} alt="logo for lyrics to go" id="top-logo" />
          </a>
        </header>
      </Container>
    );
  }
}
