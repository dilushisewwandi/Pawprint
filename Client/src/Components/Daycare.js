// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import DaycareBooking from './DaycareBooking';
// import './Daycare.css';

// const Daycare = () => {
//   const { dcID } = useParams();
//   const [daycare, setDaycare] = useState([]);
//   const [activeBookingForm, setActiveBookingForm] = useState(null); 
//   const [searchCriteria, setSearchCriteria] = useState({
//       dcName:'',
//       dcLocation:'',
//       openDays:'',
//       openTimes:''
//     });

//   useEffect(() => {
//     fetchDaycareDetails();
//   }, []);

//   const fetchDaycareDetails = async () => {
//     try {
//       const response = await axios.get(`http://localhost:8800/api/daycare/daycare`);
//       setDaycare(response.data);
//     } catch (error) {
//       console.error('Error fetching daycare details:', error);
//     }
//   };

//   // const handleBookingButtonClick = (dcID) => {
//   //   if (activeBookingForm === dcID) {
//   //     setActiveBookingForm(null); 
//   //   } else {
//   //     setActiveBookingForm(dcID); 
//   //   }
//   // };
//   const handleBookingButtonClick = (dcID) => {
//     setActiveBookingForm((prevId) => (prevId === dcID ? null : dcID));
//   };
  

//   const handleSearchChange = (e) => {
//     setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
//   };

//   const filteredDaycare = daycare.filter((daycare) =>
//      (searchCriteria.dcLocation === '' || daycare.dcLocation.toLowerCase().includes(searchCriteria.dcLocation.toLowerCase())) &&
//      (searchCriteria.dcName === '' || daycare.dcName.toLowerCase().includes(searchCriteria.dcName.toLowerCase())) &&
//      (searchCriteria.openDays === '' || daycare.openDays.toLowerCase().includes(searchCriteria.openDays.toLowerCase())) &&
//      (searchCriteria.openTimes === '' || daycare.openTimes.toLowerCase().includes(searchCriteria.openTimes.toLowerCase())) 
//   );

//   if (!daycare.length) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="daycare-profile-container">
//       <div className="dc-hero-section">
//         <div className="dc-welcome-message">
//           <h1>Welcome to Our Daycares!</h1>
//           <p>
//             Explore the best care facilities for your pets. Each daycare offers unique services tailored
//             to ensure your pets are well taken care of.
//           </p>
//         </div>
//       </div>

//       <div>
//         <h2>Search your daycare</h2>
//       </div>
      
//       {/* Search Bar Section */}
//       <div className="search-bar">
//         <input
//           type="text"
//           name="dcLocation"
//           placeholder="Search by Location"
//           value={searchCriteria.dcLocation}
//           onChange={handleSearchChange}
//         />

//         <input
//           type="text"
//           name="dcName"
//           placeholder="Search by Name"
//           value={searchCriteria.dcName}
//           onChange={handleSearchChange}
//         />

//         <input
//           type="text"
//           name="openDays"
//           placeholder="Search by Open Days"
//           value={searchCriteria.openDays}
//           onChange={handleSearchChange}
//         />

//         <input
//           type="text"
//           name="openTimes"
//           placeholder="Search by Open Times"
//           value={searchCriteria.openTimes}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {/* <div className="daycare-card-container">
//         {daycare.map((dc) => (
//           <div key={dc.dcID} className="daycare-card">
//             <div className="daycare-details">
//               <h2>{dc.dcName}</h2>
//               <p><strong>Daycare ID:</strong> {dc.dcID}</p>
//               <p><strong>Location:</strong> {dc.dcLocation}</p>
//               <p><strong>Phone:</strong> {dc.dcPhone}</p>
//               <p><strong>Email:</strong> {dc.dcEmail}</p>
//               <p><strong>Open Days:</strong> {dc.openDays}</p>
//               <p><strong>Open Times:</strong> {dc.openTimes}</p>
//               <p><strong>No of Staff Members:</strong> {dc.noOfStaffMembers}</p>
//               <p><strong>Amenities Offered:</strong> {dc.amenitiesOffered}</p>
//               <p><strong>Safety Features:</strong> {dc.safetyFeatures}</p>
              
//               <button 
//                 className="btn btn-primary"
//                 onClick={() => handleBookingButtonClick(dc.dcID)}
//               >
//                 {activeBookingForm === dc.dcID ? 'Cancel Booking' : 'Add Booking'}
//               </button>
              
//               {activeBookingForm === dc.dcID && <DaycareBooking daycareId={dc.dcID} />}
//             </div>
//           </div>
//         ))}
//       </div> */}
//       <div className="daycare-card-container">
//   {filteredDaycare.length === 0 ? (
//     <p>No daycare centers found matching your criteria.</p>
//   ) : (
//     <div className="daycare-cards">
//       {filteredDaycare.map((dc) => (
//         <div key={dc.dcID} className="daycare-card">
//           <div className="daycare-details">
//             <h2>{dc.dcName}</h2>
//             <p><strong>Daycare ID:</strong> {dc.dcID}</p>
//             <p><strong>Location:</strong> {dc.dcLocation}</p>
//             <p><strong>Phone:</strong> {dc.dcPhone}</p>
//             <p><strong>Email:</strong> {dc.dcEmail}</p>
//             <p><strong>Open Days:</strong> {dc.openDays}</p>
//             <p><strong>Open Times:</strong> {dc.openTimes}</p>
//             <p><strong>No of Staff Members:</strong> {dc.noOfStaffMembers}</p>
//             <p><strong>Amenities Offered:</strong> {dc.amenitiesOffered}</p>
//             <p><strong>Safety Features:</strong> {dc.safetyFeatures}</p>

//             <button 
//               className="btn btn-primary"
//               onClick={() => handleBookingButtonClick(dc.dcID)}
//             >
//               {activeBookingForm === dc.dcID ? 'Cancel Booking' : 'Add Booking'}
//             </button>

//             {activeBookingForm === dc.dcID && <DaycareBooking daycareId={dc.dcID} />}
//           </div>
//         </div>
//       ))}
//     </div>
//   )}
// </div>

//     </div>
//   );
// };

// export default Daycare;



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
