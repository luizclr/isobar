import { LuSearchX } from "react-icons/lu";
import { getColorByTheme, getFontSize, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  padding: ${getSize(({ nano }) => nano)} ${getSize(({ xxxs }) => xxxs)};

  &:hover {
    cursor: pointer;
    background-color: ${getColorByTheme(
      ({ neutral }) => neutral.lighter,
      ({ neutral }) => neutral.darker
    )};
  }
`;

export const Image = styled.img`
  width: ${getSize(({ l }) => l)};
  height: ${getSize(({ l }) => l)};
  border-radius: ${getSize(({ l }) => l)};
  margin-right: ${getSize(({ xxxs }) => xxxs)};
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.p`
  font-weight: ${getFontWeight(({ bold }) => bold)};
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darkest,
    ({ neutral }) => neutral.lightest
  )};
`;

export const Description = styled.p`
  color: ${getColorByTheme(
    ({ neutral }) => neutral.tinyDark,
    ({ neutral }) => neutral.tinyLight
  )};
`;

export const NoItemsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NoItemsIcon = styled(LuSearchX)`
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darker,
    ({ neutral }) => neutral.lighter
  )};
`;

export const NoItemsText = styled.p`
  font-size: ${getFontSize(({ m }) => m)};
  color: ${getColorByTheme(
    ({ neutral }) => neutral.darker,
    ({ neutral }) => neutral.lighter
  )};
`;
