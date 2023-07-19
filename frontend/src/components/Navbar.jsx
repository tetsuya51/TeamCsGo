function Navbar() {
  return (
    <nav className="flex items-center justify-around bg-stone-500 p-6">
      <div className="w-full block justify-around lg:flex lg:items-center">
        <a
          href="/responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Equipe
        </a>
        <a
          href="/responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Joueur
        </a>
        <a
          href="/responsive-header"
          className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Score
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
