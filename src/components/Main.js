import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLyrics } from "../actions";
import Container from "react-bootstrap/Container";

import SearchButton from "../Atoms/SearchButton";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchLyrics();
  }

  render() {
    return (
      <Container fluid>
        <SearchButton
          getLyrics={() => this.props.fetchLyrics()}
          text="Search Song"
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { lyrics: state.lyrics };
};

export default connect(mapStateToProps, { fetchLyrics })(Main);
