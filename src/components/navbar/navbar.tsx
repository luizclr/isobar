import { ReactElement, useEffect, useState } from "react";
import { BsCloudSun, BsMoonStars } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useApp } from "~/state/app/hook";

export const BaseNavbar: React.FC<BaseNavbarProps> = ({
  handleLogoutClick,
  handleChangeThemeClick,
}: BaseNavbarProps) => {
  const { theme } = useTheme();
  const location = useLocation();
  const { setFilter } = useApp();
  const navigate = useNavigate();
  const [isBandPage, setIsBandPage] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname.startsWith(PATHS.BAND)) setIsBandPage(true);
    else setIsBandPage(false);
  }, [location]);

  const renderBackIcon = (): ReactElement => (
    <ActionItem onClick={() => navigate(PATHS.HOME)}>
      <RiArrowLeftSLine size={25} />
    </ActionItem>
  );

  const renderFilter = (): ReactElement => (
    <>
      <LogoWrapper
        onClick={() => {
          navigate(PATHS.HOME);
        }}
      >
        <Title>Isobar</Title>
      </LogoWrapper>
      <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)} />
    </>
  );

  return (
    <NavbarWrapper data-testid="navbar">
      <TopContainer>
        {isBandPage ? renderBackIcon() : renderFilter()}
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
