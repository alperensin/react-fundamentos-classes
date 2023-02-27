import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";

import GlobalStyle from "./styles/global";
import Layout from "./components/Layout";

import themes from "./styles/themes";

class App extends React.Component {
  state = {
    changed: true,
  };

  // executed when component is mounted
  componentDidMount() {
    console.log("componentDidMount executed");
  }

  // executed before the component receives updates and renders
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", {
      currentState: this.state,
      nextProps,
      nextState,
    });

    // if true is returned, the component's lifecycle continues and executes the componentDidUpdate performing a new rendering
    // if false is returned, rendering is blocked
    return true;
  }

  // executed after the component receives updates and renders
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidMount updated", {
      currentState: this.state,
      prevState,
      prevProps,
    });
  }

  // when an error occurs in a child component
  componentDidCatch(error, info) {
    console.log("componentDidCatch", { error, info });
  }

  render() {
    return (
      <ThemeProvider>
        <button
          onClick={() =>
            this.setState((prevState) => ({ changed: !prevState.changed }))
          }
        >
          Change State
        </button>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <StyledThemeProvider theme={themes[theme] || themes.dark}>
              <GlobalStyle />
              {this.state.changed && <Layout />}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
              <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />{" "}
            </StyledThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default App;
