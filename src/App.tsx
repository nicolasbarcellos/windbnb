import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { LocalsProvider } from "./context/RoomsContext";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { GlobalStyle, Container } from "./GlobalStyles";
function App() {
  return (
    <Container>
      <LocalsProvider>
        <Router>
          <Route>
            <Header />
            <Main />
          </Route>
        </Router>
      </LocalsProvider>
      <GlobalStyle />
    </Container>
  );
}

export default App;
