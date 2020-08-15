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
    const { artist } = this.props;
    return (
      <div className="row d-flex justify-content-center">
        <div clasName="col-md-8 col-sm-12"></div>
        <form className="md-form input-group white" onSubmit={handleSubmit}>
          <Field model="artist.song">
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ artist: state.artist });

export default connect(mapStateToProps, { fetchLyrics, displayImg })(
  SearchForm
);
