import { DictionaryNotFoundWord } from "types";
import styles from "./NotFoundWord.module.scss";

interface NotFoundWordProps {
  data: DictionaryNotFoundWord;
}

export const NotFoundWord = ({ data }: NotFoundWordProps) => (
  <div className={styles.notFoundWord}>
    <span className={styles.smile}>&#128533;</span>
    <h2>{data.title}</h2>
    <p>{data.message + " " + data.resolution}</p>
  </div>
);
