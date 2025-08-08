import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { MapPin, Calendar, Clock, Phone, Mail, Users, ShieldCheck, CheckCircle, Search } from 'lucide-react';
import DaycareBooking from './DaycareBooking';
import './Daycare.css';

const Daycare = () => {
  const { dcID } = useParams();
  const [daycare, setDaycare] = useState([]);
  const [activeBookingForm, setActiveBookingForm] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    dcName: '',
    dcLocation: '',
    openDays: '',
    openTimes: ''
  });

  useEffect(() => {
    fetchDaycareDetails();
  }, []);

  const fetchDaycareDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8800/api/daycare/daycare`);
      setDaycare(response.data);
    } catch (error) {
      console.error('Error fetching daycare details:', error);
    }
  };

  const handleBookingButtonClick = (dcID) => {
    setActiveBookingForm(dcID);
  };

  const handleCloseModal = () => {
    setActiveBookingForm(null);
  };

  const handleSearchChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

  const filteredDaycare = daycare.filter((dc) =>
    (searchCriteria.dcLocation === '' || dc.dcLocation.toLowerCase().includes(searchCriteria.dcLocation.toLowerCase())) &&
    (searchCriteria.dcName === '' || dc.dcName.toLowerCase().includes(searchCriteria.dcName.toLowerCase())) &&
    (searchCriteria.openDays === '' || dc.openDays.toLowerCase().includes(searchCriteria.openDays.toLowerCase())) &&
    (searchCriteria.openTimes === '' || dc.openTimes.toLowerCase().includes(searchCriteria.openTimes.toLowerCase()))
  );

  return (
    <div className="daycare-container">
      <header className="dc-hero">
        <div className="dc-welcome">
          <h1>🏡 Welcome to Our Daycares!</h1>
          <p>Explore top pet care facilities ensuring safety, comfort, and love for your pets.</p>
        </div>
      </header>

      <div className="search-section">
        <h2>🔍 Find a Daycare</h2>
        <div className="search-bar">
          <input type="text" name="dcLocation" placeholder="Location" value={searchCriteria.dcLocation} onChange={handleSearchChange} />
          <input type="text" name="dcName" placeholder="Daycare Name" value={searchCriteria.dcName} onChange={handleSearchChange} />
          <input type="text" name="openDays" placeholder="Open Days" value={searchCriteria.openDays} onChange={handleSearchChange} />
          <input type="text" name="openTimes" placeholder="Open Times" value={searchCriteria.openTimes} onChange={handleSearchChange} />
        </div>
      </div>

      <div className="daycare-list">
        {filteredDaycare.map((dc) => (
          <div key={dc.dcID} className="daycare-card">
            <h2>{dc.dcName} 🏡</h2>
            <p><MapPin /> <strong>Location:</strong> {dc.dcLocation}</p>
            <p><Phone /> <strong>Phone:</strong> {dc.dcPhone}</p>
            <p><Mail /> <strong>Email:</strong> {dc.dcEmail}</p>
            <p><Calendar /> <strong>Open Days:</strong> {dc.openDays}</p>
            <p><Clock /> <strong>Open Times:</strong> {dc.openTimes}</p>
            <p><Users /> <strong>Staff:</strong> {dc.noOfStaffMembers}</p>
            <p><CheckCircle /> <strong>Amenities:</strong> {dc.amenitiesOffered}</p>
            <p><ShieldCheck /> <strong>Safety:</strong> {dc.safetyFeatures}</p>

            <button className="booking-btn" onClick={() => handleBookingButtonClick(dc.dcID)}>
              Book Now
            </button>
          </div>
        ))}
      </div>

      {activeBookingForm && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>×</button>
            <DaycareBooking daycareId={activeBookingForm} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Daycare;
