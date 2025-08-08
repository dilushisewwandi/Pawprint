import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import './DistributorRegiForm.css';

function DistributorRegiForm() {
  const [values, setValues] = useState({
    disName: '',
    disEmail: '',
    disPhone: '',
    disLocation: '',
    userID: ''
  });
  
  const [updateValues, setUpdateValues] = useState({
    userID: '',
    disName: '',
    disEmail: '',
    disPhone: '',
    disLocation: ''
  });
  
  const [deleteUserID, setDeleteUserID] = useState('');
  const [deleteEmail, setDeleteEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8800/api/distributor/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Distributor registered successfully');
        window.location.href = '/distributorPanel';
      } else {
        alert(result.error || 'This user ID is wrong or already assigned. Please sign up.');
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8800/api/distributor/update/${updateValues.userID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userID: updateValues.userID,
          disName: updateValues.disName,
          disEmail: updateValues.disEmail,
          disPhone: updateValues.disPhone,
          disLocation: updateValues.disLocation,
          email: updateValues.disEmail 
        })
      });
      const result = await response.json();
      alert(response.ok ? 'Distributor updated successfully' : result.error || 'Failed to update distributor');
      
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleDelete = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:8800/api/distributor/delete/${deleteUserID}`, {
  //       method: 'DELETE'
  //     });
  //     const result = await response.json();
  //     alert(response.ok ? 'Distributor deleted successfully' : result.error || 'Failed to delete distributor');
  //     window.location.href = '/distributorPanel';
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleDelete = async (event) => {
    event.preventDefault();
  
    // Confirm before deletion
    const confirmDelete = window.confirm("Are you sure you want to delete this distributor?");
    if (!confirmDelete) return;
  
    try {
      const response = await fetch(`http://localhost:8800/api/distributor/delete/${deleteUserID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userID: deleteUserID, email: deleteEmail })
      });
      
      const result = await response.json();
      alert(response.ok ? 'Distributor deleted successfully' : result.error || 'Failed to delete distributor');
      
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className="distributor-management">
      <h1>Distributor Management</h1>
      
      <div className="form-section">
        <h2><FaPlusCircle /> Register Distributor</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="disName" placeholder="Distributor Name" onChange={(e) => setValues({...values, disName: e.target.value})} required />
          <input type="email" name="disEmail" placeholder="Email" onChange={(e) => setValues({...values, disEmail: e.target.value})} required />
          <input type="text" name="disPhone" placeholder="Phone" onChange={(e) => setValues({...values, disPhone: e.target.value})} required />
          <input type="text" name="disLocation" placeholder="Location" onChange={(e) => setValues({...values, disLocation: e.target.value})} required />
          <input type="text" name="userID" placeholder="User ID" onChange={(e) => setValues({...values, userID: e.target.value})} required />
          <button type="submit">Register</button>
        </form>
      </div>

      <div className="form-section">
        <h2><FaUserEdit /> Update Distributor</h2>
        <form onSubmit={handleUpdate}>
          <input type="text" name="userID" placeholder="User ID" onChange={(e) => setUpdateValues({...updateValues, userID: e.target.value})} required />
          <input type="text" name="disName" placeholder="New Name" onChange={(e) => setUpdateValues({...updateValues, disName: e.target.value})} />
          <input type="email" name="disEmail" placeholder="New Email" onChange={(e) => setUpdateValues({...updateValues, disEmail: e.target.value})} />
          <input type="text" name="disPhone" placeholder="New Phone" onChange={(e) => setUpdateValues({...updateValues, disPhone: e.target.value})} />
          <input type="text" name="disLocation" placeholder="New Location" onChange={(e) => setUpdateValues({...updateValues, disLocation: e.target.value})} />
          <button type="submit">Update</button>
        </form>
      </div>

      <div className="form-section">
        <h2><FaTrashAlt /> Delete Distributor</h2>
        <form onSubmit={handleDelete}>
          <input type="text" name="userID" placeholder="User ID" onChange={(e) => setDeleteUserID(e.target.value)} required />
          <input className="form-input" type="email" placeholder="Email" onChange={(e) => setDeleteEmail(e.target.value)} required />
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default DistributorRegiForm;