// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import './PetProfile.css';

// const PetProfile = () => {
//     const { petID } = useParams();
//     const [pet, setPet] = useState(null);
//     const [userID, setUserID] = useState('');
//     const [adoName, setAdopterName] = useState('');
//     const [adoEmail, setAdopterEmail] = useState('');
//     const [adoptionDate, setAdoptionDate] = useState('');
//     const [adoptionTime, setAdoptionTime] = useState('');
//     const [reasonForAdoption, setReasonForAdoption] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchPetDetails();
//     }, [petID]);

//     const fetchPetDetails = async () => {
//         try {
//             const response = await axios.get(`http://localhost:8800/api/pet/petProfile/${petID}`);
//             setPet(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching pet details:', error);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             await axios.post(`http://localhost:8800/api/pet/adopt/${petID}`, {
//                 petID,
//                 userID,
//                 adoName,
//                 adoEmail,
//                 adoptionDate,
//                 adoptionTime,
//                 reasonForAdoption
//             });
//             alert("Adoption request sent to the distributor successfully!");
//         } catch (error) {
//             console.error('Error sending adoption request:', error);
//             alert("Failed to send adoption request.");
//         }
//     };

//     if (loading) {
//         return <p>Loading...</p>;
//     }

//     if (!pet) {
//         return <p>No pet found.</p>;
//     }

//     return (
//         <div className="pet-profile-page">
//             <div className="pet-profile-container">
//                 <img
//                     src={`http://localhost:8800/uploads/${pet.petImage}`}
//                     alt={pet.petName}
//                     className="adopt-pet-image"
//                 />
//                 <div className="pet-details">
//                     <h2>{pet.petName}</h2>
//                     <p><strong>Pet ID:</strong> {pet.petID}</p>
//                     <p><strong>Breed:</strong> {pet.petBreed}</p>
//                     <p><strong>Age:</strong> {pet.petAge} months</p>
//                     <p><strong>Gender:</strong> {pet.petGender}</p>
//                     <p><strong>Skin Color:</strong> {pet.petSkinColor}</p>
//                     <p><strong>Height:</strong> {pet.petHeight} cm</p>
//                     <p><strong>Weight:</strong> {pet.petWeight} kg</p>
//                 </div>

//                 <div className="distributor-details">
//                     <h3>Distributor Details:</h3>
//                     <p><strong>Name:</strong> {pet.disName}</p>
//                     <p><strong>Email:</strong> {pet.disEmail}</p>
//                     <p><strong>Phone:</strong> {pet.disPhone}</p>
//                     <p><strong>Location:</strong> {pet.disLocation}</p>
//                 </div>

//                 <div className="health-card-details">
//                     <h3>Health Details:</h3>

//                     <p><strong>Health Issues:</strong> {pet.healthIssues}</p>
//                     <p><strong>Last Checkup Date:</strong> {pet.lastCheckupDate}</p>
//                 </div>
//             </div>

//             <div className="adopt-form-container">
//                 <h1 className="adopt-welcome-message">Welcome, Future Adopter!</h1>
//                 <div className="adopt-registration-card">
//                     <div className="adopt-registration-card-body">
//                         <h2 className="adopt-regi-form-name">Adopt your furry friend today</h2>
//                         <form onSubmit={handleSubmit} className="adopt-form">
//                             <div className="adopt-form-group">
//                                 <label>User ID</label>
//                                 <input
//                                     type="text"
//                                     value={userID}
//                                     onChange={(e) => setUserID(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="adopt-form-group">
//                                 <label>Pet ID</label>
//                                 <input
//                                     type="text"
//                                     value={petID}
//                                     readOnly
//                                     required
//                                 />
//                             </div>
//                             <div className="adopt-form-group">
//                                 <label>Adopter Name</label>
//                                 <input
//                                     type="text"
//                                     value={adoName}
//                                     onChange={(e) => setAdopterName(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="adopt-form-group">
//                                 <label>Adopter Email</label>
//                                 <input
//                                     type="email"
//                                     value={adoEmail}
//                                     onChange={(e) => setAdopterEmail(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="adopt-form-group">
//                                 <label>Adoption Date</label>
//                                 <input
//                                     type="date"
//                                     value={adoptionDate}
//                                     onChange={(e) => setAdoptionDate(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="adopt-form-group">
//                                 <label>Adoption Time</label>
//                                 <input
//                                     type="time"
//                                     value={adoptionTime}
//                                     onChange={(e) => setAdoptionTime(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <div className="adopt-form-group">
//                                 <label>Reason for Adoption</label>
//                                 <input
//                                     type="text"
//                                     value={reasonForAdoption}
//                                     onChange={(e) => setReasonForAdoption(e.target.value)}
//                                     required
//                                 />
//                             </div>
//                             <button type="submit" className="adopt-regi-submit">
//                                 Submit Adoption Request
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PetProfile;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './PetProfile.css';

const PetProfile = () => {
    const { petID } = useParams();
    const [pet, setPet] = useState(null);
    const [healthProfile, setHealthProfile] = useState(null);
    const [userID, setUserID] = useState('');
    const [adoName, setAdopterName] = useState('');
    const [adoEmail, setAdopterEmail] = useState('');
    const [adoptionDate, setAdoptionDate] = useState('');
    const [adoptionTime, setAdoptionTime] = useState('');
    const [reasonForAdoption, setReasonForAdoption] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPetDetails();
        fetchHealthProfile();
    }, [petID]);

    const fetchPetDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/pet/petProfile/${petID}`);
            setPet(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching pet details:', error);
        }
    };

    const fetchHealthProfile = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/pet/healthProfile/${petID}`);
            setHealthProfile(response.data);
        } catch (error) {
            console.error('Error fetching health profile:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(`http://localhost:8800/api/pet/adopt/${petID}`, {
                petID,
                userID,
                adoName,
                adoEmail,
                adoptionDate,
                adoptionTime,
                reasonForAdoption
            });
            alert("Adoption request sent to the distributor successfully!");
        } catch (error) {
            console.error('Error sending adoption request:', error);
            alert("Failed to send adoption request.");
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!pet) {
        return <p>No pet found.</p>;
    }

    return (
        <div className="pet-profile-page">
            <div className="pet-profile-container">
                <img
                    src={`http://localhost:8800/uploads/${pet.petImage}`}
                    alt={pet.petName}
                    className="adopt-pet-image"
                />
                <div className="pet-details">
                    <h2>{pet.petName}</h2>
                    <p><strong>Pet ID:</strong> {pet.petID}</p>
                    <p><strong>Breed:</strong> {pet.petBreed}</p>
                    <p><strong>Age:</strong> {pet.petAge} months</p>
                    <p><strong>Gender:</strong> {pet.petGender}</p>
                    <p><strong>Skin Color:</strong> {pet.petSkinColor}</p>
                    <p><strong>Height:</strong> {pet.petHeight} cm</p>
                    <p><strong>Weight:</strong> {pet.petWeight} kg</p>
                </div>

                <div className="distributor-details">
                    <h3>Distributor Details:</h3>
                    <p><strong>Name:</strong> {pet.disName}</p>
                    <p><strong>Email:</strong> {pet.disEmail}</p>
                    <p><strong>Phone:</strong> {pet.disPhone}</p>
                    <p><strong>Location:</strong> {pet.disLocation}</p>
                </div>

                <div className="health-card-details">
                    {loading ? (
                        <p>Loading health profile...</p>
                    ) : healthProfile ? (
                        <>
                            <h3>Health Card</h3>
                            <p><strong>Assigned Doctor:</strong> {healthProfile.vetName}</p>
                            <p><strong>Specialization:</strong> {healthProfile.vetSpecialization}</p>
                            <h4>Vaccine Details:</h4>
                            <p><strong>Name:</strong> {healthProfile.vName}</p>
                            <p><strong>Date:</strong> {healthProfile.vDate}</p>
                            <p><strong>Dose:</strong> {healthProfile.vDose}</p>
                            <p><strong>Status:</strong> {healthProfile.vStatus}</p>
                            <p><strong>Due Date for Next:</strong> {healthProfile.dueDateForNext}</p>
                            <h4>Other Details:</h4>
                            <p><strong>Health Issues:</strong> {healthProfile.healthIssues}</p>
                            <p><strong>Last Checkup Date:</strong> {healthProfile.lastCheckupDate}</p>
                        </>
                    ) : (
                        <p>No health profile available for this pet.</p>
                    )}
                </div>
            </div>

            <div className="adopt-form-container">
                <h1 className="adopt-welcome-message">Welcome, Future Adopter!</h1>
                <div className="adopt-registration-card">
                    <div className="adopt-registration-card-body">
                        <h2 className="adopt-regi-form-name">Adopt your furry friend today</h2>
                        <form onSubmit={handleSubmit} className="adopt-form">
                            <div className="adopt-form-group">
                                <label>User ID</label>
                                <input
                                    type="text"
                                    value={userID}
                                    onChange={(e) => setUserID(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="adopt-form-group">
                                <label>Pet ID</label>
                                <input
                                    type="text"
                                    value={petID}
                                    readOnly
                                    required
                                />
                            </div>
                            <div className="adopt-form-group">
                                <label>Adopter Name</label>
                                <input
                                    type="text"
                                    value={adoName}
                                    onChange={(e) => setAdopterName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="adopt-form-group">
                                <label>Adopter Email</label>
                                <input
                                    type="email"
                                    value={adoEmail}
                                    onChange={(e) => setAdopterEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="adopt-form-group">
                                <label>Adoption Date</label>
                                <input
                                    type="date"
                                    value={adoptionDate}
                                    onChange={(e) => setAdoptionDate(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="adopt-form-group">
                                <label>Adoption Time</label>
                                <input
                                    type="time"
                                    value={adoptionTime}
                                    onChange={(e) => setAdoptionTime(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="adopt-form-group">
                                <label>Reason for Adoption</label>
                                <input
                                    type="text"
                                    value={reasonForAdoption}
                                    onChange={(e) => setReasonForAdoption(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="adopt-regi-submit">
                                Submit Adoption Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetProfile;
