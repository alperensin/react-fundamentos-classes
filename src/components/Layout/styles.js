import styled, { css } from "styled-components";

export const Nav = styled.nav`
  ${({
    theme: {
      spacing: { small, medium },
      borderRadius,
      headerBackgroundColor,
    },
  }) => css`
    background: ${headerBackgroundColor};
    margin-top: ${medium}px;
    padding: ${medium}px;
    display: flex;
    gap: ${small}px;
    border-radius: ${borderRadius};

    a {
      color: white;
      text-decoration: none;

      &:hover {
        opacity: 0.7;
        transition-duration: 0.3s;
      }
    }
  `}
`;
