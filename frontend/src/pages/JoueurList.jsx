import { useEffect, useState } from "react";
import JoueurCard from "../components/JoueurCard";

function Joueurlist() {
  const [joueurs, setJoueurs] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"}/joueurs`
    )
      .then((response) => response.json())
      .then((data) => setJoueurs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around p-10 gap-y-10">
      {joueurs.map((joueur) => (
        <JoueurCard key={joueur.id} joueur={joueur} />
      ))}
    </div>
  );
}
export default Joueurlist;
