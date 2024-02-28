import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { NotFoundWord } from "components/NotFoundWord/NotFoundWord";
import { Search } from "components/Search/Search";
import { Word } from "components/Word/Word";
import { useAppContext } from "hook/useAppContext";

function App() {
  const { fetchWord, word, notFound } = useAppContext();

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
