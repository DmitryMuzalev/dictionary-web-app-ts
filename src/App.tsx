import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Search } from "components/Search/Search";
import { Word } from "components/Word/Word";
import { defaultWord } from "mock";
import { useState } from "react";
import { DictionaryWord, DictionaryNotFoundWord } from "types";
import { isWord } from "utils/typeguards";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [word, setWord] = useState<DictionaryWord | null>(defaultWord);

  const fetchWord = async (word: string) => {
    const url = BASE_URL + word;
    const response = await fetch(url);
    const result = (await response.json()) as
      | DictionaryWord[]
      | DictionaryNotFoundWord;

    const data = Array.isArray(result) ? result[0] : result;

    if (isWord(data)) {
      setWord(data);
    } else {
      setWord(null);
    }
  };

  return (
    <Container>
      <Header />
      <Search hasError onSubmit={fetchWord} />
      {word && <Word data={word} />}
      {/*  <NotFoundWord /> */}
    </Container>
  );
}

export default App;
