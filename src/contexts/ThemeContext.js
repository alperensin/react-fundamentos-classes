import React, { createContext } from "react";

export const ThemeContext = createContext({});

export class ThemeProvider extends React.Component {
  state = {
    theme: "dark",
  };

  componentDidMount() {
    this.setState({
      theme: JSON.parse(localStorage.getItem("theme")) || "dark",
    });
  }

  handleToggleTheme = () => {
    this.setState(
      (prevState) => ({
        theme: prevState.theme === "dark" ? "light" : "dark",
      }),
      () => {
        localStorage.setItem("theme", JSON.stringify(this.state.theme));
      }
    );
  };

  render() {
    const { children } = this.props;
    const { theme } = this.state;

    return (
      <ThemeContext.Provider
        value={{
          theme,
          handleToggleTheme: this.handleToggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}
