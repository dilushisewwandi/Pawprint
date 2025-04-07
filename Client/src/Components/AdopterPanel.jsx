// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./AdopterPanel.css"; 

// const AdopterPanel = () => {
//   const navigate = useNavigate();

//   const handleCreateAccountClick = () => {
//     navigate("/adopter/:userId");
//   };

//   const handleRegisterPetClick = () => {
//     navigate("/pet/register");
//   };

//   const handleCheckRequestsClick = () => {
//     navigate("/findAdoptionRequests");
//   };

//   return (
//     <div className="adopterPanel-section">
//       <h1>Welcome to the Adopter Management Panel</h1>
//       <p>Manage your adopter tasks and monitor adoption requests status with ease.</p>
//       <div className="adopterPanel-content">
//         <div className="adopterPanel-card-group">
//           <div className="adopterPanel-card">
//             <img src="./Assets/find.jpg" className="adopterPanel-card-img" />
//           </div>
//           <button onClick={handleCreateAccountClick} className="adopterPanel-btn">Create Account</button>
//         </div>

//         <div className="adopterPanel-card-group">
//           <div className="adopterPanel-card">
//             <img src="./Assets/signup4.jpg" className="adopterPanel-card-img" />
//           </div>
//           <button onClick={handleRegisterPetClick} className="adopterPanel-btn">Register a Pet</button>
//         </div>

//         <div className="adopterPanel-card-group">
//           <div className="adopterPanel-card">
//             <img src="./Assets/signup back2.jpg" className="adopterPanel-card-img" />
//           </div>
//           <button onClick={handleCheckRequestsClick} className="adopterPanel-btn">Check Adoption Requests Status</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdopterPanel;


import React from "react";
import { useNavigate } from "react-router-dom";
import PanelCard from "./PanelCard";
import { FaPaw, FaHistory, FaUserEdit, FaClipboardList, FaBell } from "react-icons/fa";
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

        {/* <PanelCard
          icon={<FaHistory size={50} color="#fff" />}
          title="Adoption History"
          description="View your past adoption records."
          onClick={() => navigate("/adoptionHistory")}
        /> */}

        <PanelCard
          icon={<FaUserEdit size={50} color="#fff" />}
          title="Manage Profile"
          description="Update your adopter profile."
          onClick={() => navigate("/adopter/:userId")}
        />

        {/* <PanelCard
          icon={<FaClipboardList size={50} color="#fff" />}
          title="Track Adoption Requests"
          description="Check the status of your requests."
          onClick={() => navigate("/trackAdoptionRequests")}
        /> */}

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