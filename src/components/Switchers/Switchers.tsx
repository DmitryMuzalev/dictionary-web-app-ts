import styles from "./Switchers.module.scss";

import { ThemeSwitcher } from "components/ThemeSwitcher/ThemeSwitcher";
import { FontSwitcher } from "components/FontSwitcher/FontSwitcher";

interface SwitchersProps {}

export const Switchers = ({}: SwitchersProps) => (
  <div className={styles.switchers}>
    <FontSwitcher />
    <div className={styles.switchersDivider}></div>
    <ThemeSwitcher />
  </div>
);
