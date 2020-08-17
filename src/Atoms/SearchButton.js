import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SearchButton extends Component {
  render(props) {
    return (
      <div className="input-group-append">
        <Button
          className="btn btn-md m-0 px-3 btn-dark"
          onClick={this.props.getLyrics}
          variant="primary"
        >
          {this.props.text}
        </Button>
      </div>
    );
  }
}
