import { DictionaryWord, PhoneticType } from "types";
import styles from "./Phonetic.module.scss";
import playIcon from "assets/icon-play.svg";

interface PhoneticProps extends Pick<DictionaryWord, "word" | "phonetics"> {}

export const Phonetic = ({ word, phonetics }: PhoneticProps) => {
  //! Сделать проверку на наличии транскрипции и аудио
  const { audio, text } = phonetics.find((p) => p.audio !== "") as PhoneticType;

  const handlerPlay = () => {
    const audioObj = new Audio(audio);
    audioObj.play();
  };

  return (
    <div className={styles.phonetic}>
      <div className={styles.phoneticWord}>
        <h2>{word}</h2>
        <p>{text}</p>
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
