// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaCheckCircle, FaTimesCircle, FaClinicMedical, FaBookMedical, FaHome } from "react-icons/fa";
// import styles from "./MyPets.css";

// const MyPets = () => {
//   const { userID } = useParams();
//   const [pets, setPets] = useState([]);

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {   
//         const response = await axios.get(`http://localhost:8800/api/distributor/myPets/${userID}`);
//         setPets(response.data);
//       } catch (error) {
//         console.error("Error fetching pets:", error);
//       }
//     };

//     fetchPets();
//   }, [userID]);

//   return (
//     <div className={styles.myPetsContainer}>
//       <h1>My Registered Pets</h1>
//       <p>View all your registered pets along with their history and status.</p>
      
//       <table className={styles.petsTable}>
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>Name</th>
//             <th>Breed</th>
//             <th>Age</th>
//             <th>Status</th>
//             <th>Daycare</th>
//             <th>Vet Visits</th>
//             <th>Health Card</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pets.map((pet) => (
//             <tr key={pet.petID}>
//               <td><img src={pet.petImage} alt={pet.petName} className={styles.petImage} /></td>
//               <td>{pet.petName}</td>
//               <td>{pet.petBreed}</td>
//               <td>{pet.petAge} years</td>
//               <td>
//                 {pet.status === "available" ? (
//                   <FaCheckCircle color="green" />
//                 ) : (
//                   <FaTimesCircle color="red" />
//                 )} {pet.status}
//               </td>
//               <td><FaHome /> {pet.daycare ? pet.daycare : "No record"}</td>
//               <td><FaClinicMedical /> {pet.vetVisits}</td>
//               <td><FaBookMedical /> {pet.healthCard > 0 ? "Available" : "Not available"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyPets;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaPaw, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaEye } from "react-icons/fa";
// import axios from "axios";
// import "./MyPets.css"; // Ensure proper CSS styling for your component

// const MyPets = () => {
//   const navigate = useNavigate();
//   const [userID, setUserID] = useState(""); // State for User ID input
//   const [pets, setPets] = useState([]); // State to store the user's pets
//   const [error, setError] = useState(""); // State for error handling

//   // Fetch user's pets from the backend
//   const fetchPets = async () => {
//     if (!userID.trim()) {
//       setError("Please enter your User ID.");
//       return;
//     }

//     try {
//       // Using the updated API URL with userID
//       const response = await axios.get(`http://localhost:8800/api/distributor/myPets/${userID}`);
//       setPets(response.data.pets);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching pets:", error);
//       setError("No pets found or an error occurred.");
//     }
//   };

//   // Function to render pet adoption status with icons
//   const renderStatus = (status) => {
//     switch (status) {
//       case "Adopted":
//         return <FaCheckCircle className="status-icon adopted" />;
//       case "Available":
//         return <FaHourglassHalf className="status-icon available" />;
//       case "Pending":
//         return <FaTimesCircle className="status-icon pending" />;
//       default:
//         return status;
//     }
//   };

//   return (
//     <div className="my-pets-container">
//       <h2 className="header">
//         <FaPaw className="header-icon" /> My Pets
//       </h2>
//       <p className="subtext">Enter your User ID to check the status of your pets.</p>

//       {/* User ID Input */}
//       <div className="user-id-input">
//         <input
//           type="text"
//           placeholder="Enter your User ID"
//           value={userID}
//           onChange={(e) => setUserID(e.target.value)}
//         />
//         <button onClick={fetchPets}>Fetch Pets</button>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {/* Display pets if available */}
//       <div className="table-container">
//         <table className="pets-table">
//           <thead>
//             <tr>
//               <th>Pet Name</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {pets.length > 0 ? (
//               pets.map((pet) => (
//                 <tr key={pet.petID}>
//                   <td>{pet.petName}</td>
//                   <td>{renderStatus(pet.status)}</td>
//                   <td>
//                     <button
//                       className="view-btn"
//                       onClick={() => navigate(`/petDetails/${pet.petID}`)}
//                     >
//                       <FaEye /> View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No pets found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyPets;


import React, { useState } from "react";
import axios from "axios";
import { FaPaw, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";
import "./MyPets.css";

const MyPets = () => {
  const [userID, setUserID] = useState("");
  const [pets, setPets] = useState([]);
  const [error, setError] = useState("");

  const fetchPets = async () => {
    if (!userID.trim()) {
      setError("Please enter your User ID.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8800/api/distributor/myPets/${userID}`);
      setPets(response.data.pets);
      setError("");
    } catch (error) {
      console.error("Error fetching pets:", error);
      setError("No pets found or an error occurred.");
    }
  };

  const renderStatus = (status) => {
    switch (status) {
      case "Adopted":
        return <FaCheckCircle className="status-icon adopted" />;
      case "Available":
        return <FaHourglassHalf className="status-icon available" />;
      case "Pending":
        return <FaTimesCircle className="status-icon pending" />;
      default:
        return status;
    }
  };

  return (
    <div className="my-pets-container">
      <h2 className="header">
        <FaPaw className="header-icon" /> My Pets
      </h2>
      <p className="subtext">Enter your User ID to check the status of your pets.</p>

      <div className="user-id-input">
        <input
          type="text"
          placeholder="Enter your User ID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
        <button onClick={fetchPets}>Fetch Pets</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="table-container">
        <table className="pets-table">
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Age </th>
              <th>Breed</th>
              <th>Gender</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Skin Color</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pets.length > 0 ? (
              pets.map((pet) => (
                <tr key={pet.petID}>
                  <td>{pet.petName}</td>
                  <td>{pet.petAge}Months</td>
                  <td>{pet.petBreed}</td>
                  <td>{pet.petGender}</td>
                  <td>{pet.petWeight}Kg</td>
                  <td>{pet.petHeight}cm</td>
                  <td>{pet.petSkinColor}</td>
                  <td>{renderStatus(pet.status)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No pets found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPets;