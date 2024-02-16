import { useEffect, useState } from "react";
import styles from "./ThemeSwitcher.module.scss";
import { clsx } from "clsx";

interface ThemeSwitcherProps {}

export const ThemeSwitcher = ({}: ThemeSwitcherProps) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const themeSwitcherClasses = clsx(
    styles.themeSwitcher,
    isDark && styles.themeSwitcherChecked
  );

  return (
    <label htmlFor="themeSwitcher" className={themeSwitcherClasses}>
      <div className={styles.switcher}>
        <input
          type="checkbox"
          id="themeSwitcher"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />
        <span className={styles.switcherSlider}></span>
      </div>
      <i className="icon-moon"></i>
    </label>
  );
};
