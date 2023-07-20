import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EquipeList from "./pages/EquipeList";
import Scores from "./components/ScoreList";
import Admin from "./pages/Admin";
import AddEquipe from "./components/AddEquipe";
import AddJoueur from "./components/AddJoueur";
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
        <Route path="/scores" element={<Scores />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/addequipes" element={<AddEquipe />} />
        <Route path="/addjoueur" element={<AddJoueur />} />
      </Routes>
    </div>
  );
}

export default App;
