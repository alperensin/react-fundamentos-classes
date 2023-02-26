import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
  ${({ theme: { backgroundColor, textColor } }) => css`
    body {
      background: ${backgroundColor};
      color: ${textColor};
      font-family: sans-serif;
    }
  `}
`;
