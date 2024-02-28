import { useState } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
  onSubmit: (v: string) => void;
}

type FormInputs = {
  word: HTMLInputElement;
};

export const Search = ({ onSubmit }: SearchProps) => {
  const [isEmptyField, setIsEmptyField] = useState(false);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement & FormInputs>) => {
    e.preventDefault();
    const value = e.currentTarget.word.value.trim();
    if (value) {
      onSubmit(value);
      isEmptyField && setIsEmptyField(false);
      e.currentTarget.reset();
    } else {
      setIsEmptyField(true);
    }
  };
  return (
    <form className={styles.form} onSubmit={handlerSubmit} autoComplete="off">
      <div className={styles.search}>
        <input
          name="word"
          className={`${styles.searchTextField}  ${
            isEmptyField ? styles.searchTextFieldError : ""
          }`}
          type="text"
          placeholder="Search for any word..."
        />
        <button className={styles.searchButton}>
          <i className="icon-search"></i>
        </button>
      </div>
      {isEmptyField && <p className="error">Whoops, can't be empty...</p>}
    </form>
  );
};
