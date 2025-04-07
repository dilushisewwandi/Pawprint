import { db } from "../Connect.js";

// export const registerAdopterAndAdoptPet = (req, res) => {
//     const {adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone, houseHoldComposition, reasonForAdoption, userID, petID} = req.body;

//     console.log("Received data:", req.body);

//     //check if required fields are not null or undefined
//     if (!adoName || !adoNIC || !adoAge || !adoJob || !adoGender || !adoLocation || !adoEmail || !adoPhone || !houseHoldComposition || !reasonForAdoption || !userID || !petID) {
//         return res.status(400).json({ error: "All fields are required and must not be null." });
//     }

//     // Fetch user details from the user table using the provided userID
//     const getUserQuery = "SELECT username, email FROM user WHERE userID = ?";

//     db.query(getUserQuery, [userID], (userErr, userResult) => {
//         if (userErr) {
//             console.error("Database query failed:", userErr);
//             return res.status(500).json({ error: "Internal Server Error", details: userErr });
//         }

//         if (userResult.length === 0) {
//             return res.status(400).json({ error: "This user ID is wrong, not assigned, or does not exist. Please sign up." });
//         }

//         const { username, email } = userResult[0];

//         // Check if the provided name and email match the ones from the user table
//         if (adoName !== username || adoEmail !== email) {
//             return res.status(400).json({ error: "Name or email does not match the user information" });
//         }

//         // Check if the adopter already exists in the adopter table
//         const checkAdopterQuery = "SELECT adoID FROM adopter WHERE userID = ?";

//         db.query(checkAdopterQuery, [userID], (checkErr, checkResult) => {
//             if (checkErr) {
//                 console.error("Error checking adopter:", checkErr);
//                 return res.status(500).json({ error: "Error checking adopter existence." });
//             }

//             let adopterID;

//             if (checkResult.length > 0) {
//                 adopterID = checkResult[0].adoID;
//             } else {
//                 const insertAdopterQuery = `
//                     INSERT INTO adopter(userID, adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone, houseHoldComposition, reasonForAdoption)
//                     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//                 const adopterValues = [userID, adoName, adoNIC, adoAge, adoJob, adoGender, adoLocation, adoEmail, adoPhone, houseHoldComposition, reasonForAdoption];

//                 db.query(insertAdopterQuery, adopterValues, (insertErr, insertResult) => {
//                     if (insertErr) {
//                         console.error('Error inserting adopter data:', insertErr);
//                         return res.status(500).json({ message: 'Failed to insert adopter data' });
//                     }
//                     adopterID = insertResult.insertId;
//                     proceedWithPetAdoption(adopterID);
//                 });
//             }
//             // If the adopter already exists, proceed with pet adoption using existing adoID
//             if (adopterID) proceedWithPetAdoption(adopterID);
//         });

//         //Update pet table with adopter details
//         const proceedWithPetAdoption = (adopterID) => {
//             const updatePetQuery = `UPDATE pet SET adoID = ?, status = 'Requested' WHERE petID = ?`;
//             const petValues = [adopterID, petID];

//             db.query(updatePetQuery, petValues, (updateErr, updateResult) => {
//                 if (updateErr) {
//                     console.error('Error updating pet table:', updateErr);
//                     return res.status(500).json({ message: 'Failed to update pet table' });
//                 }

//                 if (updateResult.affectedRows === 0) {
//                     return res.status(404).json({ error: "Pet not found or already adopted." });
//                 }

//                 return res.status(201).json({ message: "Adoption request sent to the distributor successfully." });
//             });
//         };
//     });
// };

// export const adoptPet = (req, res) => {
//     const {userID, adoID, disID, petID, reasonForAdoption, adoptionDate, adoptionTime} = req.body;

//     console.log("Received data:", req.body);

//     //check if required fields are not null or undefined
//     if (!adoptionDate || !adoptionTime || !userID || !petID) {
//         return res.status(400).json({ error: "All fields are required and must not be null." });
//     }

//     // // Fetch user details from the user table using the provided userID
//     // const getUserQuery = "SELECT email FROM user WHERE userID = ?";

//     // db.query(getUserQuery, [userID], (userErr, userResult) => {
//     //     if (userErr) {
//     //         console.error("Database query failed:", userErr);
//     //         return res.status(500).json({ error: "Internal Server Error", details: userErr });
//     //     }

//     //     if (userResult.length === 0) {
//     //         return res.status(400).json({ error: "This user ID is wrong, not assigned, or does not exist. Please sign up." });
//     //     }

//     //     const { email } = userResult[0];

//     //     // Check if the provided name and email match the ones from the user table
//     //     if (adoEmail !== email) {
//     //         return res.status(400).json({ error: "Email does not match the user information" });
//     //     }

//         // Check if the adopter already exists in the adopter table
//         const checkAdopterQuery = "SELECT adoID FROM adopter WHERE userID = ?";

//         db.query(checkAdopterQuery, [userID], (checkErr, checkResult) => {
//             if (checkErr) {
//                 console.error("Error checking adopter:", checkErr);
//                 return res.status(500).json({ error: "Error checking adopter existence." });
//             }

//             let adopterID;

//             if (checkResult.length > 0) {
//                 adopterID = checkResult[0].adoID;
//             } else {
//                 const insertAdoptionQuery = `
//                     INSERT INTO adoption_requests(userID, petID, reasonForAdoption, adoptionDate, adoptionTime)
//                     VALUES (?, ?, ?, ?, ?)`;

//                 const adoptionValues = [userID, petID, reasonForAdoption, adoptionDate, adoptionTime];

//                 db.query(insertAdoptionQuery, adoptionValues, (insertErr, insertResult) => {
//                     if (insertErr) {
//                         console.error('Error inserting adoption request data:', insertErr);
//                         return res.status(500).json({ message: 'Failed to insert adoption request data' });
//                     }
//                     adopterID = insertResult.insertId;
//                     proceedWithPetAdoption(adopterID);
//                 });
//             }
//             // If the adopter already exists, proceed with pet adoption using existing adoID
//             if (adopterID) proceedWithPetAdoption(adopterID);
//         });

//         //Update pet table with adopter details
//         const proceedWithPetAdoption = (adopterID) => {
//             const updatePetQuery = `UPDATE pet SET adoID = ?, status = 'Pending' WHERE petID = ?`;
//             const petValues = [adopterID, petID];

//             db.query(updatePetQuery, petValues, (updateErr, updateResult) => {
//                 if (updateErr) {
//                     console.error('Error updating pet table:', updateErr);
//                     return res.status(500).json({ message: 'Failed to update pet table' });
//                 }

//                 if (updateResult.affectedRows === 0) {
//                     return res.status(404).json({ error: "Pet not found or already adopted." });
//                 }

//                 return res.status(201).json({ message: "Adoption request sent to the distributor successfully." });
//             });
//         };
    
// };


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
            d.userID = ? AND p.status = 'Pending'
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

// // Register a pet
// export const registerPet = (req, res) => {
//     const { userID, petName, petAge, petHeight, petWeight, petGender, petSkinColor, petBreed } = req.body;
//     const petImage = req.file ? req.file.filename : '';

//     // Check if userID exists in the distributor table and fetch disID
//     const checkDistributorQuery = "SELECT disID FROM distributor WHERE userID = ?";

//     db.query(checkDistributorQuery, [userID], (checkErr, checkResult) => {
//         if (checkErr) {
//             console.error("Error checking distributor by userID:", checkErr);
//             return res.status(500).json({ error: "Internal Server Error", details: checkErr });
//         }

//         if (checkResult.length === 0) {
//             return res.status(400).json({ error: "Distributor not found for the given userID." });
//         }

//         const disID = checkResult[0].disID;
//         const insertPetQuery = `INSERT INTO pet(disID, petName, petAge, petHeight, petWeight, petGender, petSkinColor, petBreed, petImage) 
//         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//         const values = [disID, petName, petAge, petHeight, petWeight, petGender, petSkinColor, petBreed, petImage];

//         db.query(insertPetQuery, values, (err, data) => {
//             if (err) {
//                 console.error("Database query failed:", err);
//                 return res.status(500).json({ error: "Internal Server Error", details: err });
//             }
//             return res.status(201).json("Pet has been registered successfully.");
//         });
//     });
// };

export const registerPet = (req, res) => {
    const { userID, petName, petBreed, petAge, petSkinColor, petHeight, petWeight, petGender} = req.body;
    const petImage = req.file ? req.file.filename : '';

    // Validate that all required fields are provided
    if (!userID || !petName || !petBreed || !petAge || !petSkinColor || !petHeight || !petWeight || !petGender || !petImage) {
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
            return res.status(201).json("Pet has been registered successfully.");
        });
    });
};

// // Update Pet by PetID
export const updatePet = (req, res) => {
    const { petID, userID, petName, petBreed, petAge, petHeight, petWeight, petSkinColor, petGender} = req.body;
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



// Delete pet function
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

