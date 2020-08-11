import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import logoBlk from "../images/logo-black.png";

const styles = {
  topLogo: {
    width: "80px",
    paddingtop: "25px",
  },
};

export default class Header extends Component {
  render() {
    return (
      <header className="text-center white">
        <div>
          <a href="./index.html">
            <img
              style={styles.topLogo}
              src={logoBlk}
              alt="logo for lyrics to go"
              id="top-logo"
            />
          </a>
        </div>
      </header>
    );
  }
}
