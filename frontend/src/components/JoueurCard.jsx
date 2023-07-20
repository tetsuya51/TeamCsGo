import PropTypes from "prop-types";

function JoueurCard({ joueur }) {
  return (
    <figure className="max-w-sm rounded overflow-hidden shadow-2xl">
      <img className="w-full" src={joueur.photo} alt={joueur.pseudo} />
      <figcaption className="px-6 py-4">
        <h1 className="flex justify-center font-bold text-xl mb-2">
          {joueur.firstname}"{joueur.pseudo}"{joueur.lastname} ,{" "}
          {joueur.nationalite}
        </h1>
        <p className="text-gray-700 text-base">{joueur.biographie}</p>
      </figcaption>
    </figure>
  );
}

JoueurCard.propTypes = {
  joueur: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    pseudo: PropTypes.string.isRequired,
    nationalite: PropTypes.string.isRequired,
    biographie: PropTypes.string,
  }).isRequired,
};

export default JoueurCard;
