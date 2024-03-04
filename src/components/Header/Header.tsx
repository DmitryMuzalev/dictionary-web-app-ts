import styles from "./Header.module.scss";
import { ReactComponent as IconLogo } from "assets/logo.svg";
import { Switchers } from "components/Switchers/Switchers";

export const Header = () => (
  <header className={styles.header}>
    <IconLogo />
    <Switchers />
  </header>
);
