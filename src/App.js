import React from "react";
import { Component } from "react";

import { displayImg } from "./actions";
import { connect } from "react-redux";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import "./index.css";

export class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Container className="main-search-background" fluid>
        <Header />
        <Main />
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { showImg: state.showImg };
};

export default connect(mapStateToProps, { displayImg })(App);
