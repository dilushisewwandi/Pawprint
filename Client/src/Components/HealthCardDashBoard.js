// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const HealthCardDashBoard = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="admin-dashboard">
//             <div className="admin-card">
//                 <h3>Health Card Management</h3>
//                 <div>
//                     <button className="admin-button" onClick={() => navigate('/healthcard/add')}>Add Health Card</button>
//                     <button className="admin-button" onClick={() => navigate('/healthcard/update')}>Update Health Card</button>
//                     <button className="admin-button" onClick={() => navigate('/healthcard/delete')}>Delete Health Card</button>
//                     <button className="admin-button" onClick={() => navigate('/healthcard/find')}>Find Health Card</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HealthCardDashBoard;



import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash, FaSearch } from 'react-icons/fa'; // Importing icons

const HealthCardDashBoard = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h2>Health Card Management Dashboard</h2>
                <p>Manage and track health cards for pets seamlessly.</p>
            </div>

            <div className="card-container">
                <div className="admin-card">
                    <h3>Manage Health Cards</h3>
                    <div className="admin-buttons">
                        <button className="admin-button" onClick={() => navigate('/healthcard/add')}>
                            <FaPlus className="button-icon" />
                            Add Health Card
                        </button>
                        <button className="admin-button" onClick={() => navigate('/healthcard/update')}>
                            <FaEdit className="button-icon" />
                            Update Health Card
                        </button>
                        <button className="admin-button" onClick={() => navigate('/healthcard/delete')}>
                            <FaTrash className="button-icon" />
                            Delete Health Card
                        </button>
                        <button className="admin-button" onClick={() => navigate('/healthcard/find')}>
                            <FaSearch className="button-icon" />
                            Find Health Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HealthCardDashBoard;
