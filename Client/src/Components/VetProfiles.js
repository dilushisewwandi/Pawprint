import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, UserCheck, Stethoscope } from 'lucide-react';
import VetAppointment from './VetAppointment';
import './VetProfiles.css';

const VetProfiles = () => {
  const { vetID } = useParams();
  const [vetProfiles, setVetProfiles] = useState([]);
  const [activeVet, setActiveVet] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    vetSpecialization: '',
    clinic: ''
  });

  useEffect(() => {
    fetchVetProfiles();
  }, []);

  const fetchVetProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:8800/api/vet/vetProfiles');
      setVetProfiles(response.data);
    } catch (error) {
      console.error('Error fetching vet profiles:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

  const handleAppointmentClick = (vetID) => {
    setActiveVet(vetID);
  };

  const handleCloseModal = () => {
    setActiveVet(null);
  };

  const filteredVets = vetProfiles.filter((vet) =>
    (searchCriteria.vetSpecialization === '' || vet.vetSpecialization.toLowerCase().includes(searchCriteria.vetSpecialization.toLowerCase())) &&
    (searchCriteria.clinic === '' || vet.clinic.toLowerCase().includes(searchCriteria.clinic.toLowerCase()))
  );

  return (
    <div className="vet-container">
      <header className="vet-hero">
        <div className="vet-welcome">
          <h1>🐾 Meet Our Veterinarians!</h1>
          <p>Find experienced professionals specializing in pet care and health.</p>
        </div>
      </header>

      <div className="search-section">
        <h2>🔍 Find a Veterinarian</h2>
        <div className="search-bar">
          <input type="text" name="vetSpecialization" placeholder="Specialization" value={searchCriteria.vetSpecialization} onChange={handleSearchChange} />
          <input type="text" name="clinic" placeholder="Clinic Location" value={searchCriteria.clinic} onChange={handleSearchChange} />
        </div>
      </div>

      <div className="vet-list">
        {filteredVets.map((vet) => (
          <div key={vet.vetID} className="vet-card">
            <h2>{vet.vetName} 🏥</h2>
            <p><UserCheck /> <strong>Vet ID:</strong> {vet.vetID}</p>
            <p><Mail /> <strong>Email:</strong> {vet.vetEmail}</p>
            <p><Stethoscope /> <strong>Specialization:</strong> {vet.vetSpecialization}</p>
            <p><Phone /> <strong>Phone:</strong> {vet.vetPhone}</p>
            <p><MapPin /> <strong>Clinic:</strong> {vet.clinic}</p>

            <button className="appointment-btn" onClick={() => handleAppointmentClick(vet.vetID)}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>

      {activeVet && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <VetAppointment vetId={activeVet} />
          </div>
        </div>
      )}
    </div>
  );
};

export default VetProfiles;
