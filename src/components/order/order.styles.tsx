import { getColor, getFontSize, getSize } from "react-styled-guide";
import styled from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${getColor(({ neutral }) => neutral.lighter)};
`;

export const Counter = styled.p`
  color: ${getColor(({ neutral }) => neutral.medium)};
  margin-left: ${getSize(({ nano }) => nano)};
`;

export const Button = styled.div`
  padding: ${getSize(({ quark }) => quark)};
  background-color: ${getColor(({ neutral }) => neutral.dark)};
  color: ${getColor(({ neutral }) => neutral.light)};

  &:hover {
    cursor: pointer;
  }
`;

export const OptionsList = styled.ul<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  list-style: none;
  position: absolute;
  top: 85px;
  right: 0;
  background-color: ${getColor(({ neutral }) => neutral.medium)};
`;

export const Option = styled.li<{ selected: boolean }>`
  color: ${getColor(({ neutral }) => neutral.lightest)};
  padding: ${getSize(({ nano }) => nano)};
  font-size: ${getFontSize(({ xs }) => xs)};
  background-color: ${({ selected }) =>
    selected
      ? getColor(({ neutral }) => neutral.tinyDark)
      : getColor(({ neutral }) => neutral.medium)};

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    cursor: pointer;
    background-color: ${getColor(({ neutral }) => neutral.dark)};
  }
`;
