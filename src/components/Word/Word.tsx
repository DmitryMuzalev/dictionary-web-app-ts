import { Phonetic } from "components/Phonetic/Phonetic";
import styles from "./Word.module.scss";

import { defaultWord } from "mock";
import { Meaning } from "components/Meaning/Meaning";

interface WordProps {}

export const Word = ({}: WordProps) => {
  const { meanings, phonetics, word, sourceUrls } = defaultWord;

  return (
    <div className={styles.word}>
      <Phonetic word={word} phonetics={phonetics} />
      <div className={styles.wordMeanings}>
        {meanings.map((meaning, index) => {
          return <Meaning key={index} {...meaning} />;
        })}
      </div>
    </div>
  );
};
