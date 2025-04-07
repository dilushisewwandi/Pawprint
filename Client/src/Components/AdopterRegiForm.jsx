// import React, { useState } from 'react';
// import './AdopterRegiForm.css';

// function AdopterRegiForm() {
//   const [values, setValues] = useState({
//     userID: '',
//     adoName: '',
//     adoNIC: '',
//     adoAge: '',
//     adoJob: '',
//     adoGender: '',
//     adoLocation: '',
//     adoEmail: '',
//     adoPhone: '',
//     houseHoldComposition: '',
//     reasonForAdoption: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validateInputs(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       try {
//         const response = await fetch('http://localhost:8800/api/adopterRegi/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(values)
//         });
//         if (response.ok) {
//           alert('Adopter registered successfully');
//           // window.location.href = '/services';
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
//     if (!values.userID) errors.userID = 'User ID is required';
//     if (!values.adoName) errors.adoName = 'Adopter Name is required';
//     if (!values.adoNIC) errors.adoNIC = 'Adopter NIC is required';
//     if (!values.adoAge) errors.adoAge = 'Adopter Age is required';
//     if (!values.adoJob) errors.adoJob = 'Adopter Job is required';
//     if (!values.adoGender) errors.adoGender = 'Adopter Gender is required';
//     if (!values.adoLocation) errors.adoLocation = 'Adopter Location is required';
//     if (!values.adoEmail) errors.adoEmail = 'Adopter Email is required';
//     if (!values.adoPhone) errors.adoPhone = 'Adopter Phone is required';
//     if (!values.houseHoldComposition) errors.houseHoldComposition = 'Household Composition is required';
//     if (!values.reasonForAdoption) errors.reasonForAdoption = 'Reason for Adoption is required';
//     return errors;
//   };

//   const backgroundStyle = {
//     backgroundImage: "url('/images/login1.jpg')",
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   return (
//     <div className="form-container" style={backgroundStyle}>
//       <div className="ado-regi-card">
//         <div className="ado-regi-card-body">
//           <h2 className="ado-regi-form-name">Adopter Registration</h2>
//           <form onSubmit={handleSubmit}>
//             {Object.keys(values).map(key => (
//               <div className="form-group" key={key}>
//                 <label htmlFor={key}>{key.split(/(?=[A-Z])/).join(' ')}</label>
//                 <input
//                   type={key === 'adoEmail' ? 'email' : 'text'}
//                   name={key}
//                   value={values[key]}
//                   onChange={handleInput}
//                   required
//                   placeholder={`Enter ${key.split(/(?=[A-Z])/).join(' ')}`}
//                   className="form-control rounded"
//                 />
//                 {errors[key] && <span className="text-danger">{errors[key]}</span>}
//               </div>
//             ))}
//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdopterRegiForm;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserEdit, FaTrashAlt, FaPlusCircle } from 'react-icons/fa';
import './AdopterRegiForm.css';

function AdopterRegiForm() {
  const [values, setValues] = useState({
    userID: '',
    adoName: '',
    adoNIC: '',
    adoAge: '',
    adoGender: '',
    adoJob: '',
    adoLocation: '',
    adoEmail: '',
    adoPhone: ''
  });

  const [updateValues, setUpdateValues] = useState({
    userID: '',
    adoName: '',
    adoNIC: '',
    adoAge: '',
    adoGender: '',
    adoJob: '',
    adoLocation: '',
    adoEmail: '',
    adoPhone: ''
  });

  const [deleteUserID, setDeleteUserID] = useState('');
  const [deleteEmail, setDeleteEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8800/api/adopter/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (response.ok) {
        alert(result.message || 'Adopter registered successfully');
        window.location.href = '/adopterPanel';
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
      const response = await fetch(`http://localhost:8800/api/adopter/update/${updateValues.userID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateValues)
      });
      const result = await response.json();
      alert(response.ok ? 'Adopter updated successfully' : result.error || 'Failed to update adopter');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // const handleDelete = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const response = await fetch(`http://localhost:8800/api/adopter/delete/${deleteUserID}`, {
  //       method: 'DELETE'
  //     });
  //     const result = await response.json();
  //     alert(response.ok ? 'Adopter deleted successfully' : result.error || 'Failed to delete adopter');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const handleDelete = async (event) => {
    event.preventDefault();
    const confirmDelete = window.confirm("Are you sure you want to delete this adopter?");
    if (!confirmDelete) return;

    try {
        const response = await fetch(`http://localhost:8800/api/adopter/delete/${deleteUserID}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ adoEmail: deleteEmail }) // Sending email for validation
        });

        const result = await response.json();
        alert(response.ok ? 'Adopter deleted successfully' : result.error || 'Failed to delete adopter');
    } catch (error) {
        console.error('Error:', error);
    }
};


  return (
    <div className="adopter-management">
      <h1 className="adopter-management-title">Adopter Management</h1>
      
      <div className="form-section">
        <h2 className="form-section-title"><FaPlusCircle /> Register Adopter</h2>
        <form onSubmit={handleSubmit}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setValues({...values, userID: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Name" onChange={(e) => setValues({...values, adoName: e.target.value})} required />
          <input className="form-input" type="text" placeholder="NIC" onChange={(e) => setValues({...values, adoNIC: e.target.value})} required />
          <input className="form-input" type="number" placeholder="Age" onChange={(e) => setValues({...values, adoAge: e.target.value})} required />
          <select className="form-input" onChange={(e) => setValues({...values, adoGender: e.target.value})} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input className="form-input" type="text" placeholder="Job" onChange={(e) => setValues({...values, adoJob: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Location" onChange={(e) => setValues({...values, adoLocation: e.target.value})} required />
          <input className="form-input" type="email" placeholder="Email" onChange={(e) => setValues({...values, adoEmail: e.target.value})} required />
          <input className="form-input" type="text" placeholder="Phone" onChange={(e) => setValues({...values, adoPhone: e.target.value})} required />
          <button className="form-button" type="submit">Register</button>
        </form>
      </div>

      <div className="form-section">
        <h2 className="form-section-title"><FaUserEdit /> Update Adopter</h2>
        <form onSubmit={handleUpdate}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setUpdateValues({...updateValues, userID: e.target.value})} required />
          <input className="form-input" type="text" placeholder="New Name" onChange={(e) => setUpdateValues({...updateValues, adoName: e.target.value})} />
          <input className="form-input" type="text" placeholder="New NIC" onChange={(e) => setUpdateValues({...updateValues, adoNIC: e.target.value})} />
          <input className="form-input" type="number" placeholder="New Age" onChange={(e) => setUpdateValues({...updateValues, adoAge: e.target.value})} />
          <select className="form-input" onChange={(e) => setUpdateValues({...updateValues, adoGender: e.target.value})}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input className="form-input" type="text" placeholder="New Job" onChange={(e) => setUpdateValues({...updateValues, adoJob: e.target.value})} />
          <input className="form-input" type="text" placeholder="New Location" onChange={(e) => setUpdateValues({...updateValues, adoLocation: e.target.value})} />
          <input className="form-input" type="email" placeholder="New Email" onChange={(e) => setUpdateValues({...updateValues, adoEmail: e.target.value})} />
          <input className="form-input" type="text" placeholder="New Phone" onChange={(e) => setUpdateValues({...updateValues, adoPhone: e.target.value})} />
          <button className="form-button" type="submit">Update</button>
        </form>
      </div>

      <div className="form-section">
        <h2 className="form-section-title"><FaTrashAlt /> Delete Adopter</h2>
        <form onSubmit={handleDelete}>
          <input className="form-input" type="text" placeholder="User ID" onChange={(e) => setDeleteUserID(e.target.value)} required />
          <input className="form-input" type="email" placeholder="Email" onChange={(e) => setDeleteEmail(e.target.value)} required />
          <button className="form-button" type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}

export default AdopterRegiForm;


