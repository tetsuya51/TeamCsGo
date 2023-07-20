import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EquipeList from "./pages/EquipeList";
import "./App.css";
import Joueurlist from "./pages/JoueurList";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipes" element={<EquipeList />} />
        <Route path="/joueurs" element={<Joueurlist />} />
      </Routes>
    </div>
  );
}

export default App;
