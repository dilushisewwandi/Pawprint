// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './MainDashboard.css';

// const MainDashboard = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="admin-dashboard">
           
//             <div className="admin-card">
//                 <h3>Pet Details Management</h3>
//                 <div>
//                     <button className="admin-button" onClick={() => navigate('/petManage/add')}>Add Pet</button>
//                     <button className="admin-button" onClick={() => navigate('/petManage/update')}>Update Pet</button>
//                     <button className="admin-button" onClick={() => navigate('/petManage/delete')}>Delete Pet</button>
//                     <button className="admin-button" onClick={() => navigate('/petManage/find')}>Find Pet</button>
//                 </div>
//             </div>
//             <div className="admin-card">
//                 <h3>Adopter Details Management</h3>
//                 <div>
//                     <button className="admin-button" onClick={() => navigate('/adopter/add')}>Add Adopter</button>
//                     <button className="admin-button" onClick={() => navigate('/adopter/update')}>Update Adopter</button>
//                     <button className="admin-button" onClick={() => navigate('/adopter/delete')}>Delete Adopter</button>
//                     <button className="admin-button" onClick={() => navigate('/adopter/find')}>Find Adopter</button>
//                 </div>
//             </div>
//             <div className="admin-card">
//                 <h3>Distributor Management</h3>
//                 <div>
//                     <button className="admin-button" onClick={() => navigate('/distributorManage/add')}>Add Distributor</button>
//                     <button className="admin-button" onClick={() => navigate('/distributorManage/update')}>Update Distributor</button>
//                     <button className="admin-button" onClick={() => navigate('/distributorManage/delete')}>Delete Distributor</button>
//                     <button className="admin-button" onClick={() => navigate('/distributorManage/find')}>Find Distributor</button>
//                 </div>
//             </div>
//             <div className="admin-card">
//                 <h3>Veterinary Doctor Management</h3>
//                 <div>
//                     <button className="admin-button" onClick={() => navigate('/vet/add')}>Add Vet</button>
//                     <button className="admin-button" onClick={() => navigate('/vet/update')}>Update Vet</button>
//                     <button className="admin-button" onClick={() => navigate('/vet/delete')}>Delete Vet</button>
//                     <button className="admin-button" onClick={() => navigate('/vet/find')}>Find Vet</button>
//                 </div>   
//             </div>
//             <div className="admin-card">
//                 <h3>Daycare Center Management</h3>
//                 <div>
//                     <button className="admin-button" onClick={() => navigate('/daycareManage/add')}>Add Daycare</button>
//                     <button className="admin-button" onClick={() => navigate('/daycareManage/update')}>Update Daycare</button>
//                     <button className="admin-button" onClick={() => navigate('/daycareManage/delete')}>Delete Daycare</button>
//                     <button className="admin-button" onClick={() => navigate('/daycareManage/find')}>Find Daycare</button>
//                 </div>
//             </div>
//             </div>
    
//     );
// };

// export default MainDashboard;
 
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaDog, FaUser, FaStore, FaHospital, FaBusinessTime } from 'react-icons/fa'; // Icons from react-icons
// import './MainDashboard.css';

// const MainDashboard = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="admin-dashboard">
//             <div className="dashboard-header">
//                 <h2>Welcome to Admin Dashboard</h2> {/* Welcome message */}
//             </div>

//             <div className="card-container">
//                 <div className="admin-card">
//                     <h3><FaDog /> Pet Management</h3>
//                     <div className="admin-buttons">
//                         <button className="admin-button" onClick={() => navigate('/petManage/add')}>
//                             <FaDog /> Add Pet
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/petManage/update')}>
//                             <FaDog /> Update Pet
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/petManage/delete')}>
//                             <FaDog /> Delete Pet
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/petManage/find')}>
//                             <FaDog /> Find Pet
//                         </button>
//                     </div>
//                 </div>

//                 <div className="admin-card">
//                     <h3><FaUser /> Adopter Management</h3>
//                     <div className="admin-buttons">
//                         <button className="admin-button" onClick={() => navigate('/adopter/add')}>
//                             <FaUser /> Add Adopter
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/adopter/update')}>
//                             <FaUser /> Update Adopter
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/adopter/delete')}>
//                             <FaUser /> Delete Adopter
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/adopter/find')}>
//                             <FaUser /> Find Adopter
//                         </button>
//                     </div>
//                 </div>

//                 <div className="admin-card">
//                     <h3><FaStore /> Distributor Management</h3>
//                     <div className="admin-buttons">
//                         <button className="admin-button" onClick={() => navigate('/distributorManage/add')}>
//                             <FaStore /> Add Distributor
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/distributorManage/update')}>
//                             <FaStore /> Update Distributor
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/distributorManage/delete')}>
//                             <FaStore /> Delete Distributor
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/distributorManage/find')}>
//                             <FaStore /> Find Distributor
//                         </button>
//                     </div>
//                 </div>

//                 <div className="admin-card">
//                     <h3><FaHospital /> Vet Management</h3>
//                     <div className="admin-buttons">
//                         <button className="admin-button" onClick={() => navigate('/vet/add')}>
//                             <FaHospital /> Add Vet
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/vet/update')}>
//                             <FaHospital /> Update Vet
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/vet/delete')}>
//                             <FaHospital /> Delete Vet
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/vet/find')}>
//                             <FaHospital /> Find Vet
//                         </button>
//                     </div>
//                 </div>

//                 <div className="admin-card">
//                     <h3><FaBusinessTime /> Daycare Management</h3>
//                     <div className="admin-buttons">
//                         <button className="admin-button" onClick={() => navigate('/daycareManage/add')}>
//                             <FaBusinessTime /> Add Daycare
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/daycareManage/update')}>
//                             <FaBusinessTime /> Update Daycare
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/daycareManage/delete')}>
//                             <FaBusinessTime /> Delete Daycare
//                         </button>
//                         <button className="admin-button" onClick={() => navigate('/daycareManage/find')}>
//                             <FaBusinessTime /> Find Daycare
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MainDashboard;




import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaDog, FaUser, FaStore, FaHospital, FaBusinessTime } from 'react-icons/fa'; 
import './MainDashboard.css';

const MainDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="admin-dashboard">
            <div className="dashboard-header">
                <h2>Welcome to Admin Dashboard</h2> {/* Welcome message */}
            </div>

            <div className="card-container">
                <div className="admin-card">
                    <h3><FaDog /> Pet Management</h3>
                    <div className="admin-buttons">
                        <button className="admin-button" onClick={() => navigate('/petManage/add')}>
                            <FaDog /> Add Pet
                        </button>
                        <button className="admin-button" onClick={() => navigate('/petManage/update')}>
                            <FaDog /> Update Pet
                        </button>
                        <button className="admin-button" onClick={() => navigate('/petManage/delete')}>
                            <FaDog /> Delete Pet
                        </button>
                        <button className="admin-button" onClick={() => navigate('/petManage/find')}>
                            <FaDog /> Find Pet
                        </button>
                    </div>
                </div>

                <div className="admin-card">
                    <h3><FaUser /> Adopter Management</h3>
                    <div className="admin-buttons">
                        <button className="admin-button" onClick={() => navigate('/adopter/add')}>
                            <FaUser /> Add Adopter
                        </button>
                        <button className="admin-button" onClick={() => navigate('/adopter/update')}>
                            <FaUser /> Update Adopter
                        </button>
                        <button className="admin-button" onClick={() => navigate('/adopter/delete')}>
                            <FaUser /> Delete Adopter
                        </button>
                        <button className="admin-button" onClick={() => navigate('/adopter/find')}>
                            <FaUser /> Find Adopter
                        </button>
                    </div>
                </div>

                <div className="admin-card">
                    <h3><FaStore /> Distributor Management</h3>
                    <div className="admin-buttons">
                        <button className="admin-button" onClick={() => navigate('/distributorManage/add')}>
                            <FaStore /> Add Distributor
                        </button>
                        <button className="admin-button" onClick={() => navigate('/distributorManage/update')}>
                            <FaStore /> Update Distributor
                        </button>
                        <button className="admin-button" onClick={() => navigate('/distributorManage/delete')}>
                            <FaStore /> Delete Distributor
                        </button>
                        <button className="admin-button" onClick={() => navigate('/distributorManage/find')}>
                            <FaStore /> Find Distributor
                        </button>
                    </div>
                </div>

                <div className="admin-card">
                    <h3><FaHospital /> Vet Management</h3>
                    <div className="admin-buttons">
                        <button className="admin-button" onClick={() => navigate('/vet/add')}>
                            <FaHospital /> Add Vet
                        </button>
                        <button className="admin-button" onClick={() => navigate('/vet/update')}>
                            <FaHospital /> Update Vet
                        </button>
                        <button className="admin-button" onClick={() => navigate('/vet/delete')}>
                            <FaHospital /> Delete Vet
                        </button>
                        <button className="admin-button" onClick={() => navigate('/vet/find')}>
                            <FaHospital /> Find Vet
                        </button>
                    </div>
                </div>

                <div className="admin-card">
                    <h3><FaBusinessTime /> Daycare Management</h3>
                    <div className="admin-buttons">
                        <button className="admin-button" onClick={() => navigate('/daycareManage/add')}>
                            <FaBusinessTime /> Add Daycare
                        </button>
                        <button className="admin-button" onClick={() => navigate('/daycareManage/update')}>
                            <FaBusinessTime /> Update Daycare
                        </button>
                        <button className="admin-button" onClick={() => navigate('/daycareManage/delete')}>
                            <FaBusinessTime /> Delete Daycare
                        </button>
                        <button className="admin-button" onClick={() => navigate('/daycareManage/find')}>
                            <FaBusinessTime /> Find Daycare
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainDashboard;
