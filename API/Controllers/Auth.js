import { db } from "../Connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();

export const register = (req, res) => {
    const { username, email, password, role } = req.body;

    // Validate required fields
    if (!username || !email || !password || !role) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const q = "SELECT * FROM user WHERE username = ? OR email = ?";
    db.query(q, [username, email], (err, data) => {
        if (err) {
            console.error("Database query error during registration:", err);
            return res.status(500).json({ error: "Internal server error" });
        }

        if (data.length) {
            return res.status(409).json({ error: "User already exists" });
        }

        try {
            // Hash the password safely
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(password, salt);

            const insertQuery = "INSERT INTO user (`username`, `email`, `password`, `role`) VALUES (?, ?, ?, ?)";
            const values = [username, email, hashedPassword, role.toLowerCase()];

            db.query(insertQuery, values, (err, result) => {
                if (err) {
                    console.error("Error inserting user:", err);
                    return res.status(500).json({ error: "Failed to create user" });
                }

                const userId = result.insertId;
                return res.status(201).json({ message: "User created successfully", userId });
            });

        } catch (error) {
            console.error("Error hashing password:", error);
            return res.status(500).json({ error: "Error during password processing" });
        }
    });
};

// User login
export const login = (req, res) => {
    const { userID, password } = req.body;

    const q = "SELECT * FROM user WHERE userID = ?";
    db.query(q, [userID], (err, data) => {
        if (err) {
            console.error("Database query error during login:", err);
            return res.status(500).json("Internal server error: " + err.message);  
        }

        if (data.length === 0) {
            console.error("Login failed: User not found");
            return res.status(404).json("Login failed: User not found");  
        }

        const user = data[0];
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (!isPasswordCorrect) {
            console.error("Login failed: Incorrect password");
            return res.status(400).json("Login failed: Incorrect password");  
        }

        const token = jwt.sign({ id: user.userID, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        console.log("User logged in successfully:", user.userID);
        return res.status(200).json({ token, message: "Login successful!", role: user.role, userId: user.userID });
    });
};
