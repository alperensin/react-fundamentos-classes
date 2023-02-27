import React from "react";

import { Container } from "./styles";
import HOCThemeContext from "../HOCThemeContext";

class Header extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.theme !== this.props.theme) {
      console.log("Theme changed!");
    }
  }

  render() {
    const { theme, handleToggleTheme } = this.props;

    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button onClick={handleToggleTheme} type="button">
          {theme === "dark" ? "🌞" : "🌚"}
        </button>
      </Container>
    );
  }
}

export default HOCThemeContext(Header);
