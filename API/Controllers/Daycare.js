import { db } from '../Connect.js';
import dotenv from 'dotenv';
dotenv.config();

//Register a daycare
export const registerDaycare = (req, res) => {
    const { userID, dcName, dcLocation, dcPhone, dcEmail, openDays, openTimes, noOfStaffMembers, amenitiesOffered, safetyFeatures } = req.body;

    // Check if the user exists and if the email matches
    const checkUserQuery = "SELECT * FROM user WHERE userID = ? AND email = ?";
    db.query(checkUserQuery, [userID, dcEmail], (err, data) => {
        if (err) {
            console.error('Error checking if user exists:', err);
            return res.status(500).json({ message: 'Internal server error while checking user' });
        }

        if (data.length === 0) {
            return res.status(400).json({ message: 'User does not exist or email does not match' });
        }

        // Check if the user already has a registered daycare
        const checkUserDaycare = "SELECT * FROM daycare WHERE userID = ?";
        db.query(checkUserDaycare, [userID], (err, data) => {
            if (err) {
                console.error('Error checking if user already has a daycare:', err);
                return res.status(500).json({ message: 'Internal server error while checking daycare' });
            }

            if (data.length > 0) {
                return res.status(400).json({ message: 'This user already has a registered daycare' });
            }

            // If the user does not already have a daycare, proceed to insert the daycare
            const q = "INSERT INTO daycare(`userID`, `dcName`,`dcLocation`,`dcPhone`,`dcEmail`,`openDays`,`openTimes`,`noOfStaffMembers`,`amenitiesOffered`,`safetyFeatures`) VALUES (?)";
            const values = [userID, dcName, dcLocation, dcPhone, dcEmail, openDays, openTimes, noOfStaffMembers, amenitiesOffered, safetyFeatures];

            db.query(q, [values], (err, data) => {
                if (err) {
                    console.error('Error inserting daycare:', err);
                    return res.status(500).json({ message: 'Error inserting daycare', error: err });
                }
                return res.status(201).json("Your daycare registered successfully.");
            });
        });
    });
};



// Update a daycare
export const updateDaycare = (req, res) => {
    const { userID } = req.params;
    const { dcName, dcLocation, dcPhone, dcEmail, openDays, openTimes, noOfStaffMembers, amenitiesOffered, safetyFeatures} = req.body;

    console.log("Updating daycare with userID:", userID);

    // Validate userID with email
    const checkQuery = "SELECT * FROM daycare WHERE userID = ? AND dcEmail = ?";
    db.query(checkQuery, [userID, dcEmail], (err, data) => {
        if (err) {
            console.error("Error checking daycare:", err);
            return res.status(500).json({ message: "Internal server error" });
        }

        if (data.length === 0) {
            return res.status(403).json({ error: "Unauthorized: Email does not match userID" });
        }

        // Proceed with updating daycare
        const updateQuery = "UPDATE daycare SET dcName=?, dcLocation=?, dcPhone=?, dcEmail=?, openDays=?, openTimes=?, noOfStaffMembers=?, amenitiesOffered=?, safetyFeatures=? WHERE userID=?";
        const values = [dcName, dcLocation, dcPhone, dcEmail, openDays, openTimes, noOfStaffMembers, amenitiesOffered, safetyFeatures, userID];

        db.query(updateQuery, values, (err, result) => {
            if (err) {
                console.error("Error updating daycare:", err);
                return res.status(500).json({ message: "Error updating daycare" });
            }
            return res.status(200).json({ message: "Daycare updated successfully" });
        });
    });
};

// Delete a daycare with userID and email validation
export const deleteDaycare = (req, res) => {
    const { userID, dcEmail } = req.body;  // Get userID and email from request body

    if (!userID || !dcEmail) {
        return res.status(400).json({ message: 'UserID and email are required' });
    }

    // Check if daycare exists and matches the given email
    const checkQuery = "SELECT * FROM daycare WHERE userID = ? AND dcEmail = ?";
    db.query(checkQuery, [userID, dcEmail], (err, data) => {
        if (err) {
            console.error('Error checking daycare:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (data.length === 0) {
            return res.status(404).json({ message: 'No daycare found with the provided UserID and email' });
        }

        // Delete daycare
        const deleteQuery = "DELETE FROM daycare WHERE userID = ? AND dcEmail = ?";
        db.query(deleteQuery, [userID, dcEmail], (err, result) => {
            if (err) {
                console.error('Error deleting daycare:', err);
                return res.status(500).json({ message: 'Error deleting daycare' });
            }
            return res.status(200).json({ message: 'Daycare deleted successfully' });
        });
    });
};
//book daycare
export const bookDaycare = (req, res) => {
    const { userID, name, phone, email, petName, petBreed, bookingDate, bookingTime, dcID } = req.body;

    // Fetch disID from the distributor table based on userID
    const findDistributorQuery = "SELECT disID FROM distributor WHERE userID = ?";
    db.query(findDistributorQuery, [userID], (disErr, disResults) => {
        if (disErr) {
            console.error('Error finding distributor:', disErr);
            return res.status(500).json({ message: 'Error finding distributor' });
        }

        if (disResults.length === 0) {
            return res.status(404).json({ message: 'Wrong userID or distributor not found' });
        }

        const disID = disResults[0].disID;

        // Validate userID and email match in the user table
        const findUserQuery = "SELECT * FROM user WHERE userID = ? AND email = ?";
        db.query(findUserQuery, [userID, email], (userErr, userResults) => {
            if (userErr) {
                console.error('Error finding user:', userErr);
                return res.status(500).json({ message: 'Error finding user' });
            }

            if (userResults.length === 0) {
                return res.status(404).json({ message: 'Wrong userID or email does not match' });
            }

            // Find the pet using the provided details
            const findPetQuery = "SELECT petID FROM pet WHERE petName = ? AND disID = ? AND petBreed = ?";
            db.query(findPetQuery, [petName, disID, petBreed], (findErr, findResults) => {
                if (findErr) {
                    console.error('Error finding pet:', findErr);
                    return res.status(500).json({ message: 'Error finding pet' });
                }

                if (findResults.length === 0) {
                    return res.status(404).json({ message: 'Pet not found' });
                }

                const petID = findResults[0].petID;

                // Insert booking data into daycare_booking table
                const insertBookingQuery = `INSERT INTO daycare_booking (disID, dcID, petID, username, phone, email, bookingDate, bookingTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                db.query(insertBookingQuery, [disID, dcID, petID, name, phone, email, bookingDate, bookingTime], (insertErr) => {
                    if (insertErr) {
                        console.error('Error inserting booking data:', insertErr);
                        return res.status(500).json({ message: 'Failed to insert booking data' });
                    }

                    return res.status(200).json({ message: 'Booking successful' });
                });
            });
        });
    });
};

// //find a daycare booking by userID
// export const findDaycareBookingsByUserID = (req, res) => {
//     const { userID } = req.params;

//     const findBookingQuery = "SELECT dcID FROM daycare WHERE userID = ?";
//     db.query(findBookingQuery, [userID], (bookingErr, bookingResults) => {
//         if (bookingErr) {
//             console.error('Error finding daycare:', bookingErr);
//             return res.status(500).json({ message: 'Database query failed when finding daycare.' });
//         }
//         if (bookingResults.length === 0) {
//             return res.status(404).json({ message: 'Daycare not found for this user.' });
//         }

//         const dcID = bookingResults[0].dcID;

//         const findBookingQuery = "SELECT * FROM daycare_booking WHERE dcID = ?";
//         db.query(findBookingQuery, [dcID], (bookingErr, bookingResults) => {
//             if (bookingErr) {
//                 console.error('Error finding bookings:', bookingErr);
//                 return res.status(500).json({ message: 'Database query failed when finding bookings.' });
//             }

//             if (bookingResults.length === 0) {
//                 return res.status(404).json({ message: 'No bookings found for this daycare.' });
//             }
//             res.status(200).json(bookingResults);
//         });
//     });
// };

export const findDaycareBookingsByUserID = (req, res) => {
    const { userID } = req.params;

    // Find daycare ID for the given user
    const findDaycareQuery = "SELECT dcID FROM daycare WHERE userID = ?";
    db.query(findDaycareQuery, [userID], (bookingErr, bookingResults) => {
        if (bookingErr) {
            console.error('Error finding daycare:', bookingErr);
            return res.status(500).json({ message: 'Database query failed when finding daycare.' });
        }
        if (bookingResults.length === 0) {
            return res.status(404).json({ message: 'Daycare not found for this user.' });
        }

        const dcID = bookingResults[0].dcID;

        // Find bookings and include pet name, breed, and age by joining the pets table
        const findBookingQuery = `
            SELECT 
                db.bookingID,
                db.bookingDate,
                db.bookingTime,
                p.petName,
                p.petBreed,
                p.petAge,
                db.username,
                db.phone,
                db.email
            FROM daycare_booking AS db
            JOIN pet AS p ON db.petID = p.petID
            JOIN user AS u ON db.disID = u.userID  -- Changed from db.userID to db.disID
            WHERE db.dcID = ? AND db.status = 'Pending'`;

        db.query(findBookingQuery, [dcID], (bookingErr, bookingResults) => {
            if (bookingErr) {
                console.error('Error finding bookings:', bookingErr);
                return res.status(500).json({ message: 'Database query failed when finding bookings.' });
            }

            if (bookingResults.length === 0) {
                return res.status(404).json({ message: 'No bookings found for this daycare.' });
            }

            res.status(200).json(bookingResults);
        });
    });
};

//view daycare schedules by userID
export const viewDaycareScheduleByUserID = (req, res) => {
    const { userID } = req.params;

    const findDaycareQuery = "SELECT dcID FROM daycare WHERE userID = ?";
    db.query(findDaycareQuery, [userID], (daycareErr, daycareResults) => {
        if (daycareErr) {
            console.error('Error finding daycare:', daycareErr);
            return res.status(500).json({ message: 'Database query failed when finding daycare.' });
        }
        if (daycareResults.length === 0) {
            return res.status(404).json({ message: 'Daycare not found for this user.' });
        }

        const dcID = daycareResults[0].dcID;

        const findBookingQuery = "SELECT bookingDate, bookingTime FROM daycare_booking WHERE dcID = ?";
        db.query(findBookingQuery, [dcID], (bookingErr, bookingResults) => {
            if (bookingErr) {
                console.error('Error finding bookings:', bookingErr);
                return res.status(500).json({ message: 'Database query failed when finding bookings.' });
            }

            if (bookingResults.length === 0) {
                return res.status(404).json({ message: 'No bookings found for this daycare.' });
            }
            res.status(200).json(bookingResults);
        });
    });
};

//get all daycares
export const getAllDaycare = (req, res) => {
    const q = "SELECT * FROM daycare";
    db.query(q, (err, data) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json(err);
        }
        console.log('Daycare data from database:', data);
        return res.status(200).json(data);
    });
};


// export const approveBookingRequest = async (req, res) => {
//     const { dcID } = req.body;
    
//     if (!dcID) {
//         return res.status(400).json({ error: 'Daycare ID is required' });
//     }
    
//     try {
//         // Update pet status to 'adopted'
//         //db.query("UPDATE pet SET status = 'Adopted' WHERE petID = ?", [petID]);

//         db.query("UPDATE daycare_booking SET status = 'Approved' WHERE dcID = ?", [dcID]);
        
//         // Remove the request from adoption_requests table
//         // db.query("DELETE FROM adoption_requests WHERE petID = ?", [petID]);
        
//         res.status(200).json({ message: 'Booking request approved successfully' });
//     } catch (error) {
//         console.error('Error approving booking request:', error);
//         res.status(500).json({ error: 'Failed to approve booking request' });
//     }
// };

// Approve a daycare booking
export const approveBookingRequest = async (req, res) => {
    const { bookingID } = req.body;

    if (!bookingID) {
        return res.status(400).json({ error: "Booking ID is required" });
    }

    try {
        const query = "UPDATE daycare_booking SET status = 'Approved' WHERE bookingID = ?";
        db.query(query, [bookingID], (err, result) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ error: "Failed to approve booking request" });
            }
            res.status(200).json({ message: "Booking request approved successfully" });
        });
    } catch (error) {
        console.error("Error approving booking request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Reject a daycare booking
export const rejectBookingRequest = async (req, res) => {
    const { bookingID } = req.body;

    if (!bookingID) {
        return res.status(400).json({ error: "Booking ID is required" });
    }

    try {
        const query = "UPDATE daycare_booking SET status = 'Rejected' WHERE bookingID = ?";
        db.query(query, [bookingID], (err, result) => {
            if (err) {
                console.error("Database Error:", err);
                return res.status(500).json({ error: "Failed to reject booking request" });
            }
            res.status(200).json({ message: "Booking request rejected successfully" });
        });
    } catch (error) {
        console.error("Error rejecting booking request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};