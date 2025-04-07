// import React, { useState } from 'react';
// import axios from 'axios';
// import './FindDaycareBooking.css';

// const FindDaycareBooking = () => {
//     const [userID, setUserID] = useState('');
//     const [bookings, setBookings] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);
    
//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchBookings = async () => {
//         if (!userID) {
//             setError('Please enter a valid userID.');
//             return;
//         }

//         setLoading(true);
//         setError('');
        
//         try {
//             const response = await axios.get(`http://localhost:8800/api/daycare/findBookings/${userID}`);
//             if (response.data.length > 0) {
//                 setBookings(response.data);
//             } else {
//                 setError('No bookings found for this user.');
//                 setBookings([]);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//             setError('Failed to retrieve bookings. Please try again later.');
//             setBookings([]);
//         }

//         setLoading(false);
//     };

//     return (
//         <div className="find-daycare-bookings">
//             <div className="bookings-card">
//                 <h2>Find Daycare Bookings</h2>
//                 <div className="form-group">
//                     <label htmlFor="userID">Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         value={userID}
//                         onChange={handleInputChange}
//                     />
//                     <button onClick={fetchBookings} disabled={loading}>
//                         {loading ? 'Loading...' : 'Find Bookings'}
//                     </button>
//                 </div>
    
//                 {error && <p className="error">{error}</p>}
    
//                 {bookings.length > 0 && (
//                     <div className="bookingsList">
//                         <h3>Your Bookings:</h3>
//                         <ul>
//                             {bookings.map((booking) => (
//                                 <li className="bookingCard" key={booking.bookingID}>
//                                     <p><strong>Booking Date:</strong> {booking.bookingDate}</p>
//                                     <p><strong>Booking Time:</strong> {booking.bookingTime}</p>
//                                     <p><strong>Pet Owner Name:</strong> {booking.username}</p>
//                                     <p><strong>Owner Phone:</strong> {booking.phone}</p>
//                                     <p><strong>Owner Email:</strong> {booking.email}</p>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FindDaycareBooking;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaSearch, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaClock, FaDog, FaInfoCircle } from 'react-icons/fa';
// import './FindDaycareBooking.css';

// const FindDaycareBooking = () => {
//     const [userID, setUserID] = useState('');
//     const [bookings, setBookings] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchDaycareBookingRequests = async () => {
//         if (!userID) {
//             setError('Please enter a valid User ID.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.get(`http://localhost:8800/api/daycare/findBookings/${userID}`);
//             if (response.data.length > 0) {
//                 setBookings(response.data);
//             } else {
//                 setError('No bookings found for this user.');
//                 setBookings([]);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//             setError('Failed to retrieve bookings. Please try again later.');
//             setBookings([]);
//         }

//         setLoading(false);
//     };

//     const handleApproveRequest = (dcID) => {
//             axios.post(`http://localhost:8800/api/daycare/approve`, { dcID })
//                 .then(response => {
//                     alert('Daycare Booking request approved!');
//                     fetchDaycareBookingRequests();
//                 })
//                 .catch(error => {
//                     console.error('Error approving booking request:', error);
//                     alert('Failed to approve the request.');
//                 });
//         };
    
//         const handleRejectRequest = (dcID) => {
//             axios.post(`http://localhost:8800/api/daycare/reject`, { dcID })
//                 .then(response => {
//                     alert('Daycare Booking request rejected!');
//                     fetchDaycareBookingRequests();
//                 })
//                 .catch(error => {
//                     console.error('Error rejecting booking request:', error);
//                     alert('Failed to reject the request.');
//                 });
//         };
    

//     return (
//         <div className="find-daycare-bookings-container">
//             <div className="find-daycare-bookings-card">
//                 <h2>Find Daycare Bookings</h2>
//                 <div className="find-daycare-bookings-form-group">
//                     <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         placeholder="Enter User ID"
//                         value={userID}
//                         onChange={handleInputChange}
//                     />
//                     <button 
//                         className="find-daycare-bookings-button" 
//                         onClick={fetchBookings} 
//                         disabled={loading}
//                     >
//                         {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Bookings</>}
//                     </button>
//                 </div>

//                 {error && <p className="find-daycare-bookings-error">{error}</p>}

//                 {bookings.length > 0 && (
//                     <div className="find-daycare-bookings-list">
//                         <h3>Your Bookings:</h3>
//                         <div className="bookings-list">
//                             {bookings.map((booking) => (
//                                 <div key={booking.bookingID} className="booking-card">
//                                     <p><FaCalendarAlt className="icon" /><strong>Booking Date:</strong> {booking.bookingDate}</p>
//                                     <p><FaClock className="icon" /><strong>Booking Time:</strong> {booking.bookingTime}</p>
//                                     <p><FaDog className="icon" /><strong>Pet Name:</strong> {booking.petName}</p>
//                                     <p><FaInfoCircle className="icon" /><strong>Pet Age:</strong> {booking.petAge} years</p>
//                                     <p><FaInfoCircle className="icon" /><strong>Pet Breed:</strong> {booking.petBreed}</p>
//                                     <p><FaUser className="icon" /><strong>Pet Owner Name:</strong> {booking.username}</p>
//                                     <p><FaPhone className="icon" /><strong>Owner Phone:</strong> {booking.phone}</p>
//                                     <p><FaEnvelope className="icon" /><strong>Owner Email:</strong> {booking.email}</p>

//                                     <div className="request-actions">
//                                         <button 
//                                             className="approve-button" 
//                                             onClick={() => handleApproveRequest(request.dcID)}
//                                         >
//                                             Approve
//                                         </button>
//                                         <button 
//                                             className="reject-button" 
//                                             onClick={() => handleRejectRequest(request.dcID)}
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

// export default FindDaycareBooking;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { FaSearch, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaClock, FaDog, FaInfoCircle } from 'react-icons/fa';
// import './FindDaycareBooking.css';

// const FindDaycareBooking = () => {
//     const [userID, setUserID] = useState('');
//     const [bookings, setBookings] = useState([]);
//     const [error, setError] = useState('');
//     const [loading, setLoading] = useState(false);

//     const handleInputChange = (e) => {
//         setUserID(e.target.value);
//     };

//     const fetchDaycareBookingRequests = async () => {
//         if (!userID) {
//             setError('Please enter a valid User ID.');
//             return;
//         }

//         setLoading(true);
//         setError('');

//         try {
//             const response = await axios.get(`http://localhost:8800/api/daycare/findBookings/${userID}`);
//             if (response.data.length > 0) {
//                 setBookings(response.data);
//             } else {
//                 setError('No bookings found for this user.');
//                 setBookings([]);
//             }
//         } catch (err) {
//             console.error('Error fetching bookings:', err);
//             setError('Failed to retrieve bookings. Please try again later.');
//             setBookings([]);
//         }

//         setLoading(false);
//     };


//     return (
//         <div className="find-daycare-bookings-container">
//             <div className="find-daycare-bookings-card">
//                 <h2>Find Daycare Bookings</h2>
//                 <div className="find-daycare-bookings-form-group">
//                     <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
//                     <input
//                         type="text"
//                         id="userID"
//                         placeholder="Enter User ID"
//                         value={userID}
//                         onChange={handleInputChange}
//                     />
//                     <button 
//                         className="find-daycare-bookings-button" 
//                         onClick={fetchDaycareBookingRequests} 
//                         disabled={loading}
//                     >
//                         {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Bookings</>}
//                     </button>
//                 </div>

//                 {error && <p className="find-daycare-bookings-error">{error}</p>}

//                 {bookings.length > 0 && (
//                     <div className="find-daycare-bookings-list">
//                         <h3>Your Bookings:</h3>
//                         <div className="bookings-list">
//                             {bookings.map((booking) => (
//                                 <div key={booking.bookingID} className="booking-card">
//                                     <p><FaCalendarAlt className="icon" /><strong>Booking Date:</strong> {booking.bookingDate}</p>
//                                     <p><FaClock className="icon" /><strong>Booking Time:</strong> {booking.bookingTime}</p>
//                                     <p><FaDog className="icon" /><strong>Pet Name:</strong> {booking.petName}</p>
//                                     <p><FaInfoCircle className="icon" /><strong>Pet Age:</strong> {booking.petAge} years</p>
//                                     <p><FaInfoCircle className="icon" /><strong>Pet Breed:</strong> {booking.petBreed}</p>
//                                     <p><FaUser className="icon" /><strong>Pet Owner Name:</strong> {booking.username}</p>
//                                     <p><FaPhone className="icon" /><strong>Owner Phone:</strong> {booking.phone}</p>
//                                     <p><FaEnvelope className="icon" /><strong>Owner Email:</strong> {booking.email}</p>

                                    
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default FindDaycareBooking;



import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch, FaCalendarAlt, FaUser, FaPhone, FaEnvelope, FaClock, FaDog, FaInfoCircle, FaCheck, FaTimes } from 'react-icons/fa';
import './FindDaycareBooking.css';

const FindDaycareBooking = () => {
    const [userID, setUserID] = useState('');
    const [bookings, setBookings] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setUserID(e.target.value);
    };

    const fetchDaycareBookingRequests = async () => {
        if (!userID) {
            setError('Please enter a valid User ID.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.get(`http://localhost:8800/api/daycare/findBookings/${userID}`);
            if (response.data.length > 0) {
                setBookings(response.data);
            } else {
                setError('No bookings found for this user.');
                setBookings([]);
            }
        } catch (err) {
            console.error('Error fetching bookings:', err);
            setError('Failed to retrieve bookings. Please try again later.');
            setBookings([]);
        }

        setLoading(false);
    };

    const handleApproveBooking = async (bookingID) => {
        try {
            await axios.post(`http://localhost:8800/api/daycare/approve`, { bookingID });
            alert('Booking request approved!');
            fetchDaycareBookingRequests();
        } catch (error) {
            console.error('Error approving booking:', error);
            alert('Failed to approve the booking request.');
        }
    };

    const handleRejectBooking = async (bookingID) => {
        try {
            await axios.post(`http://localhost:8800/api/daycare/reject`, { bookingID });
            alert('Booking request rejected!');
            fetchDaycareBookingRequests();
        } catch (error) {
            console.error('Error rejecting booking:', error);
            alert('Failed to reject the booking request.');
        }
    };

    return (
        <div className="find-daycare-bookings-container">
            <div className="find-daycare-bookings-card">
                <h2>Find Daycare Bookings</h2>
                <div className="find-daycare-bookings-form-group">
                    <label htmlFor="userID"><FaUser className="icon" /> Enter Your User ID:</label>
                    <input
                        type="text"
                        id="userID"
                        placeholder="Enter User ID"
                        value={userID}
                        onChange={handleInputChange}
                    />
                    <button 
                        className="find-daycare-bookings-button" 
                        onClick={fetchDaycareBookingRequests} 
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : <><FaSearch className="icon" /> Find Bookings</>}
                    </button>
                </div>

                {error && <p className="find-daycare-bookings-error">{error}</p>}

                {bookings.length > 0 && (
                    <div className="find-daycare-bookings-list">
                        <h3>Your Bookings:</h3>
                        <div className="bookings-list">
                            {bookings.map((booking) => (
                                <div key={booking.bookingID} className="booking-card">
                                    <p><FaCalendarAlt className="icon" /><strong>Booking Date:</strong> {booking.bookingDate}</p>
                                    <p><FaClock className="icon" /><strong>Booking Time:</strong> {booking.bookingTime}</p>
                                    <p><FaDog className="icon" /><strong>Pet Name:</strong> {booking.petName}</p>
                                    <p><FaInfoCircle className="icon" /><strong>Pet Age:</strong> {booking.petAge} years</p>
                                    <p><FaInfoCircle className="icon" /><strong>Pet Breed:</strong> {booking.petBreed}</p>
                                    <p><FaUser className="icon" /><strong>Pet Owner Name:</strong> {booking.username}</p>
                                    <p><FaPhone className="icon" /><strong>Owner Phone:</strong> {booking.phone}</p>
                                    <p><FaEnvelope className="icon" /><strong>Owner Email:</strong> {booking.email}</p>

                                    <div className="booking-actions">
                                        <button className="approve-button" onClick={() => handleApproveBooking(booking.bookingID)}>
                                            <FaCheck className="icon" /> Approve
                                        </button>
                                        <button className="reject-button" onClick={() => handleRejectBooking(booking.bookingID)}>
                                            <FaTimes className="icon" /> Reject
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

export default FindDaycareBooking;
