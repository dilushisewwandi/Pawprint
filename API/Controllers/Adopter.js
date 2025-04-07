import { db } from "../Connect.js";

// Register adopter
export const registerAdopter = (req, res) => {
    const { userID, adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone} = req.body;

    console.log("Received data:", req.body);

    const q = `
        INSERT INTO adopter(userID, adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone) VALUES (?)`;
    const values = [userID, adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone];

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }
        return res.status(201).json("Adopter has been registered successfully.");
    });
};

//update adopter
export const updateAdopter = (req, res) => {
    const { adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone} = req.body;
    const { userID } = req.params;

    console.log("Updating adopter with userID:", userID);
    console.log("New Data:", req.body);

    // Validate userID with email
    const checkQuery = `SELECT * FROM adopter WHERE userID = ? AND adoEmail = ?`;
    db.query(checkQuery, [userID, adoEmail], (err, result) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (result.length === 0) {
            return res.status(403).json({ error: "Unauthorized: Email does not match userID" });
        }

        // Proceed with updating adopter details
        const updateQuery = `
            UPDATE adopter 
            SET adoName = ?, adoNIC = ?, adoAge = ?, adoJob = ?, adoGender = ?, adoLocation = ?, adoEmail = ?, adoPhone = ?
            WHERE userID = ?`;

        const values = [adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone, userID];

        db.query(updateQuery, values, (err, data) => {
            if (err) {
                console.error("Database query failed:", err);
                return res.status(500).json({ error: "Internal Server Error", details: err });
            }
            return res.status(200).json("Adopter details updated successfully.");
        });
    });
};


//delete adopter
export const deleteAdopter = (req, res) => {
    const { userID } = req.params;
    const { adoEmail } = req.body;

    console.log("Attempting to delete adopter with userID:", userID, "and email:", adoEmail);

    // Check if the adopter exists and matches the email
    const checkQuery = `SELECT * FROM adopter WHERE userID = ? AND adoEmail = ?`;

    db.query(checkQuery, [userID, adoEmail], (err, results) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (results.length === 0) {
            return res.status(400).json({ error: "Invalid user ID or email. Deletion not allowed." });
        }

        // Proceed with deletion
        const deleteQuery = `DELETE FROM adopter WHERE userID = ?`;
        db.query(deleteQuery, [userID], (deleteErr) => {
            if (deleteErr) {
                console.error("Failed to delete adopter:", deleteErr);
                return res.status(500).json({ error: "Failed to delete adopter", details: deleteErr });
            }
            return res.status(200).json({ message: "Adopter deleted successfully." });
        });
    });
};



// Get all adoption requests with pet and distributor details
export const trackAdoptionRequests = (req, res) => {
    const { userID } = req.params; // Get userID from request params

    if (!userID) {
        return res.status(400).json({ message: "User ID is required." });
    }

    // Step 1: Get adoID using userID
    const getAdoIDQuery = `SELECT adoID FROM adopter WHERE userID = ?`;
    db.query(getAdoIDQuery, [userID], (err, adoResult) => {
        if (err) {
            console.error("Error fetching adopter ID:", err);
            return res.status(500).json({ message: "Database error while fetching adopter ID." });
        }

        if (adoResult.length === 0) {
            return res.status(404).json({ message: "No adopter found for this user." });
        }

        const adoID = adoResult[0].adoID;

        // Step 2: Fetch adoption requests using adoID
        const query = `
            SELECT 
                ar.requestID, p.petID, p.petName, d.disName, d.disPhone, d.disEmail, p.status
            FROM 
                adoption_requests ar
            JOIN 
                pet p ON ar.petID = p.petID
            JOIN 
                distributor d ON p.disID = d.disID
            WHERE 
                ar.adoID = ?  -- Filter by adopter ID
            ORDER BY 
                ar.requestID DESC;
        `;

        db.query(query, [adoID], (err, results) => {
            if (err) {
                console.error("Error fetching adoption requests:", err);
                return res.status(500).json({ message: "Database error while fetching adoption requests." });
            }

            if (results.length === 0) {
                return res.status(404).json({ message: "No adoption requests found for this user." });
            }

            return res.status(200).json({ adoptionRequests: results });
        });
    });
};


// Get adoption request details by petID
export const getAdoptionRequestDetails = (req, res) => {
    const { petID } = req.params; // Extract petID from request parameters

    if (!petID) {
        return res.status(400).json({ message: "Pet ID is required." });
    }

    // Query to fetch adoption request details
    const query = `
        SELECT 
            p.petID, p.petName, d.disName AS distributorName, d.disPhone, d.disEmail, p.status
        FROM 
            adoption_requests ar
        JOIN 
            pet p ON ar.petID = p.petID
        JOIN 
            distributor d ON p.disID = d.disID
        WHERE 
            p.petID = ?;
    `;

    db.query(query, [petID], (err, result) => {
        if (err) {
            console.error("Error fetching adoption request details:", err);
            return res.status(500).json({ message: "Database error while fetching adoption request details." });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: "No adoption request found for this pet." });
        }

        return res.status(200).json(result[0]); // Send the first result as response
    });
};
