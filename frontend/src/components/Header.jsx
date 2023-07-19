import { Link } from "react-router-dom";
import Logo from "../image/logoCSGO.png";

function Header() {
  return (
    <header className="header">
      <Link
        to="/admin"
        className="bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
      >
        Admin
      </Link>
      <Link to="/">
        <img src={Logo} alt="logo Team CS" className="headerLogo" />
      </Link>
      <button
        type="button"
        className="bg-stone-500 hover:bg-stone-400 text-white font-bold py-2 px-4 border-b-4 border-stone-700 hover:border-stone-500 rounded"
      >
        Connexion
      </button>
    </header>
  );
}

export default Header;
