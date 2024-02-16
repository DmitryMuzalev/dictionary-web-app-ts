import { ReactComponent as IconLogo } from "assets/logo.svg";
import styles from "./Header.module.scss";

import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import { FontSwitcher } from "components/FontSwitcher/FontSwitcher";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => (
  <header className={styles.header}>
    <IconLogo />
    <FontSwitcher />
    <ThemeSwitcher />
  </header>
);
