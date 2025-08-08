import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaw, FaEdit, FaTrash } from 'react-icons/fa';
import './PetRegistrationForm.css';

function PetRegistrationForm() {
  const [values, setValues] = useState({
    userID: '',
    petName: '',
    petBreed: '',
    petAge: '',
    petSkinColor: '',
    petGender: '',
    petHeight: '',
    petWeight: '',
    petImage: null
  });

  const [updateValues, setUpdateValues] = useState({
    petID: '',
    userID: '',
    petName: '',
    petBreed: '',
    petAge: '',
    petSkinColor: '',
    petGender: '',
    petHeight: '',
    petWeight: '',
    petImage: null
  });

  const [deletePetID, setDeletePetID] = useState('');
  const [deleteUserID, setDeleteUserID] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    try {
      const response = await fetch('http://localhost:8800/api/pet/register', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      alert(response.ok ? 'Pet registered successfully' : result.error || 'Failed to register pet');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(updateValues).forEach((key) => {
      if (updateValues[key]) {
        formData.append(key, updateValues[key]);
      }
    });

    try {
      const response = await fetch(`http://localhost:8800/api/pet/update/${updateValues.petID}`, {
        method: 'PUT',
        body: formData,
      });
      const result = await response.json();
      alert(response.ok ? 'Pet updated successfully' : result.error || 'Failed to update pet');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    if (!window.confirm('Are you sure you want to delete this pet?')) return;
    try {
      const response = await fetch('http://localhost:8800/api/pet/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ petID: deletePetID, userID: deleteUserID })
      });
      const result = await response.json();
      alert(response.ok ? 'Pet deleted successfully' : result.error || 'Failed to delete pet');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="pet-management">
      <h1 className="pet-management-title">Pet Management</h1>
      <div className="form-section">
        <h2><FaPaw /> Register Pet</h2>
        <form onSubmit={handleSubmit}>
          {Object.keys(values).map((key) => (
            key !== 'petImage' ? (
              <input key={key} type="text" placeholder={key} onChange={(e) => setValues({ ...values, [key]: e.target.value })} required />
            ) : (
              <input key={key} type="file" onChange={(e) => setValues({ ...values, [key]: e.target.files[0] })} required />
            )
          ))}
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="form-section">
        <h2><FaEdit /> Update Pet</h2>
        <form onSubmit={handleUpdate}>
          {Object.keys(updateValues).map((key) => (
            key !== 'petImage' ? (
              <input key={key} type="text" placeholder={`New ${key}`} onChange={(e) => setUpdateValues({ ...updateValues, [key]: e.target.value })} />
            ) : (
              <input key={key} type="file" onChange={(e) => setUpdateValues({ ...updateValues, [key]: e.target.files[0] })} />
            )
          ))}
          <button type="submit">Update</button>
        </form>
      </div>
      <div className="form-section">
        <h2><FaTrash /> Delete Pet</h2>
        <form onSubmit={handleDelete}>
          <input type="text" placeholder="Pet ID" onChange={(e) => setDeletePetID(e.target.value)} required />
          <input type="text" placeholder="UserID" onChange={(e) => setDeleteUserID(e.target.value)} required />
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default PetRegistrationForm;
