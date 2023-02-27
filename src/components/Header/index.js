import React from "react";

import { Container } from "./styles";

export default class Header extends React.Component {
  render() {
    const { selectedTheme, onToggleTheme } = this.props;
    return (
      <Container>
        <h1>JStack's Blog</h1>
        <button onClick={onToggleTheme} type="button">
          {selectedTheme === "dark" ? "🌞" : "🌚"}
        </button>
      </Container>
    );
  }
}
