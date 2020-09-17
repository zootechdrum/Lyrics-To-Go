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
      <div className="row d-flex justify-content-center">
        <div clasName="col-md-8 col-sm-12">
          <form className="md-form input-group white" onSubmit={handleSubmit}>
            <div className="input-group-prepend">
              <span className="input-group-text md-addon">
                artist & song title
              </span>
            </div>
            <Field model="artist.name">
              <input
                type="text"
                aria-label="artist"
                id="artist"
                class="form-control"
                placeholder="Artist Name"
              />
            </Field>
            <Field model="artist.song">
              <input
                type="text"
                aria-label="song title"
                id="title"
                class="form-control"
                placeholder="Artist song"
              ></input>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ artist: state.artist });

export default connect(mapStateToProps, { fetchLyrics, displayImg })(
  SearchForm
);
