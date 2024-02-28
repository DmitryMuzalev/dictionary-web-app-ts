import { DictionaryNotFoundWord, DictionaryWord } from "./dictionary";

type changeFn<T extends DictionaryWord | DictionaryNotFoundWord | null> =
  React.Dispatch<React.SetStateAction<T>>;

export type AppState = {
  word: DictionaryWord | null;
  setWord: changeFn<DictionaryWord | null>;
  notFound: DictionaryNotFoundWord | null;
  setNotFound: changeFn<DictionaryNotFoundWord | null>;
  fetchWord: (value: string) => void;
};
