import React, { Component } from "react";
import Button from "react-bootstrap/Button";

export default class SearchButton extends Component {
  render(props) {
    return <Button variant="primary">{this.props.text}</Button>;
  }
}
