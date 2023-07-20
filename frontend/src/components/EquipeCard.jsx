import PropTypes from "prop-types";

function EquipeCard({ equipe }) {
  return (
    <figure className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={equipe.logo} alt={equipe.team_name} />
      <figcaption className="px-6 py-4">
        <h1 className="flex justify-center font-bold text-xl mb-2">
          {equipe.team_name}
        </h1>
        <p className="text-gray-700 text-base">{equipe.description}</p>
      </figcaption>
    </figure>
  );
}

EquipeCard.propTypes = {
  equipe: PropTypes.shape({
    logo: PropTypes.string.isRequired,
    team_name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
};

export default EquipeCard;
