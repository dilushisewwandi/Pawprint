import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import './VetRegiForm.css';

function VetRegiForm() {
  const [values, setValues] = useState({
    userID: '',
    vetName: '',
    vetSpecialization: '',
    vetPhone: '',
    vetEmail: '',
    clinic: ''
  });

  const [updateValues, setUpdateValues] = useState({
    userID: '',
    vetName: '',
    vetSpecialization: '',
    vetPhone: '',
    vetEmail: '',
    clinic: ''
  });

  const [deleteUserID, setDeleteUserID] = useState('');
  const [deleteEmail, setDeleteEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8800/api/vet/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Veterinarian registered successfully');
        window.location.href = '/vetPanel'; // Redirect after successful registration
      } else {
        alert(result.error || 'Error registering veterinarian');
        navigate('/signup');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8800/api/vet/update/${updateValues.userID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateValues)
      });
      const result = await response.json();
      alert(response.ok ? 'Veterinarian updated successfully' : result.error || 'Failed to update veterinarian');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8800/api/vet/delete/${deleteUserID}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ vetEmail: deleteEmail }) // Corrected variable name
      });
      const result = await response.json();
      alert(response.ok ? 'Veterinarian deleted successfully' : result.error || 'Failed to delete veterinarian');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <div className="vet-management">
      <h1 className="vet-management-title">Veterinarian Management</h1>

      {/* Register Vet */}
      <div className="form-section">
        <h2 className="form-section-title"><FaPlusCircle /> Register Veterinarian</h2>
        <form onSubmit={handleSubmit}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setValues({...values, userID: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Name" onChange={(e) => setValues({...values, vetName: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Specialization" onChange={(e) => setValues({...values, vetSpecialization: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Phone" onChange={(e) => setValues({...values, vetPhone: e.target.value})} required />
          <input className="form-input" type="email" placeholder="Email" onChange={(e) => setValues({...values, vetEmail: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Clinic" onChange={(e) => setValues({...values, clinic: e.target.value})} required />
          <button className="form-button" type="submit">Register</button>
        </form>
      </div>

      {/* Update Vet */}
      <div className="form-section">
        <h2 className="form-section-title"><FaUserEdit /> Update Veterinarian</h2>
        <form onSubmit={handleUpdate}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setUpdateValues({...updateValues, userID: e.target.value})} required />
          <input className="form-input" type="text" placeholder="New Name" onChange={(e) => setUpdateValues({...updateValues, vetName: e.target.value})} />
          <input className="form-input" type="text" placeholder="New Specialization" onChange={(e) => setUpdateValues({...updateValues, vetSpecialization: e.target.value})} />
          <input className="form-input" type="text" placeholder="New Phone" onChange={(e) => setUpdateValues({...updateValues, vetPhone: e.target.value})} />
          <input className="form-input" type="email" placeholder="New Email" onChange={(e) => setUpdateValues({...updateValues, vetEmail: e.target.value})} />
          <input className="form-input" type="text" placeholder="New Clinic" onChange={(e) => setUpdateValues({...updateValues, clinic: e.target.value})} />
          <button className="form-button" type="submit">Update</button>
        </form>
      </div>

      {/* Delete Vet */}
      <div className="form-section">
        <h2 className="form-section-title"><FaTrashAlt /> Delete Veterinarian</h2>
        <form onSubmit={handleDelete}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setDeleteUserID(e.target.value)} required />
          <input className="form-input" type="email" placeholder="Email" onChange={(e) => setDeleteEmail(e.target.value)} required />
          <button className="form-button" type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default VetRegiForm;
