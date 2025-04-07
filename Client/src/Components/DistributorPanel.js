// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./DistributorPanel.css"; 

// const DistributorPanel = () => {
//   const navigate = useNavigate();

//   const handleCreateAccountClick = () => {
//     navigate("/distributor/:userId");
//   };

//   const handleRegisterPetClick = () => {
//     navigate("/pet/register");
//   };

//   const handleCheckRequestsClick = () => {
//     navigate("/findAdoptionRequests");
//   };

//   return (
//     <div className="distributorPanel-section">
//       <h1>Welcome to the Distributor Management Panel</h1>
//       <p>Manage your distribution tasks and monitor adoption requests with ease.</p>
//       <div className="distributorPanel-content">
//         <div className="distributorPanel-card-group">
//           <div className="distributorPanel-card">
//             <img src="./Assets/find.jpg" className="distributorPanel-card-img" />
//           </div>
//           <button onClick={handleCreateAccountClick} className="distributorPanel-btn">Create Account</button>
//         </div>

//         <div className="distributorPanel-card-group">
//           <div className="distributorPanel-card">
//             <img src="./Assets/signup4.jpg" className="distributorPanel-card-img" />
//           </div>
//           <button onClick={handleRegisterPetClick} className="distributorPanel-btn">Register a Pet</button>
//         </div>

//         <div className="distributorPanel-card-group">
//           <div className="distributorPanel-card">
//             <img src="./Assets/signup back2.jpg" className="distributorPanel-card-img" />
//           </div>
//           <button onClick={handleCheckRequestsClick} className="distributorPanel-btn">Check Adoption Requests</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DistributorPanel;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import PanelCard from "./PanelCard";
// import { FaPaw, FaUserEdit, FaClipboardList, FaBell, FaDog } from "react-icons/fa";
// import styles from "./DistributorPanel.module.css";  // Import the module

// const DistributorPanel = () => {
//   const navigate = useNavigate();

//   return (
//     <div className={styles.distributorPanelSection}>
//       <h1>Welcome to the Distributor Panel</h1>
//       <p>Manage your distributor journey seamlessly.</p>
      
//       <div className={styles.distributorPanelContent}>
//         <PanelCard
//           icon={<FaUserEdit size={50} color="#fff" />}
//           title="Manage Profile"
//           description="Update your distributor profile."
//           onClick={() => navigate(`/distributor/:userID`)}
//         />
        
//         <PanelCard
//           icon={<FaPaw size={50} color="#fff" />}
//           title="Pet Management"
//           description="Manage your pets for adoption."
//           onClick={() => navigate("/pet/register")}
//         />

//         <PanelCard
//           icon={<FaDog size={50} color="#fff" />}
//           title="My Pets"
//           description="View your all pets."
//           onClick={() => navigate("/myPets/:userID")}
//         />

//         <PanelCard
//           icon={<FaBell size={50} color="#fff" />}
//           title="Adoption Requests Notifications"
//           description="Check your pet adoption requests."
//           onClick={() => navigate("/findAdoptionRequests")}
//         />

//         <PanelCard
//           icon={<FaClipboardList size={50} color="#fff" />}
//           title="Vet Booking Status"
//           description="Stay updated with your vet bookings."
//           onClick={() => navigate("/trackVetAppointment/:userID")}
//         />

//         <PanelCard
//           icon={<FaClipboardList size={50} color="#fff" />}
//           title="Daycare Booking Status"
//           description="Stay updated with your daycare bookings."
//           onClick={() => navigate("/trackDaycareBooking/:userID")}
//         />
//       </div>
//     </div>
//   );
// };

// export default DistributorPanel;



import React from "react";
import { useNavigate } from "react-router-dom";
import PanelCard from "./PanelCard";
import { FaPaw, FaUserEdit, FaClipboardList, FaBell, FaDog, FaClinicMedical, FaHome } from "react-icons/fa";
import styles from "./DistributorPanel.module.css";  // Import the module

const DistributorPanel = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.distributorPanelSection}>
      <h1>Welcome to the Distributor Panel</h1>
      <p>Manage your distributor journey seamlessly.</p>
      
      <div className={styles.distributorPanelContent}>
        <PanelCard
          icon={<FaUserEdit size={50} color="#fff" />}
          title="Manage Profile"
          description="Update your distributor profile."
          onClick={() => navigate(`/distributor/:userID`)}
        />
        
        <PanelCard
          icon={<FaPaw size={50} color="#fff" />}
          title="Pet Management"
          description="Manage your pets for adoption."
          onClick={() => navigate("/pet/register")}
        />

        <PanelCard
          icon={<FaDog size={50} color="#fff" />}
          title="My Pets"
          description="View your all pets."
          onClick={() => navigate("/myPets/:userID")}
        />

        <PanelCard
          icon={<FaBell size={50} color="#fff" />}
          title="Adoption Requests Notifications"
          description="Check your pet adoption requests."
          onClick={() => navigate("/findAdoptionRequests")}
        />

        <PanelCard
          icon={<FaClipboardList size={50} color="#fff" />}
          title="Vet Booking Status"
          description="Stay updated with your vet bookings."
          onClick={() => navigate("/trackVetAppointment/:userID")}
        />

        <PanelCard
          icon={<FaClipboardList size={50} color="#fff" />}
          title="Daycare Booking Status"
          description="Stay updated with your daycare bookings."
          onClick={() => navigate("/trackDaycareBooking/:userID")}
        />

        <PanelCard
          icon={<FaClinicMedical size={50} color="#fff" />}
          title="Book a Vet"
          description="Schedule a vet appointment."
          onClick={() => navigate("/vetProfiles")}
        />

        <PanelCard
          icon={<FaHome size={50} color="#fff" />}
          title="Book a Daycare"
          description="Find and book a daycare for your pet."
          onClick={() => navigate("/daycare")}
        />
      </div>
    </div>
  );
};

export default DistributorPanel;



