import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaPaw, FaUser, FaPhone, FaEnvelope, FaInfoCircle, FaCheckCircle, FaTimesCircle, FaHourglassHalf, FaIdBadge } from "react-icons/fa";
import "./AdoptionRequestDetails.css";

const VetAppointmentRequestDetails = () => {
  const { appointmentID } = useParams();
  const [appointmentDetails, setAppointmentDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/api/distributor/appointmentRequestDetails/${appointmentID}`);
        setAppointmentDetails(response.data);
      } catch (error) {
        console.error("Error fetching appointment request details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [appointmentID]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!appointmentDetails) {
    return <div className="error">No appointment request details found.</div>;
  }

  const {petID, petName, vetName, vetPhone, vetEmail, status } = appointmentDetails;

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
      <h2 className="title"><FaPaw /> Vet Appointment Request Details</h2>
      
      <div className="details-card">
        <div className="detail">
            <FaIdBadge className="icon" /> <strong>Appointment ID:</strong> {appointmentID}
        </div>
        <div className="detail">
          <FaIdBadge className="icon" /> <strong>Pet ID:</strong> {petID}
        </div>
        <div className="detail">
          <FaPaw className="icon" /> <strong>Pet Name:</strong> {petName}
        </div>
        <div className="detail">
          <FaUser className="icon" /> <strong>Veterinarian Name:</strong> {vetName}
        </div>
        <div className="detail">
          <FaPhone className="icon" /> <strong>Phone:</strong> {vetPhone}
        </div>
        <div className="detail">
          <FaEnvelope className="icon" /> <strong>Email:</strong> {vetEmail}
        </div>
        <div className="detail">
          <FaInfoCircle className="icon" /> <strong>Status:</strong> {renderStatus(status)}
        </div>
      </div>
    </div>
  );
};

export default VetAppointmentRequestDetails;
