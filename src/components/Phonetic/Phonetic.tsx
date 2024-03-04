import { DictionaryWord } from "types";
import styles from "./Phonetic.module.scss";
import playIcon from "assets/play.svg";

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
        <p style={{ color: text ? "var(--accent-300)" : "var(--neutral-300)" }}>
          {text || "transcription not found"}
        </p>
      </div>
      <button
        onClick={handlerPlay}
        className={styles.phoneticPlayButton}
        disabled={!audio}
        title={!audio ? "Audio not found" : "Play"}
      >
        <i className="icon-play"></i>
      </button>
    </div>
  );
};
