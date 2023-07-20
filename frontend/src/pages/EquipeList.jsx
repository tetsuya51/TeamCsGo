import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EquipeCard from "../components/EquipeCard";

function EquipeList() {
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"}/equipes`
    )
      .then((response) => response.json())
      .then((data) => setEquipes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-around my-20">
      {equipes.map((equipe) => (
        <Link to={`/equipes/${equipe.id}`}>
          <EquipeCard key={equipe.id} equipe={equipe} />
        </Link>
      ))}
    </div>
  );
}

export default EquipeList;
