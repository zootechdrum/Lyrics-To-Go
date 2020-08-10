import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLyrics } from "../actions";
import Container from "react-bootstrap/Container";

import SearchButton from "../Atoms/SearchButton";
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
    return (
      <main className="main-area p-3 container">
        <SearchForm />
        <SearchButton
          getLyrics={() => this.props.fetchLyrics("Falling Away from Me")}
          text="Search Song"
        />
        <LyricsContainer lyrics={this.props.lyrics} />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return { lyrics: state.lyrics };
};

export default connect(mapStateToProps, { fetchLyrics })(Main);
