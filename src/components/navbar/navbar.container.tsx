import { useNavigate } from "react-router-dom";
import { ThemeTypes, useTheme } from "react-styled-guide";

import { BaseNavbar } from "~/components/navbar/navbar";
import { PATHS } from "~/routes/paths";
import { useApp } from "~/state/app/hook";
import { useAuth } from "~/state/auth/hook";

export const Navbar: React.FC = () => {
  const { storageService } = useApp();
  const { theme, setDarkTheme, setLightTheme } = useTheme();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleChangeThemeClick = (): void => {
    if (theme === ThemeTypes.dark) {
      setLightTheme();
      storageService.set("theme", ThemeTypes.light);
    } else {
      setDarkTheme();
      storageService.set("theme", ThemeTypes.dark);
    }
  };

  const handleLogoutClick = (): void => {
    signOut();
    storageService.delete("token");
    storageService.delete("user");
    navigate(PATHS.LOGIN);
  };

  return (
    <BaseNavbar
      handleLogoutClick={handleLogoutClick}
      handleChangeThemeClick={handleChangeThemeClick}
    />
  );
};
