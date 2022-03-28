import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer desc="Hola soy el componente ItemListContainer" />
    </>
  );
}

export default App;
