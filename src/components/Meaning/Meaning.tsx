import { MeaningType } from "types";
import styles from "./Meaning.module.scss";
import { Definition } from "components/Definition/Definition";
import { Links } from "components/Links/Links";

export const Meaning = ({
  partOfSpeech,
  definitions,
  antonyms,
  synonyms,
}: MeaningType) => (
  <div className={styles.meaning}>
    <div className={styles.meaningTitle}>
      <h3>{partOfSpeech}</h3>
      <span></span>
    </div>
    <div className={styles.meaningContent}>
      <div className={styles.meaningDefinitions}>
        <h4>meaning</h4>
        <ul>
          {definitions.map((definition, index) => {
            return <Definition key={index} {...definition} />;
          })}
        </ul>
      </div>
      {!!synonyms.length && <Links title="synonyms" list={synonyms} />}
      {!!antonyms.length && <Links title="antonyms" list={antonyms} />}
    </div>
  </div>
);
