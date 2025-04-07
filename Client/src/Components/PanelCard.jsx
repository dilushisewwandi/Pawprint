import React from "react";
import PropTypes from "prop-types";
import "./PanelCard.css"; // Separate PanelCard styles

const PanelCard = ({ icon, title, description, onClick }) => {
  return (
    <div className="panelCard" onClick={onClick}>
      <div className="panelCard-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

PanelCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default PanelCard;
