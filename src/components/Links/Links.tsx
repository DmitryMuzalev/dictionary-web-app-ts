import { useAppContext } from "hook/useAppContext";
import styles from "./Links.module.scss";

interface LinksProps {
  title: string;
  list: string[];
  isNested?: boolean;
}

export const Links = ({ title, list, isNested = false }: LinksProps) => {
  const { fetchWord } = useAppContext();
  return (
    <div className={styles.links}>
      {isNested ? <h5>{title}</h5> : <h4>{title}</h4>}
      <div className={styles.linksWrap}>
        {list.map((item, index) => {
          return (
            <a
              href={`#${item}`}
              key={index}
              className={isNested ? styles.linksItemSmall : styles.linksItem}
              onClick={(e) => {
                e.preventDefault();
                fetchWord(item);
                window.scrollTo(0, 0);
              }}
            >
              {item}
            </a>
          );
        })}
      </div>
    </div>
  );
};
