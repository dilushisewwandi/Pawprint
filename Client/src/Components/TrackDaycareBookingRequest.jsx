// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaEye } from "react-icons/fa";
// import axios from "axios";
// import "./TrackAdoptionRequests.css";

// const TrackDaycareBookingRequest = () => {
//   const navigate = useNavigate();
//   const [userID, setUserID] = useState(""); // State for userID input
//   const [requests, setRequests] = useState([]);
//   const [error, setError] = useState("");

//   const fetchRequests = async () => {
//     if (!userID.trim()) {
//       setError("Please enter your User ID.");
//       return;
//     }

//     try {
//       const response = await axios.get(`http://localhost:8800/api/distributor/trackBookingRequests/${userID}`);
//       setRequests(response.data.bookingRequests);
//       setError("");
//     } catch (error) {
//       console.error("Error fetching booking requests:", error);
//       setError("No booking requests found or an error occurred.");
//     }
//   };

//   // Function to render status with icons
//   const renderStatus = (status) => {
//     switch (status) {
//       case "Approved":
//         return <FaCheckCircle className="status-icon approved" />;
//       case "Pending":
//         return <FaHourglassHalf className="status-icon pending" />;
//       case "Rejected":
//         return <FaTimesCircle className="status-icon rejected" />;
//       default:
//         return status;
//     }
//   };

//   return (
//     <div className="track-requests-container">
//       <h2 className="header">
//         <FaClipboardList className="header-icon" /> Track Daycare Booking Requests
//       </h2>
//       <p className="subtext">Enter your User ID to check the status of your daycare booking requests.</p>

//       {/* User ID Input */}
//       <div className="user-id-input">
//         <input
//           type="text"
//           placeholder="Enter your User ID"
//           value={userID}
//           onChange={(e) => setUserID(e.target.value)}
//         />
//         <button onClick={fetchRequests}>Fetch Requests</button>
//       </div>

//       {error && <p className="error-message">{error}</p>}

//       {/* Display requests if available */}
//       <div className="table-container">
//         <table className="request-table">
//           <thead>
//             <tr>
//               <th>Pet Name</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {requests.length > 0 ? (
//               requests.map((request) => (
//                 <tr key={request.bookingID}>
//                   <td>{request.petName}</td>
//                   <td>{renderStatus(request.status)}</td>
//                   <td>
//                     <button className="view-btn" onClick={() => navigate(`/bookingRequestDetails/${request.bookingID}`)}>
//                       <FaEye /> View Details
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="3">No daycare booking requests found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TrackDaycareBookingRequest;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaClipboardList, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaEye } from "react-icons/fa";
import axios from "axios";
import "./TrackAdoptionRequests.css";

const TrackDaycareBookingRequest = () => {
  const navigate = useNavigate();
  const [userID, setUserID] = useState(""); // State for userID input
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState("");

  const fetchRequests = async () => {
    if (!userID.trim()) {
      setError("Please enter your User ID.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8800/api/distributor/trackBookingRequests/${userID}`);
      setRequests(response.data.bookingRequests);
      setError("");
    } catch (error) {
      console.error("Error fetching booking requests:", error);
      setError("No booking requests found or an error occurred.");
    }
  };

  // Function to render status with icons
  const renderStatus = (status) => {
    switch (status) {
      case "Approved":
        return <FaCheckCircle className="status-icon approved" />;
      case "Pending":
        return <FaHourglassHalf className="status-icon pending" />;
      case "Rejected":
        return <FaTimesCircle className="status-icon rejected" />;
      default:
        return status;
    }
  };

  return (
    <div className="track-requests-container">
      <h2 className="header">
        <FaClipboardList className="header-icon" /> Track Daycare Booking Requests
      </h2>
      <p className="subtext">Enter your User ID to check the status of your daycare booking requests.</p>

      {/* User ID Input */}
      <div className="user-id-input">
        <input
          type="text"
          placeholder="Enter your User ID"
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
        />
      </div>

      {/* Fetch Requests Button Below Input */}
      <button onClick={fetchRequests} className="fetch-btn">Fetch Requests</button>

      {error && <p className="error-message">{error}</p>}

      {/* Display requests if available */}
      <div className="table-container">
        <table className="request-table">
          <thead>
            <tr>
              <th>Pet Name</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.bookingID}>
                  <td>{request.petName}</td>
                  <td>{renderStatus(request.status)}</td>
                  <td>
                    <button className="view-btn" onClick={() => navigate(`/bookingRequestDetails/${request.bookingID}`)}>
                      <FaEye /> View Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No daycare booking requests found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackDaycareBookingRequest;
