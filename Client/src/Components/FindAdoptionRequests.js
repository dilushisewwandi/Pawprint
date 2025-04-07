// import React, { useState } from 'react';
// import axios from 'axios';
// import './FindAdoptionRequests.css';

// const FindAdoptionRequests = () => {
//     const [userID, setUserID] = useState('');
//     const [adoptionRequests, setAdoptionRequests] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchAdoptionRequests = async () => {
//         if (!userID) {
//             setError('Please enter a valid userID.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.get(`http://localhost:8800/api/pet/adoptionRequest/${userID}`);
//             if (response.data.adoptionRequests.length > 0) {
//                 setAdoptionRequests(response.data.adoptionRequests);
//             } else {
//                 setError('No adoption requests found for this distributor.');
//                 setAdoptionRequests([]);
//             }
//         } catch (err) {
//             console.error('Error fetching adoption requests:', err);
//             setError('Failed to retrieve adoption requests. Please try again later.');
//             setAdoptionRequests([]);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="find-adoption-requests-container">
//             <div className="find-adoption-requests-card">
//                 <h2>Find Adoption Requests</h2>
//                 <div className="find-adoption-requests-form-group">
//                     <label htmlFor="userID">Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         value={userID}
//                         onChange={handleInputChange}
//                     />
//                     <button 
//                         className="find-adoption-requests-button" 
//                         onClick={fetchAdoptionRequests} 
//                         disabled={loading}
//                     >
//                         {loading ? 'Loading...' : 'Find Adoption Requests'}
//                     </button>
//                 </div>

//                 {error && <p className="find-adoption-requests-error">{error}</p>}

//                 {adoptionRequests.length > 0 && (
//                     <div className="find-adoption-requests">
//                         <h3>Adoption Requests:</h3>
//                         <div className="requestsList">
//                             <ul>
//                                 {adoptionRequests.map((request) => (
//                                     <li key={request.petID} className="requestCard">
//                                         <p><strong>Pet Name:</strong> {request.petName}</p>
//                                         <p><strong>Breed:</strong> {request.petBreed}</p>
//                                         <p><strong>Adopter Name:</strong> {request.adoName}</p>
//                                         <p><strong>Adopter Email:</strong> {request.adoEmail}</p>
//                                         <p><strong>Adopter Phone:</strong> {request.adoPhone}</p>
//                                         <p><strong>Adopter Location:</strong> {request.adoLocation}</p>
//                                         <p><strong>Reason for Adoption:</strong> {request.reasonForAdoption}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FindAdoptionRequests;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaSearch, FaUser, FaDog, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegStickyNote } from 'react-icons/fa';
// import './FindAdoptionRequests.css';

// const FindAdoptionRequests = () => {
//     const [userID, setUserID] = useState('');
//     const [adoptionRequests, setAdoptionRequests] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchAdoptionRequests = async () => {
//         if (!userID) {
//             setError('Please enter a valid User ID.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.get(`http://localhost:8800/api/pet/adoptionRequest/${userID}`);
//             if (response.data.adoptionRequests.length > 0) {
//                 setAdoptionRequests(response.data.adoptionRequests);
//             } else {
//                 setError('No adoption requests found for this distributor.');
//                 setAdoptionRequests([]);
//             }
//         } catch (err) {
//             console.error('Error fetching adoption requests:', err);
//             setError('Failed to retrieve adoption requests. Please try again later.');
//             setAdoptionRequests([]);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="find-adoption-requests-container">
//             <div className="find-adoption-requests-card">
//                 <h2>Find Adoption Requests</h2>
//                 <div className="find-adoption-requests-form-group">
//                     <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         placeholder="Enter User ID"
//                         value={userID}
//                         onChange={handleInputChange}
//                     />
//                     <button 
//                         className="find-adoption-requests-button" 
//                         onClick={fetchAdoptionRequests} 
//                         disabled={loading}
//                     >
//                         {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Requests</>}
//                     </button>
//                 </div>

//                 {error && <p className="find-adoption-requests-error">{error}</p>}

//                 {adoptionRequests.length > 0 && (
//                     <div className="find-adoption-requests">
//                         <h3>Adoption Requests</h3>
//                         <div className="requests-list">
//                             {adoptionRequests.map((request) => (
//                                 <div key={request.petID} className="request-card">
//                                     <h4><FaDog className="icon" /> {request.petName} ({request.petBreed})</h4>
//                                     <p><FaUser className="icon" /> <strong>Adopter:</strong> {request.adoName}</p>
//                                     <p><FaEnvelope className="icon" /> <strong>Email:</strong> {request.adoEmail}</p>
//                                     <p><FaPhone className="icon" /> <strong>Phone:</strong> {request.adoPhone}</p>
//                                     <p><FaMapMarkerAlt className="icon" /> <strong>Location:</strong> {request.adoLocation}</p>
//                                     <p><FaRegStickyNote className="icon" /> <strong>Reason:</strong> {request.reasonForAdoption}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FindAdoptionRequests;



import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaUser, FaDog, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegStickyNote, FaCalendarAlt, FaClock } from 'react-icons/fa';
import './FindAdoptionRequests.css';

const FindAdoptionRequests = () => {
    const [userID, setUserID] = useState('');
    const [adoptionRequests, setAdoptionRequests] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setUserID(e.target.value);
    };

    const fetchAdoptionRequests = async () => {
        if (!userID) {
            setError('Please enter a valid User ID.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`http://localhost:8800/api/pet/adoptionRequest/${userID}`);
            if (response.data.adoptionRequests.length > 0) {
                setAdoptionRequests(response.data.adoptionRequests);
            } else {
                setError('No adoption requests found for this distributor.');
                setAdoptionRequests([]);
            }
        } catch (err) {
            console.error('Error fetching adoption requests:', err);
            setError('Failed to retrieve adoption requests. Please try again later.');
            setAdoptionRequests([]);
        }

        setLoading(false);
    };

    const handleApproveRequest = (petID) => {
        // Send request to approve adoption request (you can replace the URL with your actual endpoint)
        axios.post(`http://localhost:8800/api/distributor/approve`, { petID })
            .then(response => {
                alert('Adoption request approved!');
                // Optionally, refresh the list of adoption requests
                fetchAdoptionRequests();
            })
            .catch(error => {
                console.error('Error approving adoption request:', error);
                alert('Failed to approve the request.');
            });
    };

    const handleRejectRequest = (petID) => {
        // Send request to reject adoption request (you can replace the URL with your actual endpoint)
        axios.post(`http://localhost:8800/api/distributor/reject`, { petID })
            .then(response => {
                alert('Adoption request rejected!');
                // Optionally, refresh the list of adoption requests
                fetchAdoptionRequests();
            })
            .catch(error => {
                console.error('Error rejecting adoption request:', error);
                alert('Failed to reject the request.');
            });
    };

    return (
        <div className="find-adoption-requests-container">
            <div className="find-adoption-requests-card">
                <h2>Find Adoption Requests</h2>
                <div className="find-adoption-requests-form-group">
                    <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
                    <input
                        type="text"
                        id="userID"
                        placeholder="Enter User ID"
                        value={userID}
                        onChange={handleInputChange}
                    />
                    <button 
                        className="find-adoption-requests-button" 
                        onClick={fetchAdoptionRequests} 
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Requests</>}
                    </button>
                </div>

                {error && <p className="find-adoption-requests-error">{error}</p>}

                {adoptionRequests.length > 0 && (
                    <div className="find-adoption-requests">
                        <h3>Adoption Requests</h3>
                        <div className="requests-list">
                            {adoptionRequests.map((request) => (
                                <div key={request.petID} className="request-card">
                                    <h4><FaDog className="icon" /> {request.petName} ({request.petBreed})</h4>
                                    <p><FaUser className="icon" /> <strong>Adopter:</strong> {request.adoName}</p>
                                    <p><FaEnvelope className="icon" /> <strong>Email:</strong> {request.adoEmail}</p>
                                    <p><FaPhone className="icon" /> <strong>Phone:</strong> {request.adoPhone}</p>
                                    <p><FaMapMarkerAlt className="icon" /> <strong>Location:</strong> {request.adoLocation}</p>
                                    <p><FaCalendarAlt className="icon" /> <strong>Adoption Date:</strong> {request.adoptionDate}</p>
                                    <p><FaClock className="icon" /> <strong>Adoption Time:</strong> {request.adoptionTime}</p>
                                    <p><FaRegStickyNote className="icon" /> <strong>Reason:</strong> {request.reasonForAdoption}</p>

                                    <div className="request-actions">
                                        <button 
                                            className="approve-button" 
                                            onClick={() => handleApproveRequest(request.petID)}
                                        >
                                            Approve
                                        </button>
                                        <button 
                                            className="reject-button" 
                                            onClick={() => handleRejectRequest(request.petID)}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FindAdoptionRequests;
