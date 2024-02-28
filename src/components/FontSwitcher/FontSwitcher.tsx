import { useEffect, useState } from "react";
import styles from "./FontSwitcher.module.scss";
import { useOutsideClick } from "hook/useOutsideClick";

interface FontSwitcherProps {}

type FontSwitcherValue = "serif" | "sans serif" | "mono";

export const FontSwitcher = ({}: FontSwitcherProps) => {
  const [selectFont, setSelectFont] = useState("serif");
  const [isOpen, setIsOpen] = useState(false);

  const option: FontSwitcherValue[] = ["serif", "sans serif", "mono"];

  const toggleSwitcher = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    document.body.setAttribute("data-font", selectFont);
  }, [selectFont]);

  const handlerClickOutside = () => setIsOpen(false);

  const ref = useOutsideClick(handlerClickOutside);

  return (
    <div className={styles.fontSwitcher} ref={ref}>
      <button className={styles.fontSwitcherButton} onClick={toggleSwitcher}>
        {selectFont} <i className="icon-arrow-down"></i>
      </button>
      {isOpen && (
        <ul className={styles.fontSwitcherOption}>
          {option.map((op, i) => {
            return (
              <li className={selectFont === op ? styles.activeFont : ""}>
                <button
                  key={i}
                  onClick={() => {
                    setSelectFont(op);
                    setIsOpen(false);
                  }}
                >
                  {op}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
