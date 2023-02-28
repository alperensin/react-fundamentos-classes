import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/posts" component={Posts} exact />
        <Route path="/posts/:id" component={Post} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
