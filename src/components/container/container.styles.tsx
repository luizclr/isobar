import styled from "styled-components";

export const BaseContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  color: inherit;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
