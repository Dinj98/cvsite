const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3010;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "dean", // Replace with your MySQL username
  password: "deanj", // Replace with your MySQL password
  database: "cevedb", // Replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Create the users table
const createUsersTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error creating users table:", error);
    } else {
      console.log("Users table created or already exists.");
    }
  });
};

// Create the skills table
const createSkillsTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS skills (
      id INT AUTO_INCREMENT PRIMARY KEY,
      lang VARCHAR(255) NOT NULL,
      percentage INT NOT NULL,
      senior BOOLEAN NOT NULL,
      imgSkill VARCHAR(255) NOT NULL
    )
  `;

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error creating skills table:", error);
    } else {
      console.log("Skills table created or already exists.");
    }
  });
};

// Call the functions to create the tables
createUsersTable();
createSkillsTable();

// Signup route
app.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if user already exists
    connection.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Server error" });
        }

        if (results.length > 0) {
          return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user into database
        connection.query(
          "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
          [username, email, hashedPassword],
          (error, results) => {
            if (error) {
              console.error(error);
              return res.status(500).json({ message: "Server error" });
            }
            res.status(201).json({ message: "User created" });
          }
        );
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  connection.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      const user = results[0];

      // Check password
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Generate JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        "your_jwt_secret",
        { expiresIn: "1h" }
      );

      res.json({ message: "Login successful", token });
    }
  );
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ error: "No token provided" });

  jwt.verify(token, "your_jwt_secret", (err, decoded) => {
    if (err) return res.status(401).json({ error: "Unauthorized" });
    req.userId = decoded.id;
    next();
  });
};

// Protected route example
app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.userId });
});

// Route to get skills
app.get("/skills", (req, res) => {
  const query = "SELECT * FROM skills";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error fetching skills" });
    }
    res.json(results);
  });
});

// Route to add skills (now protected)
app.post("/skills", verifyToken, (req, res) => {
  const skills = req.body.skills; // Expecting an array of skills
  const query =
    "INSERT INTO skills (lang, percentage, senior, imgSkill) VALUES ?";
  const values = skills.map((skill) => [
    skill.lang,
    skill.percentage,
    skill.senior,
    skill.imgSkill,
  ]);

  connection.query(query, [values], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error inserting skills" });
    }
    res.status(201).json({ message: "Skills added successfully", results });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
