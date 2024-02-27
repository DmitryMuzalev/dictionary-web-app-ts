import { DictionaryWord } from "types";
import styles from "./Phonetic.module.scss";
import playIcon from "assets/icon-play.svg";

interface PhoneticProps
  extends Pick<DictionaryWord, "word" | "phonetic" | "phonetics"> {}

export const Phonetic = ({ word, phonetic, phonetics }: PhoneticProps) => {
  const text = phonetic ? phonetic : phonetics.find((p) => p.text !== "")?.text;
  const audio = phonetics.find((p) => p.audio !== "")?.audio;

  const handlerPlay = () => {
    if (audio) {
      const audioObj = new Audio(audio);
      audioObj.play();
    }
  };

  return (
    <div className={styles.phonetic}>
      <div className={styles.phoneticWord}>
        <h2>{word}</h2>
        <p>{text || ""}</p>
      </div>
      <img
        className={styles.phoneticPlay}
        onClick={handlerPlay}
        src={playIcon}
        alt="play"
      />
    </div>
  );
};
