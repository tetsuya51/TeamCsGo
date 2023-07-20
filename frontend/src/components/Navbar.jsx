import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-around bg-stone-500 p-6">
      <div className="sm:sticky w-full justify-around lg:flex lg:items-center">
        <Link
          to="/equipes"
          className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Equipe
        </Link>
        <Link
          to="/joueurs"
          className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Joueur
        </Link>
        <Link
          to="/scores"
          className="mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Score
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
