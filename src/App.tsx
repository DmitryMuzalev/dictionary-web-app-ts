import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Result } from "components/Result/Result";
import { Search } from "components/Search/Search";

function App() {
  return (
    <Container>
      <Header />
      <Search hasError onSubmit={() => {}} />
      <Result />
    </Container>
  );
}

export default App;
