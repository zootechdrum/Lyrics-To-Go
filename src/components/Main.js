import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLyrics } from "../actions";

import LyricsContainer from "./LyricsContainer";
import SearchForm from "./SearchForm";

import landingImg from "../images/landing-image.svg";

const styles = {
  mainArea: {
    textalign: "center",
    width: "100%",
  },
};

export class Main extends Component {
  componentDidMount() {
    this.props.fetchLyrics();
  }

  render() {
    console.log(this.props);
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
