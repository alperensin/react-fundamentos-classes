import React, { createContext } from "react";

export const ThemeContext = createContext({});

export class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);

    let theme = "dark";

    try {
      theme = JSON.parse(localStorage.getItem("theme"));
    } catch (error) {
      console.log(error);
    }

    this.state = {
      theme,
    };
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.theme !== this.state.theme) {
      localStorage.setItem("theme", JSON.stringify(this.state.theme));
    }
  }

  handleToggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === "dark" ? "light" : "dark",
    }));
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
