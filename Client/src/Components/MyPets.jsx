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