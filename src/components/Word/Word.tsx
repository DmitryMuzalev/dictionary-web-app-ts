import { Phonetic } from "components/Phonetic/Phonetic";
import styles from "./Word.module.scss";

import { Meaning } from "components/Meaning/Meaning";
import { DictionaryWord } from "types";

interface WordProps {
  data: DictionaryWord;
}

export const Word = ({ data }: WordProps) => {
  const { meanings, phonetics, word, sourceUrls } = data;

  return (
    <div className={styles.word}>
      <Phonetic word={word} phonetics={phonetics} />
      <div className={styles.wordMeanings}>
        {meanings.map((meaning, index) => {
          return <Meaning key={index} {...meaning} />;
        })}
      </div>

      {sourceUrls && !!sourceUrls.length && (
        <div className={styles.wordSource}>
          <h3>Source</h3>
          <ul>
            {sourceUrls.map((url, index) => {
              return (
                <li key={index}>
                  <a href={url} target="_blank">
                    {url}
                  </a>
                  <i className="icon-new-window"></i>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
