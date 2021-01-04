import React from "react";
import { Container } from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import About from "../About";

const Content = ({}) => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </Container>
);

export default Content;
