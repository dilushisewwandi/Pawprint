import { db } from "../Connect.js";


//Register a pet
export const registerPet = (req, res) => {
    const { petID, userID, petName, petBreed, petAge, petSkinColor, petHeight, petWeight, petGender} = req.body;
    const petImage = req.file ? req.file.filename : '';

    // Validate that all required fields are provided
    if (!userID || !petName || !petBreed || !petAge || !petSkinColor || !petHeight || !petWeight || !petGender ) {
        return res.status(400).json({ error: "All fields must be provided." });
    }

    // Fetch distributor ID (disID) based on the userID
    const getDisIDQuery = 'SELECT disID FROM distributor WHERE userID = ?';
    db.query(getDisIDQuery, [userID], (err, result) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (result.length === 0) {
            return res.status(400).json({ error: "No distributor found for the given userID" });
        }

        const disID = result[0].disID;

        // Insert the pet into the database
        const insertPetQuery = `
            INSERT INTO pet (disID, petName, petBreed, petAge, petHeight, petWeight, petSkinColor, petGender, petImage) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const petValues = [disID, petName, petBreed, petAge, petHeight, petWeight, petSkinColor, petGender, petImage];

        db.query(insertPetQuery, petValues, (err, data) => {
            if (err) {
                console.error("Database query failed:", err);
                return res.status(500).json({ error: "Internal Server Error", details: err });
                
            }
            db.query("UPDATE pet SET status = 'Available' WHERE petID = ?", [petID]);
            return res.status(201).json("Pet has been registered successfully.");
        });
    });
};

//Update Pet by PetID
export const updatePet = (req, res) => {
    const petID = req.params.petID;
    const {userID, petName, petBreed, petAge, petHeight, petWeight, petSkinColor, petGender} = req.body;
    const petImage = req.file ? req.file.filename : null;

    // Fetch distributor ID (disID) based on the userID
    const getDisIDQuery = 'SELECT disID FROM distributor WHERE userID = ?';
    db.query(getDisIDQuery, [userID], (err, result) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (result.length === 0) {
            return res.status(400).json({ error: "No distributor found for the given userID" });
        }

        const disID = result[0].disID;

        // Update the pet details based on petID
        const updatePetQuery = `
            UPDATE pet SET 
            disID = ?, 
            petName = ?, 
            petBreed = ?, 
            petAge = ?, 
            petHeight = ?,
            petWeight = ?,
            petSkinColor = ?, 
            petGender = ?, 
            petImage = ?
            WHERE petID = ?`;
        const petValues = [disID, petName, petBreed, petAge, petHeight, petWeight, petSkinColor, petGender, petImage, petID];

        db.query(updatePetQuery, petValues, (err, data) => {
            if (err) {
                console.error("Database query failed:", err);
                return res.status(500).json({ error: "Internal Server Error", details: err });
            }

            if (data.affectedRows === 0) {
                return res.status(404).json({ error: "Pet not found" });
            }

            return res.status(200).json("Pet has been updated successfully.");
        });
    });
};


// Delete a pet 
export const deletePet = (req, res) => {
    const { petID, userID } = req.body;

    console.log("Received userID:", userID); // Debugging line to check userID

    // Query to get distributor ID (disID) based on userID
    const getDisIDQuery = 'SELECT disID FROM distributor WHERE userID = ?';
    db.query(getDisIDQuery, [userID], (err, result) => {
        if (err) {
            console.error("Database query failed:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (result.length === 0) {
            return res.status(400).json({ error: "No distributor found for the given userID" });
        }

        const disID = result[0].disID;

        // Query to delete the pet based on petID and disID
        const deletePetQuery = 'DELETE FROM pet WHERE petID = ? AND disID = ?';
        db.query(deletePetQuery, [petID, disID], (err, data) => {
            if (err) {
                console.error("Database query failed:", err);
                return res.status(500).json({ error: "Internal Server Error", details: err });
            }

            if (data.affectedRows === 0) {
                return res.status(404).json({ error: "Pet not found or not associated with the distributor" });
            }

            return res.status(200).json("Pet has been deleted successfully.");
        });
    });
};


//Adopt a pet
export const adoptPet = (req, res) => {
    const { adoptionDate, adoptionTime, petID, reasonForAdoption, adoName, adoEmail, userID } = req.body;

    if (!userID || !adoEmail || !petID) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    // Validate user and fetch adoID
    const validateUserQuery = "SELECT adoID FROM adopter WHERE userID = ?";
    db.query(validateUserQuery, [userID], (userErr, userResults) => {
        if (userErr) {
            console.error("Error validating user:", userErr);
            return res.status(500).json({ message: "Database error during user validation." });
        }

        if (userResults.length === 0) {
            return res.status(404).json({ message: "Adopter not found for this user." });
        }

        const adoID = userResults[0].adoID;

        // Fetch distributor ID from pet table
        const fetchDistributorQuery = "SELECT disID FROM pet WHERE petID = ?";
        db.query(fetchDistributorQuery, [petID], (distributorErr, distributorResults) => {
            if (distributorErr) {
                console.error("Error fetching distributor:", distributorErr);
                return res.status(500).json({ message: "Database error when fetching distributor." });
            }

            if (distributorResults.length === 0) {
                return res.status(404).json({ message: "Pet not found or distributor not assigned." });
            }

            const disID = distributorResults[0].disID;

            // Insert adoption request into the database
            const insertAdoptionQuery = `
                INSERT INTO adoption_requests (adoptionDate, adoptionTime, disID, petID, reasonForAdoption, adoName, adoEmail, adoID)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

            db.query(insertAdoptionQuery, [adoptionDate, adoptionTime, disID, petID, reasonForAdoption, adoName, adoEmail, adoID], (insertErr) => {
                if (insertErr) {
                    console.error("Error inserting adoption request:", insertErr);
                    return res.status(500).json({ message: "Database error while inserting adoption request." });
                }

                // Update pet status to "Pending"
                const updatePetStatusQuery = "UPDATE pet SET status = 'Pending' WHERE petID = ?";
                db.query(updatePetStatusQuery, [petID], (updateErr) => {
                    if (updateErr) {
                        console.error("Error updating pet status:", updateErr);
                        return res.status(500).json({ message: "Database error while updating pet status." });
                    }

                    res.status(200).json({ message: "Adoption request submitted successfully." });
                });
            });
        });
    });
};


// Get adoption requests for a distributor based on their userID
export const getAdoptionRequestsByDistributor = (req, res) => {
    const { userID } = req.params;

    // Check if userID is provided
    if (!userID) {
        return res.status(400).json({ error: "Distributor userID is required." });
    }

    // Get adoption requests where the distributor's pets have been requested
    const adoptionRequestsQuery = `
        SELECT 
            p.petID, p.petName, p.petBreed,
            a.adoID, a.adoName, a.adoEmail, a.adoPhone, a.adoLocation,
            ar.reasonForAdoption, ar.adoptionDate, ar.adoptionTime
        FROM 
            pet p
        JOIN 
            adoption_requests ar ON p.petID = ar.petID
        JOIN 
            adopter a ON ar.adoID = a.adoID
        JOIN 
            distributor d ON p.disID = d.disID
        WHERE 
            d.userID = ? AND ar.status = 'Pending'
    `;

    db.query(adoptionRequestsQuery, [userID], (err, results) => {
        if (err) {
            console.error("Error fetching adoption requests:", err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (results.length === 0) {
            return res.status(404).json({ message: "No adoption requests found for this distributor." });
        }

        return res.status(200).json({ adoptionRequests: results });
    });
};


//get pets by distributor id
export const getPetsByDistributor = (req, res) => {
    const disID = req.params.id;

    const q = "SELECT * FROM pet WHERE disID = ?";
    db.query(q, [disID], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};


// Get all pets
export const getAllPets = (req, res) => {
    const q = "SELECT * FROM pet";
    db.query(q, (err, data) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json(err);
        }
        console.log('Pets data from database:', data);
        return res.status(200).json(data);
    });
};


//Get Pet Profile
export const getPetProfile = (req, res) => {
    const petID = req.params.petID;
    const q = `
        SELECT p.*, 
               d.disName, d.disEmail, d.disPhone, d.disLocation,
               h.healthIssues, h.lastCheckupDate
        FROM pet p
        LEFT JOIN distributor d ON p.disID = d.disID
        LEFT JOIN healthcard h ON p.petID = h.petID
        WHERE p.petID = ?;
    `;
    db.query(q, [petID], (err, data) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (data.length === 0) {
            return res.status(404).json({ message: 'Pet not found' });
        }

        return res.status(200).json(data[0]);
    });
};


// Get all Pet Profiles
export const getAllPetProfiles = (req, res) => {
    const q = `
        SELECT p.*, 
               d.disName, d.disEmail, d.disPhone, d.disLocation,
               h.healthIssues, h.lastCheckupDate,
               v.vName, v.vDate, v.vStatus
        FROM pet p
        LEFT JOIN distributor d ON p.disID = d.disID
        LEFT JOIN healthcard h ON p.petID = h.petID
        LEFT JOIN healthcard_vaccine hv ON h.cardID = hv.cardID
        LEFT JOIN vaccine v ON hv.vID = v.vID;
    `;
    
    db.query(q, (err, data) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        return res.status(200).json(data);
    });
};


// Get Health Profile for a specific Pet
export const getHealthProfile = (req, res) => {
    const { petID } = req.params;
    
    const q = `
        SELECT h.cardID, h.healthIssues, h.lastCheckupDate,
            v.vName, v.vDate, v.vDose, v.vStatus, v.dueDateForNext,
            vet.vetName, vet.vetSpecialization
        FROM healthcard h
        LEFT JOIN healthcard_vaccine hv ON h.cardID = hv.cardID
        LEFT JOIN vaccine v ON hv.vID = v.vID
        LEFT JOIN healthcard_veterinarian hvv ON h.cardID = hvv.cardID  -- Join healthcard_veterinarian
        LEFT JOIN veterinarian vet ON hvv.vetID = vet.vetID  -- Join veterinarian
        WHERE h.petID = ?;

            `;

    db.query(q, [petID], (err, data) => {
        if (err) {
            console.error('Database query error:', err);
            return res.status(500).json({ error: "Internal Server Error", details: err });
        }

        if (data.length === 0) {
            return res.status(200).json(null); // No health profile found
        }

        return res.status(200).json(data[0]);
    });
};

