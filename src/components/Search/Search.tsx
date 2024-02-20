import styles from "./Search.module.scss";

interface SearchProps {
  hasError: boolean;
  onSubmit: (v: string) => void;
}

type FormInputs = {
  word: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement & FormInputs>) => {
    e.preventDefault();
    const value = e.currentTarget.word.value;
    if (value) {
      onSubmit(value);
      e.currentTarget.reset();
    }
  };
  return (
    <form className={styles.form} onSubmit={handlerSubmit} autoComplete="off">
      <div className={styles.search}>
        <input
          name="word"
          className={styles.searchTextField}
          type="text"
          placeholder="Search for any word..."
        />
        <button className={styles.searchButton}>
          <i className="icon-search"></i>
        </button>
      </div>
      {hasError && <p className="error">Whoops, can't be empty...</p>}
    </form>
  );
};
