import React from "react";
import { useNavigate } from "react-router-dom";
import PanelCard from "./PanelCard";
import { FaHome, FaClipboardList } from "react-icons/fa";
import "./DaycarePanel.css";

const DaycarePanel = () => {
  const navigate = useNavigate();

  return (
    <div className="daycarePanel-section">
      <h1>Welcome to the Daycare Panel</h1>
      <p>Manage your daycare tasks, monitor bookings, and view schedules with ease.</p>

      <div className="daycarePanel-content">
        {/* Create Daycare Profile */}
        <PanelCard
          icon={<FaHome size={50} color="#fff" />}
          title="Manage Daycare Profile"
          description="Manage your daycare center."
          onClick={() => navigate("/daycareRegiForm")}
        />

        {/* View Bookings */}
        <PanelCard
          icon={<FaClipboardList size={50} color="#fff" />}
          title="Manage Bookings"
          description="View and manage daycare bookings."
          onClick={() => navigate("/findDaycareBooking")}
        />

      </div>
    </div>
  );
};

export default DaycarePanel;
