import { db } from "../Connect.js";

//Register distributor
export const registerDistributor = (req, res) => {
    const { disName, disEmail, disPhone, disLocation, userID } = req.body;

    console.log("Received data:", req.body);

    // Fetch user details from the user table using the provided userID
    const getUserQuery = "SELECT username, email FROM user WHERE userID = ?";
    
    db.query(getUserQuery, [userID], (userErr, userResult) => {
        if (userErr) {
            console.error("Database query failed:", userErr);
            return res.status(500).json({ error: "Internal Server Error", details: userErr });
        }

        if (userResult.length === 0) {
            return res.status(400).json({ error: "This user ID is wrong, not assigned, or does not exist. Please sign up." });
        }

        const { username, email } = userResult[0];

        // Check if the provided name and email match the ones from the user table
        if (disName !== username || disEmail !== email) {
            return res.status(400).json({ error: "Name or email does not match the user information" });
        }

        // Check if distributor with the same userID already exists
        const checkQuery = "SELECT * FROM distributor WHERE userID = ?";
        db.query(checkQuery, [userID], (checkErr, checkResult) => {
            if (checkErr) {
                console.error("Database query failed:", checkErr);
                return res.status(500).json({ error: "Internal Server Error", details: checkErr });
            }

            // Distributor with the same userID already exists
            if (checkResult.length > 0) {
                return res.status(200).json({
                    message: "You are already registered.",
                });
            }

            // Proceed with insertion if userID does not exist in the distributor table
            const insertQuery = "INSERT INTO distributor(disName, disEmail, disPhone, disLocation, userID) VALUES (?)";
            const values = [disName, disEmail, disPhone, disLocation, userID];

            db.query(insertQuery, [values], (insertErr, data) => {
                if (insertErr) {
                    console.error("Database query failed:", insertErr);
                    return res.status(500).json({ error: "Internal Server Error", details: insertErr });
                }
                return res.status(201).json({ message: "Distributor has been registered successfully." });
            });
        });
    });
};


export const updateDistributor = (req, res) => {
    const { userID } = req.params;
    const { disName, disEmail, disPhone, disLocation} = req.body;
    const email = req.body.email || disEmail;

    console.log("Received update request:", req.body);

    // Validate userID with email
    const checkQuery = "SELECT * FROM distributor WHERE userID = ? AND disEmail = ?";
    db.query(checkQuery, [userID, email], (checkErr, checkResult) => {
        if (checkErr) {
            console.error("Database query failed:", checkErr);
            return res.status(500).json({ error: "Internal Server Error", details: checkErr });
        }

        if (checkResult.length === 0) {
            return res.status(403).json({ error: "Unauthorized: Email does not match userID" });
        }

        // Proceed with updating distributor details
        const updateQuery = "UPDATE distributor SET disName = ?, disEmail = ?, disPhone = ?, disLocation = ? WHERE userID = ?";
        db.query(updateQuery, [disName, disEmail, disPhone, disLocation, userID], (updateErr, updateResult) => {
            if (updateErr) {
                console.error("Database query failed:", updateErr);
                return res.status(500).json({ error: "Internal Server Error", details: updateErr });
            }

            if (updateResult.affectedRows > 0) {
                return res.status(200).json({ message: "Distributor updated successfully." });
            } else {
                return res.status(400).json({ error: "No changes made. Please check your input." });
            }
        });
    });
};


// Delete distributor using userID and email
export const deleteDistributor = (req, res) => {
    const { userID, email } = req.body; // Get userID and email from request body

    console.log("Received delete request for:", { userID, email });

    // Check if distributor exists by userID and email
    const checkQuery = "SELECT * FROM distributor WHERE userID = ? AND disEmail = ?";
    db.query(checkQuery, [userID, email], (checkErr, checkResult) => {
        if (checkErr) {
            console.error("Database query failed:", checkErr);
            return res.status(500).json({ error: "Internal Server Error", details: checkErr });
        }

        // If distributor doesn't exist, return error
        if (checkResult.length === 0) {
            return res.status(404).json({ error: "Distributor not found or details do not match" });
        }

        // Proceed with deleting distributor
        const deleteQuery = "DELETE FROM distributor WHERE userID = ? AND disEmail = ?";
        db.query(deleteQuery, [userID, email], (deleteErr, deleteResult) => {
            if (deleteErr) {
                console.error("Database query failed:", deleteErr);
                return res.status(500).json({ error: "Internal Server Error", details: deleteErr });
            }

            if (deleteResult.affectedRows > 0) {
                return res.status(200).json({ message: "Distributor deleted successfully." });
            } else {
                return res.status(400).json({ error: "Failed to delete distributor." });
            }
        });
    });
};



// export const approveAdoptionRequest = async (req, res) => {
//     const { petID } = req.body;
    
//     if (!petID) {
//         return res.status(400).json({ error: 'Pet ID is required' });
//     }
    
//     try {
//         // Update pet status to 'adopted'
//         db.query("UPDATE pet SET status = 'Adopted' WHERE petID = ?", [petID]);

//         db.query("UPDATE adoption_requests SET status = 'Approved' WHERE petID = ?", [petID]);
        
//         res.status(200).json({ message: 'Adoption request approved successfully' });
        
//     } catch (error) {
//         console.error('Error approving adoption request:', error);
//         res.status(500).json({ error: 'Failed to approve adoption request' });
//     }
// };

export const approveAdoptionRequest = async (req, res) => {
    const { petID } = req.body;

    if (!petID) {
        return res.status(400).json({ error: 'Pet ID is required' });
    }

    try {
        // Retrieve the adoID from the adoption_requests table
        db.query("SELECT adoID FROM adoption_requests WHERE petID = ?", [petID], (err, results) => {
            if (err) {
                console.error('Error retrieving adopter ID:', err);
                return res.status(500).json({ error: 'Failed to retrieve adopter ID' });
            }

            if (results.length === 0) {
                return res.status(404).json({ error: 'No adoption request found for this pet' });
            }

            const adoID = results[0].adoID;

            // Update pet table with adoID and status = 'Adopted'
            db.query("UPDATE pet SET status = 'Adopted', adoID = ? WHERE petID = ?", [adoID, petID], (err) => {
                if (err) {
                    console.error('Error updating pet status:', err);
                    return res.status(500).json({ error: 'Failed to update pet status' });
                }

                // Update adoption_requests table status to 'Approved'
                db.query("UPDATE adoption_requests SET status = 'Approved' WHERE petID = ?", [petID], (err) => {
                    if (err) {
                        console.error('Error updating adoption request status:', err);
                        return res.status(500).json({ error: 'Failed to update adoption request status' });
                    }

                    res.status(200).json({ message: 'Adoption request approved successfully' });
                });
            });
        });

    } catch (error) {
        console.error('Error approving adoption request:', error);
        res.status(500).json({ error: 'Failed to approve adoption request' });
    }
};


export const rejectAdoptionRequest = async (req, res) => {
    const { petID } = req.body;
    
    if (!petID) {
        return res.status(400).json({ error: 'Pet ID is required' });
    }
    
    try {

        // Update pet status to 'available'
        db.query("UPDATE pet SET status = 'Available' WHERE petID = ?", [petID]);

        db.query("UPDATE adoption_requests SET status = 'Rejected' WHERE petID = ?", [petID]);

        // Remove the request from adoption_requests table
        // db.query("DELETE FROM adoption_requests WHERE petID = ?", [petID]);
        
        res.status(200).json({ message: 'Adoption request rejected successfully' });
    } catch (error) {
        console.error('Error rejecting adoption request:', error);
        res.status(500).json({ error: 'Failed to reject adoption request' });
    }
};

export const trackVetAppointmentRequests = (req, res) => {
    const { userID } = req.params;

    if (!userID) {
        return res.status(400).json({ message: "User ID is required." });
    }

    // Get distributor ID from user ID
    const getDisIDQuery = `SELECT disID FROM distributor WHERE userID = ?`;
    db.query(getDisIDQuery, [userID], (err, disResult) => {
        if (err) {
            console.error("Error fetching distributor ID:", err);
            return res.status(500).json({ message: "Database error while fetching distributor ID." });
        }

        if (disResult.length === 0) {
            return res.status(404).json({ message: "No distributor found for this user." });
        }

        const disID = disResult[0].disID;

        // Fetch vet appointment requests for the distributor's pets
        const query = `
            SELECT 
                va.appointmentID, 
                p.petID, 
                p.petName, 
                v.vetName, 
                v.vetPhone, 
                v.vetEmail, 
                va.status
            FROM vet_appointment va
            JOIN pet p ON va.petID = p.petID
            JOIN veterinarian v ON va.vetID = v.vetID
            WHERE p.disID = ? 
            ORDER BY va.appointmentID DESC;
        `;

        db.query(query, [disID], (err, results) => {
            if (err) {
                console.error("Error fetching vet appointment requests:", err);
                return res.status(500).json({ message: "Database error while fetching vet appointment requests." });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "No vet appointment requests found for this user." });
            }

            return res.status(200).json({ vetAppointmentRequests: results });
        });
    });
};

export const trackDaycareBookingRequests = (req, res) => {
    const { userID } = req.params;

    if (!userID) {
        return res.status(400).json({ message: "User ID is required." });
    }

    const getDisIDQuery = `SELECT disID FROM distributor WHERE userID = ?`;
    db.query(getDisIDQuery, [userID], (err, disResult) => {
        if (err) {
            console.error("Error fetching distributor ID:", err);
            return res.status(500).json({ message: "Database error while fetching distributor ID." });
        }

        if (disResult.length === 0) {
            return res.status(404).json({ message: "No distributor found for this user." });
        }

        const disID = disResult[0].disID;

        const query = `
            SELECT 
                db.bookingID, p.petID, p.petName, dc.dcName, dc.dcPhone, dc.dcEmail, db.status
            FROM 
                daycare_booking db
            JOIN 
                pet p ON db.petID = p.petID
            JOIN 
                daycare dc ON db.dcID = dc.dcID
            WHERE 
                db.disID = ?  -- Filter by distributor ID
            ORDER BY 
                db.bookingID DESC;
        `;

        db.query(query, [disID], (err, results) => {
            if (err) {
                console.error("Error fetching daycare booking requests:", err);
                return res.status(500).json({ message: "Database error while fetching daycare booking requests." });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "No daycare booking requests found for this user." });
            }

            return res.status(200).json({ bookingRequests: results });
        });
    });
};



// Get daycare booking request details by bookingID
export const getDaycareBookingRequestDetails = (req, res) => {
    const { bookingID } = req.params; // Extract bookingID from request parameters

    if (!bookingID) {
        return res.status(400).json({ message: "Booking ID is required." });
    }

    // Query to fetch daycare booking request details
    const query = `
        SELECT 
            b.bookingID, b.bookingDate, b.bookingTime, 
            p.petID, p.petName, 
            d.dcName, d.dcPhone, d.dcEmail, 
            b.status
        FROM 
            daycare_booking b
        JOIN 
            pet p ON b.petID = p.petID
        JOIN 
            daycare d ON b.dcID = d.dcID
        WHERE 
            b.bookingID = ?;
    `;

    db.query(query, [bookingID], (err, result) => {
        if (err) {
            console.error("Error fetching daycare booking request details:", err);
            return res.status(500).json({ message: "Database error while fetching daycare booking request details." });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "No daycare booking request found for this ID." });
        }

        return res.status(200).json(result[0]); // Send the first result as response
    });
};

// Get vet appointment request details by appointmentID
export const getVetAppointmentRequestDetails = (req, res) => {
    const { appointmentID } = req.params; // Extract appointmentID from request parameters

    if (!appointmentID) {
        return res.status(400).json({ message: "Appointment ID is required." });
    }

    // Query to fetch vet appointment request details
    const query = `
        SELECT 
            a.appointmentID, p.petID, p.petName, v.vetName, v.vetPhone, v.vetEmail, a.status
        FROM 
            vet_appointment a
        JOIN 
            pet p ON a.petID = p.petID
        JOIN 
            veterinarian v ON a.vetID = v.vetID
        WHERE 
            a.appointmentID = ?;
    `;

    db.query(query, [appointmentID], (err, result) => {
        if (err) {
            console.error("Error fetching vet appointment request details:", err);
            return res.status(500).json({ message: "Database error while fetching appointment request details." });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "No appointment request found for this ID." });
        }

        return res.status(200).json(result[0]); // Send the first result as response
    });
};


export const trackPetsByUser = (req, res) => {
    const { userID } = req.params;

    if (!userID) {
        return res.status(400).json({ message: "User ID is required." });
    }

    // Query to get the distributor ID from the userID
    const getDisIDQuery = "SELECT disID FROM distributor WHERE userID = ?";
    db.query(getDisIDQuery, [userID], (err, disResult) => {
        if (err) {
            console.error("Error fetching distributor ID:", err);
            return res.status(500).json({ message: "Database error while fetching distributor ID." });
        }

        if (disResult.length === 0) {
            return res.status(404).json({ message: "No distributor found for this user." });
        }

        const disID = disResult[0].disID;

        // Query to get all the pets of the distributor
        const query = `
            SELECT 
                p.petID, 
                p.petName, 
                p.petAge, 
                p.petBreed, 
                p.petGender, 
                p.petWeight, 
                p.petHeight, 
                p.petSkinColor, 
                p.status
            FROM 
                pet p
            WHERE 
                p.disID = ?  -- Filter by distributor ID
            ORDER BY 
                p.petID DESC;
        `;

        db.query(query, [disID], (err, results) => {
            if (err) {
                console.error("Error fetching pet details:", err);
                return res.status(500).json({ message: "Database error while fetching pet details." });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "No pets found for this distributor." });
            }

            return res.status(200).json({ pets: results });
        });
    });
};
