import Categorias from "./components/Categorias";
import Pages from "./pages/Pages";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Categorias />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
