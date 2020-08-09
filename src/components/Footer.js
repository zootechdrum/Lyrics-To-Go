import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import logoBlk from "../images/logo-black.png";
import "../styles/Footer.css";

export default class Header extends Component {
  render() {
    return (
      <Container fluid>
        <footer className="text-center fixed-bottom white pt-3 font-small">
          <a href="./index.html">
            <img src={logoBlk} alt="logo for lyrics to go" id="bottom-logo" />
          </a>
        </footer>
      </Container>
    );
  }
}
