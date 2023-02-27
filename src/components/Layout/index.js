import React from "react";

import Header from "../Header";
import PostsList from "../PostsList";
import Footer from "../Footer";

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
      <>
        {/* { simulating an error in the child component and receiving it in componentDidCatch} */}
        {/* {undefined.map((item) => item)} */}
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
