import { useEffect, useState } from "react";
import JoueurCard from "../components/JoueurCard";
import { useParams } from "react-router-dom";

function EquipeId() {
  const { id } = useParams();
  const [equipe, setEquipe] = useState();

  useEffect(() => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"
      }/equipes/${id}`
    )
      .then((response) => response.json())
      .then((data) => setEquipe(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around p-10 gap-y-10">
      {equipe != null &&
        equipe.joueurs.map((joueur) => (
          <JoueurCard key={joueur.id} joueur={joueur} />
        ))}
    </div>
  );
}

export default EquipeId;
