import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

import { Container } from "./styles";

export default function Footer() {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <span>JStack's Blog. Todos os direitos reservados.</span>
      <button onClick={handleToggleTheme} type="button">
        {theme === "dark" ? "🌞" : "🌚"}
      </button>
    </Container>
  );
}
