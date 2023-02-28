import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Header from "../Header";
import Footer from "../Footer";
import Routes from "../../Router";
import { Nav } from "./styles";

export default class Layout extends React.Component {
  // executed when component is mounted
  componentDidMount() {
    document.addEventListener("scroll", this.handleScroll);
  }

  // executed when component is going to unmount
  componentWillUnmount() {
    console.log("componentWillUnmount");
    document.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    console.log("scrolled...");
  };

  render() {
    return (
      <BrowserRouter>
        {/* { simulating an error in the child component and receiving it in componentDidCatch} */}
        {/* {undefined.map((item) => item)} */}
        <Header />
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/posts">Posts</Link>
          <Link to="/posts/123456">Post</Link>
        </Nav>
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}
