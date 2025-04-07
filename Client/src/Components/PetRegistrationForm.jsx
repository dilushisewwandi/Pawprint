// import React, { useState } from 'react';
// import './PetRegistrationForm.css';

// function PetRegistrationForm() {
//   const [values, setValues] = useState({
//     userID: '',
//     petName: '',
//     petAge: '',
//     petHeight: '',
//     petWeight: '',
//     petGender: '',
//     petSkinColor: '',
//     petBreed: '',
//     petImage: null
//   });

//   const [errors, setErrors] = useState({});
//   const [serverError, setServerError] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const validationErrors = validateInputs(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       const formData = new FormData();
//       for (const key in values) {
//         formData.append(key, values[key]);
//       }
//       try {
//         const response = await fetch('http://localhost:8800/api/pet/register', {
//           method: 'POST',
//           body: formData
//         });

//         const result = await response.json();

//         if (response.ok) {
//           alert('Your pet registered successfully');
//         } else {
//           setServerError(result.error || 'Error registering pet.');
//         }
//       } catch (error) {
//         console.error('Error:', error);
//         setServerError('An unexpected error occurred.');
//       }
//     }
//   };


  

//   const handleInput = (event) => {
//     const { name, value, files } = event.target;
//     if (files) {
//       setValues(prev => ({ ...prev, [name]: files[0] }));
//     } else {
//       setValues(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const validateInputs = (values) => {
//     let errors = {};
//     if (!values.userID) errors.userID = 'User ID is required';
//     if (!values.petName) errors.petName = 'Pet Name is required';
//     if (!values.petAge) errors.petAge = 'Pet Age is required';
//     if (!values.petBreed) errors.petBreed = 'Pet Breed is required';
//     if (!values.petWeight) errors.petWeight = 'Pet Weight is required';
//     if (!values.petHeight) errors.petHeight = 'Pet Height is required';
//     if (!values.petSkinColor) errors.petSkinColor = 'Pet Skin Color is required';
//     if (!values.petGender) errors.petGender = 'Pet Gender is required';
//     if (!values.petImage) errors.petImage = 'Pet Image is required';
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
//       <div className="registration-card">
//         <div className="registration-card-body">
//           <h2 className="regi-form-name">Pet Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="userID">User ID</label>
//               <input
//                 type="text"
//                 name="userID"
//                 value={values.userID}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter User ID"
//                 className="form-control rounded"
//               />
//               {errors.userID && <span className="text-danger">{errors.userID}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petName">Pet Name</label>
//               <input
//                 type="text"
//                 name="petName"
//                 value={values.petName}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter Pet Name"
//                 className="form-control rounded"
//               />
//               {errors.petName && <span className="text-danger">{errors.petName}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petAge">Pet Age</label>
//               <input
//                 type="text"
//                 name="petAge"
//                 value={values.petAge}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter Pet Age"
//                 className="form-control rounded"
//               />
//               {errors.petAge && <span className="text-danger">{errors.petAge}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petBreed">Pet Breed</label>
//               <input
//                 type="text"
//                 name="petBreed"
//                 value={values.petBreed}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter Pet Breed"
//                 className="form-control rounded"
//               />
//               {errors.petBreed && <span className="text-danger">{errors.petBreed}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petWeight">Pet Weight</label>
//               <input
//                 type="text"
//                 name="petWeight"
//                 value={values.petWeight}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter Pet Weight (e.g., 5.5)"
//                 className="form-control rounded"
//                  step="0.1"
//               />
//               {errors.petWeight && <span className="text-danger">{errors.petWeight}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petHeight">Pet Height</label>
//               <input
//                 type="text"
//                 name="petHeight"
//                 value={values.petHeight}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter Pet Height (e.g., 4.5)"
//                 className="form-control rounded"
//                 step="0.1"
//               />
//               {errors.petHeight && <span className="text-danger">{errors.petHeight}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petSkinColor">Pet Skin Color</label>
//               <input
//                 type="text"
//                 name="petSkinColor"
//                 value={values.petSkinColor}
//                 onChange={handleInput}
//                 required
//                 placeholder="Enter Pet Skin Color"
//                 className="form-control rounded"
//               />
//               {errors.petSkinColor && <span className="text-danger">{errors.petSkinColor}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petGender">Pet Gender</label>
//               <select
//                 name="petGender"
//                 value={values.petGender}
//                 onChange={handleInput}
//                 required
//                 className="form-control rounded"
//               >
//                 <option value="">Select</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//               </select>
//               {errors.petGender && <span className="text-danger">{errors.petGender}</span>}
//             </div>

//             <div className="form-group">
//               <label htmlFor="petImage">Pet Image</label>
//               <input type="file" name="petImage" onChange={handleInput} required className="form-control rounded" />
//               {errors.petImage && <span className="text-danger">{errors.petImage}</span>}
//             </div>

//             <button type="submit">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PetRegistrationForm;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaPaw, FaEdit, FaTrash } from 'react-icons/fa';
// import './PetRegistrationForm.css';  


// function PetRegistrationForm() {
//   const [values, setValues] = useState({
//     userID:'',
//     petID: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//     petColor: '',
//     petGender: '',
//     petStatus: ''
//   });

//   const [updateValues, setUpdateValues] = useState({
//     userID:'',
//     petID: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//     petColor: '',
//     petGender: '',
//     petStatus: ''
//   });

//   const [deletePetID, setDeletePetID] = useState('');
//   const [deleteUserID, setDeleteUserID] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8800/api/pet/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values)
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet registered successfully' : result.error || 'Failed to register pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await fetch(`http://localhost:8800/api/pet/update/${updateValues.petID}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updateValues)
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet updated successfully' : result.error || 'Failed to update pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDelete = async (event) => {
//     event.preventDefault();
//     if (!window.confirm('Are you sure you want to delete this pet?')) return;
//     try {
//       const response = await fetch(`http://localhost:8800/api/pet/delete/${deletePetID}`, {
//         method: 'DELETE'
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet deleted successfully' : result.error || 'Failed to delete pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="pet-management">
//       <h1 className="pet-management-title">Pet Management</h1>
      
//       <div className="form-section">
//         <h2><FaPaw /> Register Pet</h2>
//         <form onSubmit={handleSubmit}>
//   <input 
//     type="text" 
//     placeholder="Pet Name" 
//     onChange={(e) => setValues({...values, petName: e.target.value})} 
//     required 
//   />
//   <input 
//     type="text" 
//     placeholder="Breed" 
//     onChange={(e) => setValues({...values, petBreed: e.target.value})} 
//     required 
//   />
//   <input 
//     type="number" 
//     placeholder="Age (Months)" 
//     onChange={(e) => setValues({...values, petAge: e.target.value})} 
//     required 
//   />
//   <input 
//     type="text" 
//     placeholder="Skin Color" 
//     onChange={(e) => setValues({...values, petColor: e.target.value})} 
//     required 
//   />
//   <input 
//     type="text" 
//     placeholder="Height" 
//     onChange={(e) => setValues({...values, petHeight: e.target.value})} 
//     required 
//   />
//   <input 
//     type="text" 
//     placeholder="Weight" 
//     onChange={(e) => setValues({...values, petWeight: e.target.value})} 
//     required 
//   />
//   <input 
//     type="file" 
//     placeholder="Image" 
//     onChange={(e) => setValues({...values, petImage: e.target.files[0]})} 
//     required 
//   />
//   <input 
//     type="text" 
//     placeholder="UserID" 
//     onChange={(e) => setValues({...values, userID: e.target.value})} 
//     required 
//   />
//   <select 
//     onChange={(e) => setValues({...values, petGender: e.target.value})} 
//     required
//   >
//     <option value="">Select Gender</option>
//     <option value="Male">Male</option>
//     <option value="Female">Female</option>
//   </select>
//   <button type="submit">Register</button>
// </form>

//       </div>

//       <div className="form-section">
//         <h2><FaEdit /> Update Pet</h2>
//         <form onSubmit={handleUpdate}>
//   <input 
//     type="text" 
//     placeholder="Pet ID" 
//     onChange={(e) => setUpdateValues({...updateValues, petID: e.target.value})} 
//     required 
//   />
//   <input 
//     type="text" 
//     placeholder="New Name" 
//     onChange={(e) => setUpdateValues({...updateValues, petName: e.target.value})} 
//   />
//   <input 
//     type="text" 
//     placeholder="New Breed" 
//     onChange={(e) => setUpdateValues({...updateValues, petBreed: e.target.value})} 
//   />
//   <input 
//     type="number" 
//     placeholder="New Age (Months)" 
//     onChange={(e) => setUpdateValues({...updateValues, petAge: e.target.value})} 
//   />
//   <input 
//     type="text" 
//     placeholder="New Color" 
//     onChange={(e) => setUpdateValues({...updateValues, petColor: e.target.value})} 
//   />
//   <input 
//     type="text" 
//     placeholder="New Height" 
//     onChange={(e) => setUpdateValues({...updateValues, petHeight: e.target.value})} 
//   />
//   <input 
//     type="text" 
//     placeholder="New Weight" 
//     onChange={(e) => setUpdateValues({...updateValues, petWeight: e.target.value})} 
//   />
//   <input 
//     type="file" 
//     onChange={(e) => setUpdateValues({...updateValues, petImage: e.target.files[0]})} 
//   />
//   <input 
//     type="text" 
//     placeholder="UserID" 
//     onChange={(e) => setUpdateValues({...updateValues, userID: e.target.value})} 
//     required 
//   />
//   <select 
//     onChange={(e) => setUpdateValues({...updateValues, petGender: e.target.value})}
//   >
//     <option value="">Select Gender</option>
//     <option value="Male">Male</option>
//     <option value="Female">Female</option>
//   </select>
//   <button type="submit">Update</button>
// </form>

//       </div>

//       <div className="form-section">
//         <h2><FaTrash /> Delete Pet</h2>
//         <form onSubmit={handleDelete}>
//           <input type="text" placeholder="Pet ID" onChange={(e) => setDeletePetID(e.target.value)} required />
//           <input type="text" placeholder="UserID" onChange={(e) => setDeleteUserID(e.target.value)} required />
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PetRegistrationForm;




































// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaPaw, FaEdit, FaTrash } from 'react-icons/fa';
// import './PetRegistrationForm.css';

// function PetRegistrationForm() {
//   const [values, setValues] = useState({
//     userID: '',
//     petID: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//     petSkinColor: '',
//     petGender: '',
//     status: null,
//     petImage:null
//   });

//   const [updateValues, setUpdateValues] = useState({
//     userID: '',
//     petID: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//     petSkinColor: '',
//     petGender: '',
//     status: null,
//     petImage:null
//   });

//   const [deletePetID, setDeletePetID] = useState('');
//   const [deleteUserID, setDeleteUserID] = useState('');
//   const navigate = useNavigate();

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     const response = await fetch('http://localhost:8800/api/pet/register', {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(values)
//   //     });
//   //     const result = await response.json();
//   //     alert(response.ok ? 'Pet registered successfully' : result.error || 'Failed to register pet');
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // Create FormData object to send the form data, including the file
//     const formData = new FormData();
//     formData.append('userID', values.userID);
//     formData.append('petName', values.petName);
//     formData.append('petBreed', values.petBreed);
//     formData.append('petAge', values.petAge);
//     formData.append('petSkinColor', values.petSkinColor);
//     formData.append('petHeight', values.petHeight);
//     formData.append('petWeight', values.petWeight);
//     formData.append('petGender', values.petGender);
//     formData.append('petImage', values.petImage);  // Append the file

//     try {
//         const response = await fetch('http://localhost:8800/api/pet/register', {
//             method: 'POST',
//             body: formData,  // FormData handles the content type automatically
//         });
//         const result = await response.json();
//         alert(response.ok ? 'Pet registered successfully' : result.error || 'Failed to register pet');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


//   // const handleUpdate = async (event) => {
//   //   event.preventDefault();
//   //   try {
//   //     const response = await fetch(`http://localhost:8800/api/pet/update/${updateValues.petID}`, {
//   //       method: 'PUT',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify(updateValues)
//   //     });
//   //     const result = await response.json();
//   //     alert(response.ok ? 'Pet updated successfully' : result.error || 'Failed to update pet');
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
    
//     formData.append('userID', updateValues.userID);
//     formData.append('petName', updateValues.petName);
//     formData.append('petBreed', updateValues.petBreed);
//     formData.append('petAge', updateValues.petAge);
//     formData.append('petHeight', updateValues.petHeight);
//     formData.append('petWeight', updateValues.petWeight);
//     formData.append('petSkinColor', updateValues.petSkinColor);
//     formData.append('petGender', updateValues.petGender);
    
//     if (updateValues.petImage) {
//         formData.append('petImage', updateValues.petImage);  // Only append if the image is selected
//     }

//     try {
//         const response = await fetch(`http://localhost:8800/api/pet/update/${updateValues.petID}`, {
//             method: 'PUT',
//             body: formData,  // Send the formData, including the file
//         });
//         const result = await response.json();
//         alert(response.ok ? 'Pet updated successfully' : result.error || 'Failed to update pet');
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };


//   const handleDelete = async (event) => {
//     event.preventDefault();
//     if (!window.confirm('Are you sure you want to delete this pet?')) return;
//     try {
//       const response = await fetch('http://localhost:8800/api/pet/delete', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           petID: deletePetID,
//           userID: deleteUserID // Send the userID with the delete request
//         })
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet deleted successfully' : result.error || 'Failed to delete pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="pet-management">
//       <h1 className="pet-management-title">Pet Management</h1>

//       {/* Register Pet */}
//       <div className="form-section">
//         <h2><FaPaw /> Register Pet</h2>
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="text" 
//             placeholder="Pet Name" 
//             onChange={(e) => setValues({...values, petName: e.target.value})} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="Breed" 
//             onChange={(e) => setValues({...values, petBreed: e.target.value})} 
//             required 
//           />
//           <input 
//             type="number" 
//             placeholder="Age (Months)" 
//             onChange={(e) => setValues({...values, petAge: e.target.value})} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="Skin Color" 
//             onChange={(e) => setValues({...values, petSkinColor: e.target.value})} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="Height" 
//             onChange={(e) => setValues({...values, petHeight: e.target.value})} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="Weight" 
//             onChange={(e) => setValues({...values, petWeight: e.target.value})} 
//             required 
//           />
//           <input 
//             type="file" 
//             placeholder="Image" 
//             onChange={(e) => setValues({...values, petImage: e.target.files[0]})} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="UserID" 
//             onChange={(e) => setValues({...values, userID: e.target.value})} 
//             required 
//           />
//           <select 
//             onChange={(e) => setValues({...values, petGender: e.target.value})} 
//             required
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <button type="submit">Register</button>
//         </form>
//       </div>

//       {/* Update Pet */}
//       <div className="form-section">
//         <h2><FaEdit /> Update Pet</h2>
//         <form onSubmit={handleUpdate}>
//           <input 
//             type="text" 
//             placeholder="Pet ID" 
//             onChange={(e) => setUpdateValues({...updateValues, petID: e.target.value})} 
//             required 
//           />
//           <input 
//             type="text" 
//             placeholder="New Name" 
//             onChange={(e) => setUpdateValues({...updateValues, petName: e.target.value})} 
//           />
//           <input 
//             type="text" 
//             placeholder="New Breed" 
//             onChange={(e) => setUpdateValues({...updateValues, petBreed: e.target.value})} 
//           />
//           <input 
//             type="number" 
//             placeholder="New Age (Months)" 
//             onChange={(e) => setUpdateValues({...updateValues, petAge: e.target.value})} 
//           />
//           <input 
//             type="text" 
//             placeholder="New Color" 
//             onChange={(e) => setUpdateValues({...updateValues, petSkinColor: e.target.value})} 
//           />
//           <input 
//             type="text" 
//             placeholder="New Height" 
//             onChange={(e) => setUpdateValues({...updateValues, petHeight: e.target.value})} 
//           />
//           <input 
//             type="text" 
//             placeholder="New Weight" 
//             onChange={(e) => setUpdateValues({...updateValues, petWeight: e.target.value})} 
//           />
//           <input 
//             type="file" 
//             onChange={(e) => setUpdateValues({...updateValues, petImage: e.target.files[0]})} 
//           />
//           <input 
//             type="text" 
//             placeholder="UserID" 
//             onChange={(e) => setUpdateValues({...updateValues, userID: e.target.value})} 
//             required 
//           />
//           <select 
//             onChange={(e) => setUpdateValues({...updateValues, petGender: e.target.value})}
//           >
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <button type="submit">Update</button>
//         </form>
//       </div>

//       {/* Delete Pet */}
//       <div className="form-section">
//         <h2><FaTrash /> Delete Pet</h2>
//         <form onSubmit={handleDelete}>
//           <input type="text" placeholder="Pet ID" onChange={(e) => setDeletePetID(e.target.value)} required />
//           <input type="text" placeholder="UserID" onChange={(e) => setDeleteUserID(e.target.value)} required />
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PetRegistrationForm;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaPaw, FaEdit, FaTrash } from 'react-icons/fa';
// import './PetRegistrationForm.css';

// function PetRegistrationForm() {
//   const [values, setValues] = useState({
//     userID: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//     petSkinColor: '',
//     petGender: '',
//     petHeight: '',
//     petWeight: '',
//     petImage: null
//   });

//   const [updateValues, setUpdateValues] = useState({
//     petID: '',
//     userID: '',
//     petName: '',
//     petBreed: '',
//     petAge: '',
//     petSkinColor: '',
//     petGender: '',
//     petHeight: '',
//     petWeight: '',
//     petImage: null
//   });

//   const [deletePetID, setDeletePetID] = useState('');
//   const [deleteUserID, setDeleteUserID] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('userID', values.userID);
//     formData.append('petName', values.petName);
//     formData.append('petBreed', values.petBreed);
//     formData.append('petAge', values.petAge);
//     formData.append('petSkinColor', values.petSkinColor);
//     formData.append('petHeight', values.petHeight);
//     formData.append('petWeight', values.petWeight);
//     formData.append('petGender', values.petGender);
//     formData.append('petImage', values.petImage);  // Append the file

//     try {
//       const response = await fetch('http://localhost:8800/api/pet/register', {
//         method: 'POST',
//         body: formData
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet registered successfully' : result.error || 'Failed to register pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('userID', updateValues.userID);
//     formData.append('petName', updateValues.petName);
//     formData.append('petBreed', updateValues.petBreed);
//     formData.append('petAge', updateValues.petAge);
//     formData.append('petHeight', updateValues.petHeight);
//     formData.append('petWeight', updateValues.petWeight);
//     formData.append('petSkinColor', updateValues.petSkinColor);
//     formData.append('petGender', updateValues.petGender);

//     if (updateValues.petImage) {
//       formData.append('petImage', updateValues.petImage);  // Only append if the image is selected
//     }

//     try {
//       const response = await fetch(`http://localhost:8800/api/pet/update/${updateValues.petID}`, {
//         method: 'PUT',
//         body: formData,  // Send the formData, including the file
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet updated successfully' : result.error || 'Failed to update pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleDelete = async (event) => {
//     event.preventDefault();
//     if (!window.confirm('Are you sure you want to delete this pet?')) return;
//     try {
//       const response = await fetch('http://localhost:8800/api/pet/delete', {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           petID: deletePetID,
//           userID: deleteUserID // Send the userID with the delete request
//         })
//       });
//       const result = await response.json();
//       alert(response.ok ? 'Pet deleted successfully' : result.error || 'Failed to delete pet');
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="pet-management">
//       <h1 className="pet-management-title">Pet Management</h1>

//       {/* Register Pet */}
//       <div className="form-section">
//         <h2><FaPaw /> Register Pet</h2>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Pet Name" onChange={(e) => setValues({ ...values, petName: e.target.value })} required />
//           <input type="text" placeholder="Breed" onChange={(e) => setValues({ ...values, petBreed: e.target.value })} required />
//           <input type="number" placeholder="Age (Months)" onChange={(e) => setValues({ ...values, petAge: e.target.value })} required />
//           <input type="text" placeholder="Skin Color" onChange={(e) => setValues({ ...values, petSkinColor: e.target.value })} required />
//           <input type="text" placeholder="Height" onChange={(e) => setValues({ ...values, petHeight: e.target.value })} required />
//           <input type="text" placeholder="Weight" onChange={(e) => setValues({ ...values, petWeight: e.target.value })} required />
//           <input type="file" placeholder="Image" onChange={(e) => setValues({ ...values, petImage: e.target.files[0] })} required />
//           <input type="text" placeholder="UserID" onChange={(e) => setValues({ ...values, userID: e.target.value })} required />
//           <select onChange={(e) => setValues({ ...values, petGender: e.target.value })} required>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <button type="submit">Register</button>
//         </form>
//       </div>

//       {/* Update Pet */}
//       <div className="form-section">
//         <h2><FaEdit /> Update Pet</h2>
//         <form onSubmit={handleUpdate}>
//           <input type="text" placeholder="Pet ID" onChange={(e) => setUpdateValues({ ...updateValues, petID: e.target.value })} required />
//           <input type="text" placeholder="New Name" onChange={(e) => setUpdateValues({ ...updateValues, petName: e.target.value })} />
//           <input type="text" placeholder="New Breed" onChange={(e) => setUpdateValues({ ...updateValues, petBreed: e.target.value })} />
//           <input type="number" placeholder="New Age (Months)" onChange={(e) => setUpdateValues({ ...updateValues, petAge: e.target.value })} />
//           <input type="text" placeholder="New Color" onChange={(e) => setUpdateValues({ ...updateValues, petSkinColor: e.target.value })} />
//           <input type="text" placeholder="New Height" onChange={(e) => setUpdateValues({ ...updateValues, petHeight: e.target.value })} />
//           <input type="text" placeholder="New Weight" onChange={(e) => setUpdateValues({ ...updateValues, petWeight: e.target.value })} />
//           <input type="file" onChange={(e) => setUpdateValues({ ...updateValues, petImage: e.target.files[0] })} />
//           <input type="text" placeholder="UserID" onChange={(e) => setUpdateValues({ ...updateValues, userID: e.target.value })} required />
//           <select onChange={(e) => setUpdateValues({ ...updateValues, petGender: e.target.value })}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//           <button type="submit">Update</button>
//         </form>
//       </div>

//       {/* Delete Pet */}
//       <div className="form-section">
//         <h2><FaTrash /> Delete Pet</h2>
//         <form onSubmit={handleDelete}>
//           <input type="text" placeholder="Pet ID" onChange={(e) => setDeletePetID(e.target.value)} required />
//           <input type="text" placeholder="UserID" onChange={(e) => setDeleteUserID(e.target.value)} required />
//           <button type="submit">Delete</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PetRegistrationForm;


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
