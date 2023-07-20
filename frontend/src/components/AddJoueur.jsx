import React, { useEffect, useState } from "react";
import "../App.css";

function AddJoueur() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [biographie, setBiographie] = useState("");
  const [photo, setPhoto] = useState("");
  const [nationalite, setNationalite] = useState("");
  const [equipeId, setEquipeId] = useState("");
  const [message, setMessage] = useState("");
  const [equipes, setEquipes] = useState([]);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"}/equipes`
    )
      .then((response) => response.json())
      .then((data) => setEquipes(data))
      .catch((err) => console.error(err));
  }, []);

  const handleFirstNameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastname(event.target.value);
  };

  const handlePseudoChange = (event) => {
    setPseudo(event.target.value);
  };

  const handleBiographieChange = (event) => {
    setBiographie(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.value);
  };

  const handleNationaliteChange = (event) => {
    setNationalite(event.target.value);
  };

  const handleEquipeIdChange = (event) => {
    setEquipeId(event.target.value);
  };

  const handleAddEquipe = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"
        }/joueurs`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            pseudo,
            biographie,
            photo,
            nationalite,
            equipe_id: equipeId,
          }),
        }
      );

      if (response.ok) {
        setMessage("Joueur ajoutée avec succès !");
        setFirstname("");
        setLastname("");
        setPseudo("");
        setBiographie("");
        setPhoto("");
        setNationalite("");
        setEquipeId("");
      } else {
        throw new Error("Erreur lors de l'ajout du joueur");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout du joueur :", error);
    }
  };

  return (
    <div className="flex justify-center font-bold text-xl mb-2 mt-5">
      <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Ajouter un joueur
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="firstname"
          >
            Prenom :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstname"
            value={firstname}
            onChange={handleFirstNameChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="lastname"
          >
            Nom de Famille :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="lastname"
            value={lastname}
            onChange={handleLastNameChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="pseudo"
          >
            Pseudo :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="pseudo"
            value={pseudo}
            onChange={handlePseudoChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nationalite"
          >
            Nationalite :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="nationalite"
            value={nationalite}
            onChange={handleNationaliteChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="biographie"
          >
            biographie :
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="biographie"
            value={biographie}
            onChange={handleBiographieChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            URL :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="photo"
            value={photo}
            onChange={handlePhotoChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="equipeId"
          >
            Choisie une équipe
          </label>
          <select
            id="equipeId"
            value={equipeId}
            onChange={handleEquipeIdChange}
          >
            <option value="">---</option>
            {equipes.map((equipe) => (
              <option key={equipe.id} value={equipe.id}>
                {equipe.team_name}
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddEquipe}
        >
          Ajouter le joueur
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddJoueur;
