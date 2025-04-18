// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './SignupForm.css';

// const SignupForm = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         role: ''
//     });
//     const [userID, setUserId] = useState(null); 
//     const [showSignupForm, setShowSignupForm] = useState(false); 

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8800/api/auth/register', formData);
//             alert(`Registration successful. Your user ID is: ${response.data.userId}`);
//             setUserId(response.data.userId);
//             navigate('/login');
//         } catch (err) {
//             console.error("Error occurred during registration:", err);
//             if (err.response && err.response.data) {
//                 alert(err.response.data);  // This will show the backend error message on the frontend
//             } else {
//                 alert('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="signup-page-container">
//             <div className="signup-hero-section">
//                 <div className="signup-hero-content">
//                     <h1>Welcome to Pawprint</h1>
//                     <p>Join us to find your perfect companion.</p>
//                     {!showSignupForm && (
//                         <button className="get-started-button" onClick={() => setShowSignupForm(true)}>
//                             Get Started
//                         </button>
//                     )}
//                 </div>
//             </div>
            
//             {showSignupForm && (
//                 <div className="signup-form-section">
//                     <div className="signup-card">
//                         <div className="signup-card-body">
//                             <h2 className="form-name">Sign Up</h2>
//                             <form onSubmit={handleSubmit}>
//                                 <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
//                                 <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//                                 <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//                                 <select name="role" onChange={handleChange} required>
//                                     <option value="">Select Role</option>
//                                     <option value="admin">Admin</option>
//                                     <option value="distributor">Distributor</option>
//                                     <option value="adopter">Adopter</option>
//                                     <option value="vet">Vet</option>
//                                     <option value="daycare">Daycare</option>
//                                 </select>
//                                 <button
//                                     type="submit"
//                                     style={{
//                                         width: '100%',
//                                         backgroundColor: '#8ccce2',
//                                         color: 'white',
//                                         border: 'none',
//                                         padding: '12px 20px',
//                                         borderRadius: '4px',
//                                         cursor: 'pointer',
//                                         fontSize: '16px',
//                                         marginLeft: '10px',
//                                         marginRight: '10px',
//                                     }}
//                                     onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2cbbc3'}
//                                 >
//                                     Signup
//                                 </button>
//                             </form>
//                             <p style={{ color: 'black' }}>Already have an account? <Link to='/login'>Login</Link></p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SignupForm;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaUserTag, FaPaw } from 'react-icons/fa';
import axios from 'axios';
import './SignupForm.css';

const SignupForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });
    const [showSignupForm, setShowSignupForm] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8800/api/auth/register', formData);
            alert(`Registration successful. Your user ID is: ${response.data.userId}`);
            navigate('/login');
        } catch (err) {
            console.error("Error during registration:", err);
            alert(err.response?.data || 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-hero">
                <div className="signup-hero-content">
                    <h1><FaPaw className="paw-icon" /> Welcome to Pawprint</h1>
                    <p>Join us to find your perfect companion.</p>
                    {!showSignupForm && (
                        <button className="signup-btn" onClick={() => setShowSignupForm(true)}>
                            Get Started
                        </button>
                    )}
                </div>
            </div>
            
            {showSignupForm && (
                <div className="signup-form-container">
                    <div className="signup-card">
                        <h2>Sign Up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <FaUser className="input-icon" />
                                <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <FaEnvelope className="input-icon" />
                                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <FaLock className="input-icon" />
                                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <FaUserTag className="input-icon" />
                                <select name="role" onChange={handleChange} required>
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="distributor">Distributor</option>
                                    <option value="adopter">Adopter</option>
                                    <option value="vet">Vet</option>
                                    <option value="daycare">Daycare</option>
                                </select>
                            </div>
                            <button type="submit" className="submit-btn">Sign Up</button>
                        </form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignupForm;