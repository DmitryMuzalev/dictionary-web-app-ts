import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { NotFoundWord } from "components/NotFoundWord/NotFoundWord";
import { Search } from "components/Search/Search";
import { Word } from "components/Word/Word";
import { useState } from "react";
import { DictionaryWord, DictionaryNotFoundWord } from "types";
import { isWord } from "utils/typeguards";

const BASE_URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function App() {
  const [word, setWord] = useState<DictionaryWord | null>(null);
  const [notFound, setNotFound] = useState<DictionaryNotFoundWord | null>(null);

  const fetchWord = async (word: string) => {
    const url = BASE_URL + word;
    const response = await fetch(url);
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

  return (
    <Container>
      <Header />
      <Search onSubmit={fetchWord} />
      <main>
        {word && <Word data={word} />}
        {notFound && <NotFoundWord data={notFound} />}
      </main>
    </Container>
  );
}

export default App;
