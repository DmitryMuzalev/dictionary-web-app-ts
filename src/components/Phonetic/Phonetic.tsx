import { DictionaryWord } from "types";
import styles from "./Phonetic.module.scss";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";

interface PhoneticProps extends Pick<DictionaryWord, "word" | "phonetics"> {}

export const Phonetic = ({ word, phonetics }: PhoneticProps) => {
  const { audio, text } = phonetics[0];

  const audioObj = new Audio(audio);

  const handlerPlay = () => {
    audioObj.play();
  };

  return (
    <div className={styles.phonetic}>
      <div className={styles.phoneticWord}>
        <h2>{word}</h2>
        <p>{text}</p>
      </div>
      <PlayIcon onClick={handlerPlay} style={{ cursor: "pointer" }} />
    </div>
  );
};
