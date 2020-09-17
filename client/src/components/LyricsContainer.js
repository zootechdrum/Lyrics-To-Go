import React, { Component } from "react";

const styles = {
  lyrics: {
    overflow: "auto",
    height: "300px",
    textalign: "left",
  },
};

export default class LyricsContainer extends Component {
  render(props) {
    return (
      <div className="clearSearch">
        <div className="row">
          <div
            style={styles.lyrics}
            className={
              ({ display: this.props.lyrics ? "block" : "none" },
              " col-md-6 mb-3 lyrics ")
            }
          >
            <p
              dangerouslySetInnerHTML={{
                __html: this.props.lyrics,
              }}
            ></p>
          </div>
        </div>
      </div>
    );
  }
}
