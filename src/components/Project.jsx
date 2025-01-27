import "../Card.css";
import PropTypes from "prop-types";

function Project({ title, subtitle, description, imageSrc }) {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <p className="heading">{title}</p>
      <p>{subtitle}</p>
      {Array.isArray(description) && description.length > 0 ? (
        description.map((desc, index) => <p key={index}>{desc}</p>)
      ) : (
        <p>No description available.</p>
      )}
    </div>
  );
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.arrayOf(PropTypes.string).isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Project;
