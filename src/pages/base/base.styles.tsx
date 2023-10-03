import { getColorByTheme } from "react-styled-guide";
import styled from "styled-components";

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
`;

export const BaseContent = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  background-color: ${getColorByTheme(
    ({ neutral }) => neutral.lightest,
    ({ neutral }) => neutral.darkest
  )};
`;
