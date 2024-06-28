import styled, { css } from "styled-components";

export const Hover01 = css`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = css`
  &:hover {
    color: #33399b;
  }
`;

export const Hover03 = css`
  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  &:hover a {
    color: #ffffff;
  }
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;
