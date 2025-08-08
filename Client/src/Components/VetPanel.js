import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUserEdit, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";
import PanelCard from "./PanelCard";
import "./VetPanel.css"; 

const VetPanel = () => {
  const navigate = useNavigate();

  return (
    <div className="vetPanel-section">
      <h1>Welcome to the Vet Panel</h1>
      <p>Manage your veterinary tasks and monitor appointments with ease.</p>
      
      <div className="vetPanel-content">
        <PanelCard
          icon={<FaUserEdit size={50} color="#fff" />}
          title="Manage Vet Profile"
          description="Manage your veterinary profile."
          onClick={() => navigate("/vet/create")}
        />

        <PanelCard
          icon={<FaCalendarCheck size={50} color="#fff" />}
          title="Manage Appointments"
          description="View and manage your vet appointments."
          onClick={() => navigate("/findVetAppointment")}
        />

        <PanelCard
          icon={<FaHeartbeat size={50} color="#fff" />}
          title="Health Card Management"
          description="Access and update health reports and records."
          onClick={() => navigate("/healthCardMainDashBoard")}
        />
      </div>
    </div>
  );
};

export default VetPanel;
