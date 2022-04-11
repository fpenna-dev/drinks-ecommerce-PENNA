import "./App.css";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <>
      <Navbar />
      {/* <ItemListContainer desc="Hola soy el componente ItemListContainer" /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
