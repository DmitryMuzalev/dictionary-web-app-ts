import { Links } from "components/Links/Links";
import styles from "./Definition.module.scss";
import { DefinitionType } from "types";

export const Definition = ({
  definition,
  example,
  synonyms,
  antonyms,
}: DefinitionType) => (
  <li className={styles.definition}>
    <p>{definition}</p>
    {example && <span>{`“${example}”`}</span>}
    {!!synonyms.length && <Links title="synonyms" list={synonyms} isNested />}
    {!!antonyms.length && <Links title="antonyms" list={antonyms} isNested />}
  </li>
);
