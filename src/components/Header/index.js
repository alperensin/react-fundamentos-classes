import React from "react";

import { Container } from "./styles";
import { ThemeContext } from "../../contexts/ThemeContext";

export default class Header extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handleToggleTheme }) => (
          <Container>
            <h1>JStack's Blog</h1>
            <button onClick={handleToggleTheme} type="button">
              {theme === "dark" ? "🌞" : "🌚"}
            </button>
          </Container>
        )}
      </ThemeContext.Consumer>
    );
  }
}
