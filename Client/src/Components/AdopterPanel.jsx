import React from "react";
import { useNavigate } from "react-router-dom";
import PanelCard from "./PanelCard";
import { FaPaw, FaUserEdit, FaBell } from "react-icons/fa";
import "./AdopterPanel.css"; // Only contains styles for AdopterPanel

const AdopterPanel = () => {
  const navigate = useNavigate();
  const userID = localStorage.getItem("userID"); // Retrieve userID

  return (
    <div className="adopterPanel-section">
      <h1>Welcome to the Adopter Panel</h1>
      <p>Manage your adoption journey seamlessly.</p>
      
      <div className="adopterPanel-content">
        <PanelCard
          icon={<FaPaw size={50} color="#fff" />}
          title="View Available Pets"
          description="Browse pets ready for adoption."
          onClick={() => navigate("/adopt")}
        />

        <PanelCard
          icon={<FaUserEdit size={50} color="#fff" />}
          title="Manage Profile"
          description="Update your adopter profile."
          onClick={() => navigate("/adopter/:userId")}
        />

        <PanelCard
          icon={<FaBell size={50} color="#fff" />}
          title="Track Adoption Requests"
          description="Stay updated with your adoption requests."
          onClick={() => navigate("/trackAdoption/${userID}")}
        />
      </div>
    </div>
  );
};

export default AdopterPanel;