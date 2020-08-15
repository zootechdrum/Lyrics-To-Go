import React, { Component } from "react";

export default class LyricsContainer extends Component {
  render(props) {
    return (
      <div className="clearSearch">
        <div className="row">
          <div
            style={{ display: this.props.lyrics ? "block" : "none" }}
            className={"col-md-6 mb-3 lyrics "}
          >
            <p>{this.props.lyrics}</p>
          </div>
        </div>
      </div>
    );
  }
}
