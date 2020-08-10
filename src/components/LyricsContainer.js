import React, { Component } from "react";

const styles = {
  lyrics: {
    overflow: "auto",
    height: "300px",
    // display: "none",
    textalign: "left",
  },
};

export default class LyricsContainer extends Component {
  render(props) {
    return (
      <div className="clearSearch">
        <div className="row">
          <div style={styles.lyrics} className="col-md-6 mb-3">
            <p>{this.props.lyrics}</p>
          </div>
        </div>
      </div>
    );
  }
}
