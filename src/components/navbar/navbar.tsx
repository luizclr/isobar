import { BsCloudSun, BsMoonStars } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ThemeTypes, useTheme } from "react-styled-guide";

import {
  ActionItem,
  ActionsWrapper,
  Input,
  LogoWrapper,
  NavbarWrapper,
  Title,
  TopContainer,
} from "~/components/navbar/navbar.styles";
import { BaseNavbarProps } from "~/components/navbar/types";
import { PATHS } from "~/routes/paths";

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseNavbarProps) => {
  const { theme } = useTheme();
  const navigate = useNavigate();

  return (
    <NavbarWrapper data-testid="navbar">
      <TopContainer>
        <LogoWrapper
          onClick={() => {
            navigate(PATHS.HOME);
          }}
        >
          <Title>Isobar</Title>
        </LogoWrapper>
        <Input />
        <ActionsWrapper>
          <ActionItem onClick={handleChangeThemeClick}>
            {theme === ThemeTypes.dark ? <BsCloudSun size={25} /> : <BsMoonStars size={25} />}
          </ActionItem>
          <ActionItem onClick={handleLogoutClick}>
            <FiLogOut size={25} />
          </ActionItem>
        </ActionsWrapper>
      </TopContainer>
    </NavbarWrapper>
  );
};
