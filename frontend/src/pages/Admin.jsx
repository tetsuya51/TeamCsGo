import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "../App.css";

function Admin() {
  return (
    <>
      <h1 className=" flex justify-around font-bold text-xl mb-2">
        Page administrateur
      </h1>
      <div className="buttonNav">
        <Link
          to="/addequipes"
          className="lg:w-1/4 flex justify-center items-center bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
        >
          <AiFillFileAdd size={50} color="black" /> Ajouter une équipe
        </Link>
        <Link
          to="/addjoueur"
          className="lg:w-1/4 flex justify-center items-center bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
        >
          <AiFillFileAdd size={50} color="black" /> Ajouter un joueur
        </Link>
        <Link
          to="/editequipes"
          className="lg:w-1/4 flex justify-center items-center bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
        >
          <FaEdit size={50} color="black" /> Modifier une équipe
        </Link>
        <Link
          to="/deleteequipes"
          className="lg:w-1/4 flex justify-center items-center bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
        >
          <FaTrash size={50} color="black" /> Supprimer des équipes
        </Link>
      </div>
    </>
  );
}

export default Admin;
