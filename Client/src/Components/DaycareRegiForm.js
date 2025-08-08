import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import './DaycareRegiForm.css';

function DaycareRegiForm() {
  const [values, setValues] = useState({
    userID: '',
    dcName: '',
    dcLocation: '',
    dcPhone: '',
    dcEmail: '',
    openDays: '',
    openTimes: '',
    noOfStaffMembers: '',
    amenitiesOffered: '',
    safetyFeatures: ''
  });

  const [updateValues, setUpdateValues] = useState({
    userID: '',
    dcName: '',
    dcLocation: '',
    dcPhone: '',
    dcEmail: '',
    openDays: '',
    openTimes: '',
    noOfStaffMembers: '',
    amenitiesOffered: '',
    safetyFeatures: ''
  });

  const [deleteUserID, setDeleteUserID] = useState('');
  const [deleteEmail, setDeleteEmail] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch('http://localhost:8800/api/daycare/register', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(values)
  //     });
  //     const result = await response.json();
  //     alert(response.ok ? 'Daycare registered successfully' : result.error || 'Registration failed');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8800/api/daycare/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Daycare registered successfully');
        window.location.href = '/daycarePanel'; // Redirect after successful registration
      } else {
        alert(result.error || 'Error registering daycare');
        navigate('/signup'); // Redirect to signup if registration fails
      }
    } catch (error) {
      console.error('Error:', error);
    }
};


  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8800/api/daycare/update/${updateValues.userID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateValues)
      });
      const result = await response.json();
      alert(response.ok ? 'Daycare updated successfully' : result.error || 'Update failed');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleDelete = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:8800/api/daycare/delete/${deleteUserID}`, {
  //       method: 'DELETE'
  //     });
  //     const result = await response.json();
  //     alert(response.ok ? 'Daycare deleted successfully' : result.error || 'Deletion failed');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };
  const handleDelete = async (event) => {
    event.preventDefault();
  
    const confirmDelete = window.confirm("Are you sure you want to delete this daycare?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`http://localhost:8800/api/daycare/delete/${deleteUserID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: deleteUserID, dcEmail: deleteEmail }),
      });
      const result = await response.json();
      alert(response.ok ? 'Daycare deleted successfully' : result.message || 'Deletion failed');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  


  return (
    <div className="daycare-management">
      <h1 className="daycare-management-title">Daycare Management</h1>
      
      <div className="form-section">
        <h2 className="form-section-title"><FaPlusCircle /> Register Daycare</h2>
        <form onSubmit={handleSubmit}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setValues({...values, userID: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Daycare Name" onChange={(e) => setValues({...values, dcName: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Location" onChange={(e) => setValues({...values, dcLocation: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Phone" onChange={(e) => setValues({...values, dcPhone: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Email" onChange={(e) => setValues({...values, dcEmail: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Open Days" onChange={(e) => setValues({...values, openDays: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Open Times" onChange={(e) => setValues({...values, openTimes: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Number of Staff Members" onChange={(e) => setValues({...values, noOfStaffMembers: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Amenities Offered" onChange={(e) => setValues({...values, amenitiesOffered: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Safety Features" onChange={(e) => setValues({...values, safetyFeatures: e.target.value})} required />
          <button className="form-button" type="submit">Register</button>
        </form>
      </div>

      <div className="form-section">
        <h2 className="form-section-title"><FaUserEdit /> Update Daycare</h2>
        <form onSubmit={handleUpdate}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setUpdateValues({...updateValues, userID: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Daycare Name" onChange={(e) => setUpdateValues({...updateValues, dcName: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Location" onChange={(e) => setUpdateValues({...updateValues, dcLocation: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Phone" onChange={(e) => setUpdateValues({...updateValues, dcPhone: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Email" onChange={(e) => setUpdateValues({...updateValues, dcEmail: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Open Days" onChange={(e) => setUpdateValues({...updateValues, openDays: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Open Times" onChange={(e) => setUpdateValues({...updateValues, openTimes: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Number of Staff Members" onChange={(e) => setUpdateValues({...updateValues, noOfStaffMembers: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Amenities Offered" onChange={(e) => setUpdateValues({...updateValues, amenitiesOffered: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Safety Features" onChange={(e) => setUpdateValues({...updateValues, safetyFeatures: e.target.value})} required />
          <button className="form-button" type="submit">Update</button>
        </form>
      </div>

      <div className="form-section">
        <h2 className="form-section-title"><FaTrashAlt /> Delete Daycare</h2>
        <form onSubmit={handleDelete}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setDeleteUserID(e.target.value)} required />
          <input className="form-input" type="email" placeholder="Email" onChange={(e) => setDeleteEmail(e.target.value)} required />
          <button className="form-button" type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default DaycareRegiForm;