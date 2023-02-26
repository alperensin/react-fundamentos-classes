import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({
    theme: {
      headerBackgroundColor,
      spacing: { medium, large },
      borderRadius,
    },
  }) => css`
    background: ${headerBackgroundColor};
    height: 100px;
    display: flex;
    align-items: center;
    padding: 0 ${large}px;
    border-radius: ${borderRadius};
    justify-content: space-between;

    button {
      font-size: ${medium}px;
      cursor: pointer;
      cursor: pointer;
      background: transparent;
      border: none;
    }
  `}
`;
