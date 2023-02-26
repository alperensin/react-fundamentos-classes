import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({
    theme: {
      spacing: { large },
    },
  }) => css`
    margin-top: ${large}px;
  `}
`;
