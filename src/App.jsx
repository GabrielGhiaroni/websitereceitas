import Categorias from "./components/Categorias";
import Pages from "./pages/Pages";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <BrowserRouter>
    <Search />
      <Categorias />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
