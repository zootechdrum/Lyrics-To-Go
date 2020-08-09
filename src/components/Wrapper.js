import React from "react";
import Container from "react-bootstrap/Container";

function Wrapper({ children }) {
  return <Container>{children}</Container>;
}

export default Wrapper;
