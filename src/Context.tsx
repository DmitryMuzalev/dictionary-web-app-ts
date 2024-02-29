import { createContext, useState } from "react";
import { DictionaryNotFoundWord, DictionaryWord } from "types";
import { AppState } from "types/context";
import { isWord } from "utils/typeguards";

export const Context = createContext<AppState | null>(null);

type ContextProviderProps = {
  children: React.ReactNode;
};

export const ContextProvider = (props: ContextProviderProps) => {
  const BASE_URL = "https://api.dictionaaryapi.dev/api/v2/entries/en/";

  const [word, setWord] = useState<DictionaryWord | null>(null);
  const [notFound, setNotFound] = useState<DictionaryNotFoundWord | null>(null);

  const fetchWord = async (word: string) => {
    const url = BASE_URL + word;
    const response = await fetch(url);
    console.log(response);
    const result = (await response.json()) as
      | DictionaryWord[]
      | DictionaryNotFoundWord;

    const data = Array.isArray(result) ? result[0] : result;
    if (isWord(data)) {
      notFound && setNotFound(null);
      setWord(data);
    } else {
      setWord(null);
      setNotFound(data);
    }
  };

  const state = {
    word,
    setWord,
    notFound,
    setNotFound,
    fetchWord,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
