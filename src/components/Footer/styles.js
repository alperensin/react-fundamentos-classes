import styled, { css } from "styled-components";

export const Container = styled.footer`
  ${({
    theme: {
      footerBackgroundColor,
      spacing: { large },
      borderRadius,
    },
  }) => css`
    background: ${footerBackgroundColor};
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 ${large}px;
    border-radius: ${borderRadius};
    justify-content: space-between;
    margin-top: ${large}px;

    button {
      cursor: pointer;
      background: transparent;
      border: none;
    }
  `}
`;
