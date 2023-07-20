import React, { useState } from "react";
import "../App.css";

function AddEquipe() {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState("");
  const [message, setMessage] = useState("");

  const handleTeamNameChange = (event) => {
    setTeamName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleLogoChange = (event) => {
    setLogo(event.target.value);
  };

  const handleAddEquipe = async () => {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:8080"
        }/equipes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            team_name: teamName,
            description,
            logo,
          }),
        }
      );

      if (response.ok) {
        setMessage("Equipe ajoutée avec succès !");
        setTeamName("");
        setDescription("");
        setLogo("");
      } else {
        throw new Error("Erreur lors de l'ajout de l équipe");
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de l équipe :", error);
    }
  };

  return (
    <div className="flex justify-center font-bold text-xl mb-2 mt-5">
      <form className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Ajouter une équipe
        </h1>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="teamName"
          >
            Titre :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="teamName"
            value={teamName}
            onChange={handleTeamNameChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description :
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="logo"
          >
            URL :
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="logo"
            value={logo}
            onChange={handleLogoChange}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handleAddEquipe}
        >
          Ajouter l'équipe
        </button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddEquipe;
