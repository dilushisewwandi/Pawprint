// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { FaPaw, FaUser, FaPhone, FaEnvelope, FaInfoCircle, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";
// import "./DaycareBookingRequestDetails.css";

// const DaycareBookingRequestDetails = () => {
//   const { bookingID } = useParams();
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8800/api/distributor/bookingRequestDetails/${bookingID}`);
//         setBookingDetails(response.data);
//       } catch (error) {
//         console.error("Error fetching daycare booking request details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDetails();
//   }, [bookingID]);

//   if (loading) {
//     return <div className="loading">Loading...</div>;
//   }

//   if (!bookingDetails) {
//     return <div className="error">No daycare booking request details found.</div>;
//   }

//   const { petName, ownerName, ownerPhone, ownerEmail, status } = bookingDetails;

//   const renderStatus = (status) => {
//     switch (status) {
//       case "Approved":
//         return <span className="status approved"><FaCheckCircle /> Approved</span>;
//       case "Pending":
//         return <span className="status pending"><FaHourglassHalf /> Pending</span>;
//       case "Rejected":
//         return <span className="status rejected"><FaTimesCircle /> Rejected</span>;
//       default:
//         return <span className="status">{status}</span>;
//     }
//   };

//   return (
//     <div className="booking-details-container">
//       <h2 className="title"><FaPaw /> Daycare Booking Request Details</h2>
      
//       <div className="details-card">
//         <div className="detail">
//           <FaPaw className="icon" /> <strong>Pet Name:</strong> {petName}
//         </div>
//         <div className="detail">
//           <FaUser className="icon" /> <strong>Owner Name:</strong> {ownerName}
//         </div>
//         <div className="detail">
//           <FaPhone className="icon" /> <strong>Phone:</strong> {ownerPhone}
//         </div>
//         <div className="detail">
//           <FaEnvelope className="icon" /> <strong>Email:</strong> {ownerEmail}
//         </div>
//         <div className="detail">
//           <FaInfoCircle className="icon" /> <strong>Status:</strong> {renderStatus(status)}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DaycareBookingRequestDetails;


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPaw, FaUser, FaPhone, FaEnvelope, FaInfoCircle, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaCalendarAlt, FaClock, FaIdBadge } from "react-icons/fa";
import "./AdoptionRequestDetails.css";

const DaycareBookingRequestDetails = () => {
  const { bookingID } = useParams();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/distributor/bookingRequestDetails/${bookingID}`);
        setBookingDetails(response.data);
      } catch (error) {
        console.error("Error fetching daycare booking request details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [bookingID]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!bookingDetails) {
    return <div className="error">No daycare booking request details found.</div>;
  }

  const { petID, petName, dcName, dcPhone, dcEmail, bookingDate, bookingTime, status } = bookingDetails;

  const renderStatus = (status) => {
    switch (status) {
      case "Approved":
        return <span className="status approved"><FaCheckCircle /> Approved</span>;
      case "Pending":
        return <span className="status pending"><FaHourglassHalf /> Pending</span>;
      case "Rejected":
        return <span className="status rejected"><FaTimesCircle /> Rejected</span>;
      default:
        return <span className="status">{status}</span>;
    }
  };

  return (
    <div className="adoption-details-container">
      <h2 className="title"><FaPaw /> Daycare Booking Request Details</h2>
      
      <div className="details-card">
        <div className="detail">
          <FaIdBadge className="icon" /> <strong>Booking ID:</strong> {bookingID}
        </div>
        <div className="detail">
          <FaIdBadge className="icon" /> <strong>Pet ID:</strong> {petID}
        </div>
        <div className="detail">
          <FaPaw className="icon" /> <strong>Pet Name:</strong> {petName}
        </div>
        <div className="detail">
          <FaUser className="icon" /> <strong>Daycare Name:</strong> {dcName}
        </div>
        <div className="detail">
          <FaPhone className="icon" /> <strong>Phone:</strong> {dcPhone}
        </div>
        <div className="detail">
          <FaEnvelope className="icon" /> <strong>Email:</strong> {dcEmail}
        </div>
        <div className="detail">
          <FaCalendarAlt className="icon" /> <strong>Booking Date:</strong> {bookingDate}
        </div>
        <div className="detail">
          <FaClock className="icon" /> <strong>Booking Time:</strong> {bookingTime}
        </div>
        <div className="detail">
          <FaInfoCircle className="icon" /> <strong>Status:</strong> {renderStatus(status)}
        </div>
      </div>
    </div>
  );
};

export default DaycareBookingRequestDetails;
