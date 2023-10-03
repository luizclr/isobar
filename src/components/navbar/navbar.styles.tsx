import { getColor, getColorByTheme, getFontSize, getFontWeight, getSize } from "react-styled-guide";
import styled from "styled-components";

import { BaseContainer } from "~/components/container/container.styles";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  color: ${getColor(({ neutral }) => neutral.lightest)};
  width: 100%;
  background-color: ${getColorByTheme(
    ({ primary }) => primary.medium,
    ({ neutral }) => neutral.darker
  )};
  border-bottom: 1px solid
    ${getColorByTheme(
      ({ primary }) => primary.darkest,
      ({ neutral }) => neutral.dark
    )};
`;

export const TopContainer = styled(BaseContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  height: ${getSize(({ m }) => m)};
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: ${getFontSize(({ m }) => m)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  margin: ${getSize(({ nano }) => nano)};
`;

export const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: ${getSize(({ quark }) => quark)};
  border-radius: ${getSize(({ quark }) => quark)};
  border: 1px solid ${getColor(({ neutral }) => neutral.light)};
  outline: none;
  margin-top: ${getSize(({ quark }) => quark)};
  background-color: ${getColorByTheme(
    ({ primary }) => primary.lightest,
    ({ neutral }) => neutral.lightest
  )};
  font-size: ${getFontSize(({ xxs }) => xxs)};

  :focus {
    border-color: ${getColorByTheme(
      ({ primary }) => primary.dark,
      ({ neutral }) => neutral.lightest
    )};
  }
`;

export const ActionsWrapper = styled.ul`
  list-style-type: none;
  display: flex;
  direction: row;
`;

export const ActionItem = styled.li`
  font-size: ${getFontSize(({ m }) => m)};
  font-weight: ${getFontWeight(({ medium }) => medium)};
  padding: ${getSize(({ nano }) => nano)};
  display: flex;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: ${getColorByTheme(
      ({ primary }) => primary.tinyDark,
      ({ neutral }) => neutral.dark
    )};
  }

  :last-child {
    border: none;
  }
`;
