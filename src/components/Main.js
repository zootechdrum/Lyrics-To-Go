import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLyrics } from "../actions";
import Container from "react-bootstrap/Container";

import SearchButton from "../Atoms/SearchButton";
import LyricsContainer from "./LyricsContainer";

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
        <LyricsContainer lyrics={this.props.lyrics} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { lyrics: state.lyrics };
};

export default connect(mapStateToProps, { fetchLyrics })(Main);
