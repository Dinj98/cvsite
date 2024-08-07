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

// ... (keep your existing MySQL connection and table creation code)

// Users CRUD
app.get("/users", (req, res) => {
  const query = "SELECT id, username, email FROM users";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error fetching users" });
    }
    res.json(results);
  });
});

app.get("/users/:id", (req, res) => {
  const query = "SELECT id, username, email FROM users WHERE id = ?";
  connection.query(query, [req.params.id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error fetching user" });
    }
    res.json(results[0]);
  });
});

app.put("/users/:id", async (req, res) => {
  const { username, email, password } = req.body;
  let query, params;
  
  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    query = "UPDATE users SET username = ?, email = ?, password = ? WHERE id = ?";
    params = [username, email, hashedPassword, req.params.id];
  } else {
    query = "UPDATE users SET username = ?, email = ? WHERE id = ?";
    params = [username, email, req.params.id];
  }

  connection.query(query, params, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error updating user" });
    }
    res.json({ message: "User updated successfully" });
  });
});

app.delete("/users/:id", (req, res) => {
  const query = "DELETE FROM users WHERE id = ?";
  connection.query(query, [req.params.id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error deleting user" });
    }
    res.json({ message: "User deleted successfully" });
  });
});

// Skills CRUD
app.get("/skills", (req, res) => {
  const query = "SELECT * FROM skills";
  connection.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error fetching skills" });
    }
    res.json(results);
  });
});

app.get("/skills/:id", (req, res) => {
  const query = "SELECT * FROM skills WHERE id = ?";
  connection.query(query, [req.params.id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error fetching skill" });
    }
    res.json(results[0]);
  });
});

app.put("/skills/:id", (req, res) => {
  const { lang, percentage, senior, imgSkill } = req.body;
  const query = "UPDATE skills SET lang = ?, percentage = ?, senior = ?, imgSkill = ? WHERE id = ?";
  connection.query(query, [lang, percentage, senior, imgSkill, req.params.id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error updating skill" });
    }
    res.json({ message: "Skill updated successfully" });
  });
});

app.delete("/skills/:id", (req, res) => {
  const query = "DELETE FROM skills WHERE id = ?";
  connection.query(query, [req.params.id], (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Error deleting skill" });
    }
    res.json({ message: "Skill deleted successfully" });
  });
});

// ... (keep your existing routes)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
