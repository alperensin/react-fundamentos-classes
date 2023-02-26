import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({
    theme: {
      postBackgroundColor,
      spacing: { small, medium },
      borderRadius,
    },
  }) => css`
    background: ${postBackgroundColor};
    display: flex;
    flex-direction: column;
    padding: ${medium}px;
    border-radius: ${borderRadius};

    h2 {
      margin: 0 0 ${small}px;
    }

    small {
      opacity: 0.7;
    }

    & + article {
      margin-top: ${small}px;
    }
  `}
`;
