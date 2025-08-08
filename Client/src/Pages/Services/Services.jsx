import React from 'react';
import { FaPaw, FaHospital, FaClinicMedical, FaHome, FaUserMd, FaDog } from 'react-icons/fa';
import './Services.css';

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title"><FaPaw className="paw-icon" /> Our Services</h1>

      <div className="services-grid">
        {/* Find a Pet Service */}
        <div className="service-card">
          <FaDog className="service-icon" />
          <h3>Find a Pet</h3>
          <p>Discover adoptable pets with detailed profiles and heartwarming stories. Connect with shelters for a smooth adoption experience.</p>
        </div>

        {/* Pet Distribution Service */}
        <div className="service-card">
          <FaHome className="service-icon" />
          <h3>Pet Distribution</h3>
          <p>Expand your reach as a distributor by showcasing pets for adoption and connecting them with loving homes.</p>
        </div>

        {/* Daycare Service */}
        <div className="service-card">
          <FaHospital className="service-icon" />
          <h3>Daycare</h3>
          <p>Access trusted daycare facilities with exclusive discounts for registered pets, ensuring top-quality care.</p>
        </div>

        {/* Health-Care Service */}
        <div className="service-card">
          <FaClinicMedical className="service-icon" />
          <h3>Health-Care</h3>
          <p>Manage pet health records, vaccinations, and professional veterinary care through our seamless platform.</p>
        </div>

        {/* Vet Services */}
        <div className="service-card">
          <FaUserMd className="service-icon" />
          <h3>Veterinary Services</h3>
          <p>Find expert veterinarians for routine check-ups, diagnostics, and specialized treatments for your pet.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
