import { useState } from "react";
import styles from "./FontSwitcher.module.scss";

interface FontSwitcherProps {}

type FontSwitcherValue = "serif" | "sans-serif" | "mono";

export const FontSwitcher = ({}: FontSwitcherProps) => {
  const [selectFont, setSelectFont] = useState("serif");
  const [isOpen, setIsOpen] = useState(false);

  const option: FontSwitcherValue[] = ["serif", "sans-serif", "mono"];

  const toggleSwitcher = () => setIsOpen((prev) => !prev);

  return (
    <div className={styles.fontSwitcher}>
      <button className={styles.fontSwitcherButton} onClick={toggleSwitcher}>
        {selectFont} <i className="icon-arrow-down"></i>
      </button>
      {isOpen && (
        <ul className={styles.fontSwitcherOption}>
          {option.map((op, i) => {
            return (
              <li
                key={i}
                onClick={() => {
                  setSelectFont(op);
                  setIsOpen(false);
                }}
              >
                {op}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
