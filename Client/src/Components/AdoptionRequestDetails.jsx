import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPaw, FaUser, FaPhone, FaEnvelope, FaInfoCircle, FaCheckCircle, FaTimesCircle, FaHourglassHalf } from "react-icons/fa";
import "./AdoptionRequestDetails.css";

const AdoptionRequestDetails = () => {
  const { petID } = useParams();
  const [adoptionDetails, setAdoptionDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/adopter/adoptionRequestDetails/${petID}`);
        setAdoptionDetails(response.data);
      } catch (error) {
        console.error("Error fetching adoption request details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [petID]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!adoptionDetails) {
    return <div className="error">No adoption request details found.</div>;
  }

  const { petName, distributorName, disPhone, disEmail, status } = adoptionDetails;

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
      <h2 className="title"><FaPaw /> Adoption Request Details</h2>
      
      <div className="details-card">
        <div className="detail">
          <FaPaw className="icon" /> <strong>Pet Name:</strong> {petName}
        </div>
        <div className="detail">
          <FaUser className="icon" /> <strong>Distributor Name:</strong> {distributorName}
        </div>
        <div className="detail">
          <FaPhone className="icon" /> <strong>Phone:</strong> {disPhone}
        </div>
        <div className="detail">
          <FaEnvelope className="icon" /> <strong>Email:</strong> {disEmail}
        </div>
        <div className="detail">
          <FaInfoCircle className="icon" /> <strong>Status:</strong> {renderStatus(status)}
        </div>
      </div>
    </div>
  );
};

export default AdoptionRequestDetails;
