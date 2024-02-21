import styles from "./Links.module.scss";

interface LinksProps {
  title: string;
  list: string[];
  isNested?: boolean;
}

export const Links = ({ title, list, isNested = false }: LinksProps) => (
  <div className={styles.links}>
    {isNested ? <h5>{title}</h5> : <h4>{title}</h4>}
    <div className={styles.linksWrap}>
      {list.map((item, index) => {
        return (
          <a
            href={`#${item}`}
            key={index}
            className={isNested ? styles.linksItemSmall : styles.linksItem}
          >
            {item}
          </a>
        );
      })}
    </div>
  </div>
);
