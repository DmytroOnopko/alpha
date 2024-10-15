import { Container } from "./components/Container";
import { Transactions } from "./Transactions";
import { Deposit } from "./Deposit";
import { Header } from "./Header";

function App() {
  return (
    <>
        <Header />
        <Container>
            <Deposit/>
            <Transactions/>
        </Container>
    </>
  );
}

export default App;
