import React, { Component } from "react";
import { connect } from "react-redux";
import { Field } from "react-redux-form";
import { fetchLyrics } from "../actions";
import { displayImg } from "../actions";
import SearchButton from "../Atoms/SearchButton";

const handleSubmit = (event) => {
  event.preventDefault();
};

export class SearchForm extends Component {
  render() {
    console.log(this.props);
    const { artist } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field model="user.song">
          <label>song</label>
          <input type="text" />
        </Field>
        <SearchButton
          getLyrics={() => {
            this.props.fetchLyrics(artist.song);
            this.props.displayImg(true);
          }}
          text="Search Song"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({ artist: state.user });

export default connect(mapStateToProps, { fetchLyrics, displayImg })(
  SearchForm
);
