// import React, { useState } from 'react';
// import axios from 'axios';
// import styles from './FindVetAppointments.css';

// const FindVetAppointments = () => {
//     const [userID, setUserID] = useState('');
//     const [appointments, setAppointments] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
    
//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchAppointments = async () => {
//         if (!userID) {
//             setError('Please enter a valid userID.');
//             return;
//         }

//         setLoading(true);
//         setError('');
        
//         try {
//             const response = await axios.get(`http://localhost:8800/api/vet/findVetAppointments/${userID}`);
//             if (response.data.length > 0) {
//                 setAppointments(response.data);
//             } else {
//                 setError('No appointments found for this veterinarian.');
//                 setAppointments([]);
//             }
//         } catch (err) {
//             console.error('Error fetching appointments:', err);
//             setError('Failed to retrieve appointments. Please try again later.');
//             setAppointments([]);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className={styles.findVetAppointments}>
//             <div className={styles.appointmentsCard}>
//                 <h2>Find Vet Appointments</h2>
//                 <div className={styles.appointmentsFormGroup}>
//                     <label htmlFor="userID" className={styles.appointmentsLabel}>Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         value={userID}
//                         onChange={handleInputChange}
//                         className={styles.appointmentsInput}
//                     />
//                     <button onClick={fetchAppointments} disabled={loading} className={styles.appointmentsButton}>
//                         {loading ? 'Loading...' : 'Find Appointments'}
//                     </button>
//                 </div>
    
//                 {error && <p className={styles.appointmentsError}>{error}</p>}
    
//                 {appointments.length > 0 && (
//                     <div className={styles.appointmentsList}>
//                         <h3>Your Appointments:</h3>
//                         <ul>
//                             {appointments.map((appointment) => (
//                                 <li key={appointment.appointmentID} className={styles.appointmentCard}>
//                                     <p><strong>Pet Name:</strong> {appointment.petName}</p>
//                                     <p><strong>Owner Name:</strong> {appointment.name}</p>
//                                     <p><strong>Owner Phone:</strong> {appointment.phone}</p>
//                                     <p><strong>Owner Email:</strong> {appointment.email}</p>
//                                     <p><strong>Reason:</strong> {appointment.reason}</p>
//                                     <p><strong>Date:</strong> {appointment.appointmentDate}</p>
//                                     <p><strong>Time:</strong> {appointment.appointmentTime}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
    
// };

// export default FindVetAppointments;





// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaSearch, FaUser, FaDog, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegStickyNote, FaCalendarAlt } from 'react-icons/fa';
// import './FindVetAppointments.css';

// const FindVetAppointments = () => {
//     const [userID, setUserID] = useState('');
//     const [appointments, setAppointments] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
    
//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchAppointments = async () => {
//         if (!userID) {
//             setError('Please enter a valid userID.');
//             return;
//         }

//         setLoading(true);
//         setError('');
        
//         try {
//             const response = await axios.get(`http://localhost:8800/api/vet/findVetAppointments/${userID}`);
//             if (response.data.length > 0) {
//                 setAppointments(response.data);
//             } else {
//                 setError('No appointments found for this veterinarian.');
//                 setAppointments([]);
//             }
//         } catch (err) {
//             console.error('Error fetching appointments:', err);
//             setError('Failed to retrieve appointments. Please try again later.');
//             setAppointments([]);
//         }

//         setLoading(false);
//     };

//     const handleApproveRequest = (vetID) => {
//         axios.post(`http://localhost:8800/api/vet/approve`, { vetID })
//             .then(response => {
//                 alert('Vet Appointment request approved!');
//                 fetchVetAppointmentRequests();
//             })
//             .catch(error => {
//                 console.error('Error approving appointment request:', error);
//                 alert('Failed to approve the request.');
//             });
//     };

//     const handleRejectRequest = (vetID) => {
//         axios.post(`http://localhost:8800/api/vet/reject`, { vetID })
//             .then(response => {
//                 alert('Vet Appointment request rejected!');
//                 fetchVetAppointmentRequests();
//             })
//             .catch(error => {
//                 console.error('Error rejecting appointment request:', error);
//                 alert('Failed to reject the request.');
//             });
//     };

//     return (
//         <div className="find-vet-appointments-container">
//             <div className="find-vet-appointments-card">
//                 <h2>Find Vet Appointments</h2>
//                 <div className="find-vet-appointments-form-group">
//                     <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         placeholder="Enter User ID"
//                         value={userID}
//                         onChange={handleInputChange}
//                     />
//                     <button 
//                         className="find-vet-appointments-button" 
//                         onClick={fetchAppointments} 
//                         disabled={loading}
//                     >
//                         {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Appointments</>}
//                     </button>
//                 </div>

//                 {error && <p className="find-vet-appointments-error">{error}</p>}

//                 {appointments.length > 0 && (
//                     <div className="find-vet-appointments">
//                         <h3>Your Appointments</h3>
//                         <div className="appointments-list">
//                             {appointments.map((appointment) => (
//                                 <div key={appointment.appointmentID} className="appointment-card">
//                                     <h4><FaDog className="icon" /> {appointment.petName}</h4>
//                                     <p><FaUser className="icon" /> <strong>Owner:</strong> {appointment.name}</p>
//                                     <p><FaPhone className="icon" /> <strong>Phone:</strong> {appointment.phone}</p>
//                                     <p><FaEnvelope className="icon" /> <strong>Email:</strong> {appointment.email}</p>
//                                     <p><FaRegStickyNote className="icon" /> <strong>Reason:</strong> {appointment.reason}</p>
//                                     <p><FaCalendarAlt className="icon" /> <strong>Date:</strong> {appointment.appointmentDate}</p>
//                                     <p><strong>Time:</strong> {appointment.appointmentTime}</p>

//                                     <div className="request-actions">
//                                         <button 
//                                             className="approve-button" 
//                                             onClick={() => handleApproveRequest(request.vetID)}
//                                         >
//                                             Approve
//                                         </button>
//                                         <button 
//                                             className="reject-button" 
//                                             onClick={() => handleRejectRequest(request.vetID)}
//                                         >
//                                             Reject
//                                         </button>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FindVetAppointments;



import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaUser, FaDog, FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegStickyNote, FaCalendarAlt, FaIdCard } from 'react-icons/fa';
import './FindVetAppointments.css';

const FindVetAppointments = () => {
    const [userID, setUserID] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const handleInputChange = (e) => {
        setUserID(e.target.value);
    };

    const fetchAppointments = async () => {
        if (!userID) {
            setError('Please enter a valid userID.');
            return;
        }

        setLoading(true);
        setError('');
        
        try {
            const response = await axios.get(`http://localhost:8800/api/vet/findVetAppointments/${userID}`);
            if (response.data.length > 0) {
                setAppointments(response.data);
            } else {
                setError('No appointments found for this veterinarian.');
                setAppointments([]);
            }
        } catch (err) {
            console.error('Error fetching appointments:', err);
            setError('Failed to retrieve appointments. Please try again later.');
            setAppointments([]);
        }

        setLoading(false);
    };

    const handleApproveRequest = (appointmentID) => {
        axios.post(`http://localhost:8800/api/vet/approve`, { appointmentID })
            .then(response => {
                alert('Vet Appointment request approved!');
                fetchAppointments();  // ✅ Fixed function name
            })
            .catch(error => {
                console.error('Error approving appointment request:', error);
                alert('Failed to approve the request.');
            });
    };

    const handleRejectRequest = (appointmentID) => {
        axios.post(`http://localhost:8800/api/vet/reject`, { appointmentID })
            .then(response => {
                alert('Vet Appointment request rejected!');
                fetchAppointments();  // ✅ Fixed function name
            })
            .catch(error => {
                console.error('Error rejecting appointment request:', error);
                alert('Failed to reject the request.');
            });
    };

    return (
        <div className="find-vet-appointments-container">
            <div className="find-vet-appointments-card">
                <h2>Find Vet Appointments</h2>
                <div className="find-vet-appointments-form-group">
                    <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
                    <input
                        type="text"
                        id="userID"
                        placeholder="Enter User ID"
                        value={userID}
                        onChange={handleInputChange}
                    />
                    <button 
                        className="find-vet-appointments-button" 
                        onClick={fetchAppointments} 
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Appointments</>}
                    </button>
                </div>

                {error && <p className="find-vet-appointments-error">{error}</p>}

                {appointments.length > 0 && (
                    <div className="find-vet-appointments">
                        <h3>Your Appointments</h3>
                        <div className="appointments-list">
                            {appointments.map((appointment) => (
                                <div key={appointment.appointmentID} className="appointment-card">
                                    <h4><FaDog className="icon" /> {appointment.petName}</h4>
                                    <p><FaIdCard className="icon" /> <strong>Pet ID:</strong> {appointment.petID}</p>
                                    <p><FaUser className="icon" /> <strong>Owner:</strong> {appointment.name}</p>
                                    <p><FaPhone className="icon" /> <strong>Phone:</strong> {appointment.phone}</p>
                                    <p><FaEnvelope className="icon" /> <strong>Email:</strong> {appointment.email}</p>
                                    <p><FaRegStickyNote className="icon" /> <strong>Reason:</strong> {appointment.reason}</p>
                                    <p><FaCalendarAlt className="icon" /> <strong>Date:</strong> {appointment.appointmentDate}</p>
                                    <p><strong>Time:</strong> {appointment.appointmentTime}</p>

                                    <div className="request-actions">
                                        <button 
                                            className="approve-button" 
                                            onClick={() => handleApproveRequest(appointment.appointmentID)}  // ✅ Fixed variable name
                                        >
                                            Approve
                                        </button>
                                        <button 
                                            className="reject-button" 
                                            onClick={() => handleRejectRequest(appointment.appointmentID)}  // ✅ Fixed variable name
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

export default FindVetAppointments;
