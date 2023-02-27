import React from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function HOCThemeContext(RenderComponent) {
  return class Component extends React.Component {
    render() {
      return (
        <ThemeContext.Consumer>
          {(values) => <RenderComponent {...values} />}
        </ThemeContext.Consumer>
      );
    }
  };
}
