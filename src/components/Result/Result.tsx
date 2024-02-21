import { Word } from "components/Word/Word";
import styles from "./Result.module.scss";
//import { NotFoundWord } from "components/NotFoundWord/NotFoundWord";

interface ResultProps {}

export const Result = ({}: ResultProps) => (
  <div className={styles.result}>
    <Word />
    {/*  <NotFoundWord /> */}
  </div>
);
