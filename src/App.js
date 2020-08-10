import React from "react";

import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./index.css";

import landingImg from "./images/landing-image.svg";

const styles = {
  background: {
    background: `url(${landingImg}) no-repeat`,
    "background-size": "125%",
    height: "100%",
    "padding-left": "0",
    "padding-right": "0",
  },
};

function App() {
  return (
    <Container className="main-search-background" fluid>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
