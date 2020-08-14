import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLyrics } from "../actions";

import LyricsContainer from "./LyricsContainer";
import SearchForm from "./SearchForm";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchLyrics("Blind");
  }

  render() {
    return (
      <main className="main-area p-3 container">
        <SearchForm />

        <LyricsContainer lyrics={this.props.lyrics} />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { lyrics: state.lyrics };
};

export default connect(mapStateToProps, { fetchLyrics })(Main);
