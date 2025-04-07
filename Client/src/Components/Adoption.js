// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Adoption.css'; 

// const Adoption = () => {
//   const [pets, setPets] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const fetchPets = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/pet/allpets');
//       console.log('Fetched pets:', response.data);
//       setPets(response.data);
//     } catch (error) {
//       console.error('Error fetching pets:', error);
//     }
//   };

//   const handleMoreDetails = (petID) => {
//     navigate(`/petProfile/${petID}`);
//   };

//   return (
//     <div className="adoption-container">
//       <div className="adoption-hero-section">
//         <div className="adoption-welcome-message">
//           <h1>Every Pet Deserves a Loving Home</h1>
//           <p>Will you be their hero?</p>
//           <p>Check below to find your favourite companion</p>
//         </div>
//       </div>
//       <div>
//         <h2>Search your pet</h2>
//       </div>
//       {pets.length === 0 ? (
//         <p>No pets available for adoption at the moment.</p>
//       ) : (
//         <div className="adoption-pet-cards">
//           {pets.map((pet) => (
//             <div key={pet.petID} className="adoption-pet-card">
//               <img
//                 src={`http://localhost:8800/uploads/${pet.petImage}`}
//                 alt={pet.petName}
//                 className="adoption-pet-image"
//               />
//               <div className="adoption-pet-details">
//                 <h2>{pet.petName}</h2>
//                 <p><strong>Breed:</strong> {pet.petBreed}</p>
//                 <p><strong>Age:</strong> {pet.petAge} months</p>
//                 <p><strong>Gender:</strong> {pet.petGender}</p>
//                 <p><strong>Skin Color:</strong> {pet.petSkinColor}</p>
//                 <p><strong>Height:</strong> {pet.petHeight} cm</p>
//                 <p><strong>Weight:</strong> {pet.petWeight} kg</p>
//                 <h3>{pet.status}</h3>
//                 <button onClick={() => handleMoreDetails(pet.petID)}>More details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adoption;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Adoption.css';

// const Adoption = () => {
//   const [pets, setPets] = useState([]);
//   const [searchCriteria, setSearchCriteria] = useState({
//     breed: '',
//     age: '',
//     gender: '',
//     skinColor: '',
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchPets();
//   }, []);

//   const fetchPets = async () => {
//     try {
//       const response = await axios.get('http://localhost:8800/api/pet/allpets');
//       console.log('Fetched pets:', response.data);
//       setPets(response.data);
//     } catch (error) {
//       console.error('Error fetching pets:', error);
//     }
//   };

//   const handleSearchChange = (e) => {
//     setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
//   };

//   const filteredPets = pets.filter((pet) =>
//     (searchCriteria.breed === '' || pet.petBreed.toLowerCase().includes(searchCriteria.breed.toLowerCase())) &&
//     (searchCriteria.age === '' || pet.petAge.toString() === searchCriteria.age) &&
//     (searchCriteria.gender === '' || pet.petGender.toLowerCase() === searchCriteria.gender.toLowerCase()) &&
//     (searchCriteria.skinColor === '' || pet.petSkinColor.toLowerCase().includes(searchCriteria.skinColor.toLowerCase()))
//   );

//   const handleMoreDetails = (petID) => {
//     navigate(`/petProfile/${petID}`);
//   };

//   return (
//     <div className="adoption-container">
//       <div className="adoption-hero-section">
//         <div className="adoption-welcome-message">
//           <h1>Every Pet Deserves a Loving Home</h1>
//           <p>Will you be their hero?</p>
//           <p>Check below to find your favourite companion</p>
//         </div>
//       </div>

//       <div>
//         <h2>Search your pet</h2>
//       </div>
      
//       {/* Search Bar Section */}
//       <div className="search-bar">
//         <input
//           type="text"
//           name="breed"
//           placeholder="Search by Breed"
//           value={searchCriteria.breed}
//           onChange={handleSearchChange}
//         />
//         <input
//           type="text"
//           name="age"
//           placeholder="Search by Age"
//           value={searchCriteria.age}
//           onChange={handleSearchChange}
//         />
//         <select name="gender" value={searchCriteria.gender} onChange={handleSearchChange}>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//         </select>
//         <input
//           type="text"
//           name="skinColor"
//           placeholder="Search by Skin Color"
//           value={searchCriteria.skinColor}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {filteredPets.length === 0 ? (
//         <p>No pets found matching your criteria.</p>
//       ) : (
//         <div className="adoption-pet-cards">
//           {filteredPets.map((pet) => (
//             <div key={pet.petID} className="adoption-pet-card">
//               <img
//                 src={`http://localhost:8800/uploads/${pet.petImage}`}
//                 alt={pet.petName}
//                 className="adoption-pet-image"
//               />
//               <div className="adoption-pet-details">
//                 <h2>{pet.petName}</h2>
//                 <p><strong>Breed:</strong> {pet.petBreed}</p>
//                 <p><strong>Age:</strong> {pet.petAge} months</p>
//                 <p><strong>Gender:</strong> {pet.petGender}</p>
//                 <p><strong>Skin Color:</strong> {pet.petSkinColor}</p>
//                 <p><strong>Height:</strong> {pet.petHeight} cm</p>
//                 <p><strong>Weight:</strong> {pet.petWeight} kg</p>
//                 <h3>{pet.status}</h3>
//                 <button onClick={() => handleMoreDetails(pet.petID)}>More details</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Adoption;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaPaw, FaSearch, FaVenusMars, FaDog, FaFilter, FaInfoCircle } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import heroImage from "../Assets/adopt-hero.png";
import "./Adoption.css";

const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    breed: "",
    age: "",
    gender: "",
    skinColor: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const response = await axios.get("http://localhost:8800/api/pet/allpets");
      setPets(response.data);
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

  const filteredPets = pets.filter(
    (pet) =>
      (searchCriteria.breed === "" ||
        pet.petBreed.toLowerCase().includes(searchCriteria.breed.toLowerCase())) &&
      (searchCriteria.age === "" || pet.petAge.toString() === searchCriteria.age) &&
      (searchCriteria.gender === "" ||
        pet.petGender.toLowerCase() === searchCriteria.gender.toLowerCase()) &&
      (searchCriteria.skinColor === "" ||
        pet.petSkinColor.toLowerCase().includes(searchCriteria.skinColor.toLowerCase()))
  );

  const handleMoreDetails = (petID) => {
    navigate(`/petProfile/${petID}`);
  };

  return (
    <div className="adoption-container">
      {/* Hero Section */}
      <div className="adoption-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="adoption-welcome-message">
          <h1>Every Pet Deserves a <span className="highlight">Loving Home</span></h1>
          <p>🐾 Will you be their hero? 🏡</p>
        </div>
      </div>

      {/* Search Bar Section */}
      {/* <div className="search-section">
        <h2><FaFilter /> Search for a Pet</h2>
        <div className="search-bar">
          <input
            type="text"
            name="breed"
            placeholder="Search by Breed"
            value={searchCriteria.breed}
            onChange={handleSearchChange}
          />
          <input
            type="text"
            name="age"
            placeholder="Search by Age"
            value={searchCriteria.age}
            onChange={handleSearchChange}
          />
          <select name="gender" value={searchCriteria.gender} onChange={handleSearchChange}>
            <option value="">Select Gender</option>
            <option value="Male">Male ♂</option>
            <option value="Female">Female ♀</option>
          </select>
          <input
            type="text"
            name="skinColor"
            placeholder="Search by Skin Color"
            value={searchCriteria.skinColor}
            onChange={handleSearchChange}
          />
          <button className="search-btn"><FaSearch /> Search</button>
        </div>
      </div> */}

        {/* Search Bar Section */}
<div className="search-container">
  <h2 className="search-title"><FaFilter /> Search for a Pet</h2>
  <div className="search-bar">
    <input
      type="text"
      name="breed"
      placeholder="Search by Breed"
      value={searchCriteria.breed}
      onChange={handleSearchChange}
    />
    <input
      type="text"
      name="age"
      placeholder="Search by Age"
      value={searchCriteria.age}
      onChange={handleSearchChange}
    />
    <select name="gender" value={searchCriteria.gender} onChange={handleSearchChange}>
      <option value="">Select Gender</option>
      <option value="Male">Male ♂</option>
      <option value="Female">Female ♀</option>
    </select>
    <input
      type="text"
      name="skinColor"
      placeholder="Search by Skin Color"
      value={searchCriteria.skinColor}
      onChange={handleSearchChange}
    />
    <button className="search-btn"><FaSearch /> Search</button>
  </div>
</div>

      {/* Pet Listings */}
      {filteredPets.length === 0 ? (
        <p className="no-pets">🐶 No pets found matching your criteria.</p>
      ) : (
        <div className="adoption-pet-cards">
          {filteredPets.map((pet) => (
            <div key={pet.petID} className="adoption-pet-card">
              <img
                src={`http://localhost:8800/uploads/${pet.petImage}`}
                alt={pet.petName}
                className="adoption-pet-image"
              />
              <div className="adoption-pet-details">
                <h2><FaPaw /> {pet.petName}</h2>
                <p><FaDog /> <strong>Breed:</strong> {pet.petBreed}</p>
                <p><MdOutlinePets /> <strong>Age:</strong> {pet.petAge} months</p>
                <p><FaVenusMars /> <strong>Gender:</strong> {pet.petGender}</p>
                <p><strong>Skin Color:</strong> {pet.petSkinColor}</p>
                <p><strong>Height:</strong> {pet.petHeight} cm</p>
                <p><strong>Weight:</strong> {pet.petWeight} kg</p>
                <h3 className={pet.status === "Available" ? "status-available" : "status-requested"}>
                  {pet.status}
                </h3>
                <button onClick={() => handleMoreDetails(pet.petID)} className="details-btn">
                  <FaInfoCircle /> More details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Adoption;
