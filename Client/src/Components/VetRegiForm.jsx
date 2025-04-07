// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './VetRegiForm.css'; 

// function VetRegiForm() {
//   const [values, setValues] = useState({
//     vetName: '',
//     vetEmail: '',
//     vetSpecialization: '',
//     vetPhone: '',
//     clinic: '',
//     userID: ''
//   });

//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validateInputs(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:8800/api/vet/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(values)
//         });

//         if (response.ok) {
//           alert('Veterinarian registered successfully');
         
//         } else {
//           console.error('Error storing data:', response.statusText);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     }
//   };

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setValues(prev => ({ ...prev, [name]: value }));
//   };

//   const validateInputs = (values) => {
//     let errors = {};
//     if (!values.vetName) errors.vetName = 'Veterinarian Name is required';
//     if (!values.vetEmail) errors.vetEmail = 'Veterinarian Email is required';
//     if (!values.vetSpecialization) errors.vetSpecialization = 'Specialization is required';
//     if (!values.vetPhone) errors.vetPhone = 'Veterinarian Phone is required';
//     if (!values.clinic) errors.clinic = 'Clinic Name is required';
//     if (!values.userID) errors.userID = 'User ID is required';
//     return errors;
//   };

//   const backgroundStyle = {
//     backgroundImage: "url('/images/login1.jpg')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   return (
//     <div className="form-container" style={backgroundStyle}>
//       <div className="registration-content">
//         <h1 className="welcome-message">Join Our Veterinary Network</h1>
//         <div className="registration-card">
//           <div className="registration-card-body">
//             <h2 className="regi-form-name">Veterinarian Registration</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="vetName">Vet Name</label>
//                 <input
//                   type="text"
//                   name="vetName"
//                   value={values.vetName}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Veterinarian Name"
//                 />
//                 {errors.vetName && <span className="text-danger">{errors.vetName}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="vetEmail">Vet Email</label>
//                 <input
//                   type="email"
//                   name="vetEmail"
//                   value={values.vetEmail}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Veterinarian Email"
//                 />
//                 {errors.vetEmail && <span className="text-danger">{errors.vetEmail}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="vetSpecialization">Specialization</label>
//                 <input
//                   type="text"
//                   name="vetSpecialization"
//                   value={values.vetSpecialization}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Specialization"
//                 />
//                 {errors.vetSpecialization && <span className="text-danger">{errors.vetSpecialization}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="vetPhone">Vet Phone</label>
//                 <input
//                   type="text"
//                   name="vetPhone"
//                   value={values.vetPhone}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Phone"
//                 />
//                 {errors.vetPhone && <span className="text-danger">{errors.vetPhone}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="clinic">Vet Clinic</label>
//                 <input
//                   type="text"
//                   name="clinic"
//                   value={values.clinic}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Clinic"
//                 />
//                 {errors.clinic && <span className="text-danger">{errors.clinic}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="userID">User ID</label>
//                 <input
//                   type="text"
//                   name="userID"
//                   value={values.userID}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter User ID"
//                 />
//                 {errors.userID && <span className="text-danger">{errors.userID}</span>}
//               </div>

//               <button type="submit" className='vet-regi-submit'>Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VetRegiForm;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './VetRegiForm.css'; 

// function VetRegiForm() {
//   const [values, setValues] = useState({
//     vetName: '',
//     vetEmail: '',
//     vetSpecialization: '',
//     vetPhone: '',
//     clinic: '',
//     userID: ''
//   });

//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState(''); // State for server error messages
//   const navigate = useNavigate(); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validateInputs(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:8800/api/vet/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(values)
//         });

//         if (response.ok) {
//           alert('Veterinarian registered successfully');
//           setServerError(''); // Clear any previous server errors
//         } else {
//           const errorData = await response.json();
//           setServerError(errorData.error || 'Error registering veterinarian');
//         }
//       } catch (error) {
//         setServerError('Failed to connect to the server. Please try again.');
//         console.error('Error:', error);
//       }
//     }
//   };

//   const handleInput = (event) => {
//     const { name, value } = event.target;
//     setValues(prev => ({ ...prev, [name]: value }));
//   };

//   const validateInputs = (values) => {
//     let errors = {};
//     if (!values.vetName) errors.vetName = 'Veterinarian Name is required';
//     if (!values.vetEmail) errors.vetEmail = 'Veterinarian Email is required';
//     if (!values.vetSpecialization) errors.vetSpecialization = 'Specialization is required';
//     if (!values.vetPhone) errors.vetPhone = 'Veterinarian Phone is required';
//     if (!values.clinic) errors.clinic = 'Clinic Name is required';
//     if (!values.userID) errors.userID = 'User ID is required';
//     return errors;
//   };

//   const backgroundStyle = {
//     backgroundImage: "url('/images/login1.jpg')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   return (
//     <div className="form-container" style={backgroundStyle}>
//       <div className="registration-content">
//         <h1 className="welcome-message">Join Our Veterinary Network</h1>
//         <div className="registration-card">
//           <div className="registration-card-body">
//             <h2 className="regi-form-name">Veterinarian Registration</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="vetName">Vet Name</label>
//                 <input
//                   type="text"
//                   name="vetName"
//                   value={values.vetName}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Veterinarian Name"
//                 />
//                 {errors.vetName && <span className="text-danger">{errors.vetName}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="vetEmail">Vet Email</label>
//                 <input
//                   type="email"
//                   name="vetEmail"
//                   value={values.vetEmail}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Veterinarian Email"
//                 />
//                 {errors.vetEmail && <span className="text-danger">{errors.vetEmail}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="vetSpecialization">Specialization</label>
//                 <input
//                   type="text"
//                   name="vetSpecialization"
//                   value={values.vetSpecialization}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Specialization"
//                 />
//                 {errors.vetSpecialization && <span className="text-danger">{errors.vetSpecialization}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="vetPhone">Vet Phone</label>
//                 <input
//                   type="text"
//                   name="vetPhone"
//                   value={values.vetPhone}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Phone"
//                 />
//                 {errors.vetPhone && <span className="text-danger">{errors.vetPhone}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="clinic">Vet Clinic</label>
//                 <input
//                   type="text"
//                   name="clinic"
//                   value={values.clinic}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter Clinic"
//                 />
//                 {errors.clinic && <span className="text-danger">{errors.clinic}</span>}
//               </div>

//               <div className="form-group">
//                 <label htmlFor="userID">User ID</label>
//                 <input
//                   type="text"
//                   name="userID"
//                   value={values.userID}
//                   onChange={handleInput}
//                   required
//                   placeholder="Enter User ID"
//                 />
//                 {errors.userID && <span className="text-danger">{errors.userID}</span>}
//               </div>

//               {serverError && <div className="text-danger">{serverError}</div>} {/* Display server error here */}

//               <button type="submit" className='vet-regi-submit'>Register</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VetRegiForm;



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
